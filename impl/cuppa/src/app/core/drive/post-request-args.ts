import { RequestArgs }     from './request-args';
import { IRequestBody }     from './request-body.interface';

export class PostRequestArgs extends RequestArgs {
    constructor(requestBody: IRequestBody) {
        super(requestBody);
        this.method = "POST";
    }
}
