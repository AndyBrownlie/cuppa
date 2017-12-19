import { IRequestBody }     from './request-body.interface';
import { IRequestArgs }     from './request-args.interface';
import { IRequestHeaders }   from './request-headers.interface';

export class RequestArgs implements IRequestArgs {

    constructor(requestBody: IRequestBody, requestHeaders: IRequestHeaders) {
        this.path = "/upload/drive/v3/files";
        this.body = requestBody.toJSONString();
        this.headers = requestHeaders;
       
    }

    path: string;
    method: string;
    params: string; //object
    headers: IRequestHeaders; //object
    body: string;

    public toArgs(): string[] {
        let args: string[] = [this.path, this.method, this.params, this.headers.toJSONString(), this.body];
        console.log(args);
        return args;
    }
}

