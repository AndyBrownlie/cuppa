import { Injectable }           from '@angular/core';
import { Observable }           from "rxjs";
import { RequestOptionsArgs }   from "@angular/http";

@Injectable()
export class HttpServiceStub {

    public get(url: string, options?: RequestOptionsArgs): Observable<any>{
        return new Observable<any>();
    }
    
    public post(url: string, requestBody: any, options?: RequestOptionsArgs): Observable<any>{
        return new Observable<any>();
    }
    
    public put(url: string, requestBody: any, options?: RequestOptionsArgs): Observable<any>{
        return new Observable<any>();
    }
    
    public delete(url: string, options?: RequestOptionsArgs): Observable<any>{
        return new Observable<any>();
    }

}
