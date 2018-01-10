import { DriveRequestBody }      from './drive-request-body';

export class FolderRequestBody extends DriveRequestBody{

    constructor(name:string) {
        super(name, "application/vnd.google-apps.folder");
    } 
    
}
