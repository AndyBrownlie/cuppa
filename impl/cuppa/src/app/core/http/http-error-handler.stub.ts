import { Response }             from "@angular/http";
import { Observable }           from "rxjs";
import { ErrorObservable }      from "rxjs/observable/ErrorObservable";
import { Injectable }           from "@angular/core";

import { IHttpErrorHandler }    from './http-error-handler.interface';

@Injectable()
export class HttpErrorHandlerStub implements IHttpErrorHandler {

    public handleError(response: Response): ErrorObservable {
        return ErrorObservable.throw({message: "test error message", code: response.status})
    };

}
