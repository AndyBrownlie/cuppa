import { IRequestBody }     from './request-body.interface';
import { IRequestArgs }     from './request-args.interface';

export class RequestArgs implements IRequestArgs {

    constructor(requestBody: IRequestBody) {
        this.path = "/upload/drive/v3/files";
        this.body = requestBody.toJSONString();
    }

    path: string;
    method: string;
    params: string; //object
    headers: string; //object
    body: string;

    public toArgs(): string[] {
        
        return JSON.stringify(this);
    }
}
