import { RequestOptionsArgs, Headers }       from '@angular/http';
import { IDriveRequestBody }     from './drive-request-body.interface';

export class DriveRequestArgs implements RequestOptionsArgs {

    constructor(requestBody: IDriveRequestBody, requestHeaders: Headers) {
        this.url = "/upload/drive/v3/files";
        this.body = requestBody.toJSONString();
        this.headers = requestHeaders;
       
    }

    url: string;
    method: string;
    search: string;
    params: string; //search URL Params object?
    headers: Headers; 
    body: string;
}

