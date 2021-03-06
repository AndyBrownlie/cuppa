import { Response }             from "@angular/http";
import { Observable }           from "rxjs";
import { ErrorObservable }      from "rxjs/observable/ErrorObservable";
import { Injectable }           from "@angular/core";
import { Router }               from "@angular/router";
import { IHttpErrorHandler }    from './http-error-handler.interface';

@Injectable()
export class HttpErrorHandler implements IHttpErrorHandler {

    constructor(//private securityService: SecurityService,
                private router: Router) {
    }

    /**
     * TODO: SecurityService and auth errors handling
     * Simple handler , uses security to check if user is not authorized
     * @param response
     * @returns {any}
     */
    public handleError(response: Response): ErrorObservable {
        let errMsg: string = `${response.status} - ${response.statusText}`;
        let serverResponse: any = response.statusText == "OK" ? response.json() : {};

        this.redirectToErrorPage(response);

        console.error(errMsg);
        return Observable.throw({message: errMsg, code: response.status, error: serverResponse})
    }

    private redirectToErrorPage(response: Response) {
        if (response.status === 404 || response.status === 400 || response.status === 500) {
            this.router.navigate(['error', response.status]);
        }
    }

}