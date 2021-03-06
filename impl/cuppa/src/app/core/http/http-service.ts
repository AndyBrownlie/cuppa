import { Http, RequestOptionsArgs, Response }       from "@angular/http";
import { Injectable, Inject }                       from "@angular/core";
import { HttpErrorHandler }                         from "./http-error-handler";
import { IHttpService }                             from './http-service.interface';
import { Observable }           from "rxjs";
import { ErrorObservable }      from "rxjs/observable/ErrorObservable";

@Injectable()
export class HttpService implements IHttpService {

    constructor(@Inject(Http) private  http:Http,
                private errorHandler: HttpErrorHandler) {
    }

    public get(url: string, options?: RequestOptionsArgs): Observable<any> {
        return this.http.get(url, options)
            .map(HttpService.toJsonResponse)
            .catch(response => this.errorHandler.handleError(response));
    }

    public post(url: string, requestBody: any, options?: RequestOptionsArgs): Observable<any> {
        return this.http.post(url, requestBody, options)
            .map(HttpService.toJsonResponse)
            .catch(response => this.errorHandler.handleError(response))
    }

    public put(url: string, requestBody: any, options?: RequestOptionsArgs): Observable<any> {
        return this.http.put(url, requestBody, options)
            .map(HttpService.toJsonResponse)
            .catch(response => this.errorHandler.handleError(response))
    }

    public delete(url: string, options?: RequestOptionsArgs): Observable<any> {
        return this.http.delete(url, options)
            .map(HttpService.toJsonResponse)
            .catch(response => this.errorHandler.handleError(response));
    }

    private static toJsonResponse(response: Response): JSON | number {
        try {
            return response.json();
        } catch (e) {
            return response.status;
        }
    }

}