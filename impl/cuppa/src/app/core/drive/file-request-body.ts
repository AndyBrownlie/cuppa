import { RequestBody }      from './request-body';

export class FileRequestBody extends RequestBody{

    constructor(name:string) {
        super(name, "application/vnd.google-apps.file");
    }
}
