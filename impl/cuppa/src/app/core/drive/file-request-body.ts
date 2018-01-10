import { DriveRequestBody }      from './drive-request-body';

export class FileRequestBody extends DriveRequestBody{

    constructor(name:string) {
        super(name, "application/vnd.google-apps.file");
    }
}
