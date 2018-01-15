import { Observable }           from "rxjs";
import { ErrorObservable }      from "rxjs/observable/ErrorObservable";

import { IHttpErrorHandler }    from './http-error-handler.interface';

export class HttpErrorHandlerStub implements IHttpErrorHandler {

    public handleError(response: Response): ErrorObservable {
        return ErrorObservable.throw({message: "test error message", code: response.status})
    };

}
