import { RequestArgs }      from './request-args';
import { IRequestBody }     from './request-body.interface';
import { IRequestHeaders }   from './request-headers.interface';

export class PostRequestArgs extends RequestArgs {
    constructor(requestBody: IRequestBody, requestHeaders: IRequestHeaders) {
        super(requestBody, requestHeaders);
        this.method = "POST";
    }
}
