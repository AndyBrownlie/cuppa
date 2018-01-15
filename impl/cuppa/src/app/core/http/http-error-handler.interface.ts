import { ErrorObservable }      from "rxjs/observable/ErrorObservable";
import { Response }             from "@angular/http";

export interface IHttpErrorHandler {
    handleError(response: Response): ErrorObservable;
}
