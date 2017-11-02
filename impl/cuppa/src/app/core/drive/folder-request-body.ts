import { RequestBody }      from './request-body';

export class FolderRequestBody extends RequestBody{

    constructor(name:string) {
        super(name, "application/vnd.google-apps.folder");
    } 
    
}
