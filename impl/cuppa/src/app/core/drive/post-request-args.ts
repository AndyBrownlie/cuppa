import { Headers }               from '@angular/http';
import { DriveRequestArgs }      from './drive-request-args';
import { IDriveRequestBody }     from './drive-request-body.interface';


export class PostRequestArgs extends DriveRequestArgs {
    constructor(requestBody: IDriveRequestBody, requestHeaders: Headers) {
        super(requestBody, requestHeaders);
        this.method = "POST";
    }
}
