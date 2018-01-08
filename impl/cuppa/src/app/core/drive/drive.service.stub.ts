import { Injectable }           from '@angular/core';
import { IDriveService }        from './drive.service.interface';
import { RequestOptionsArgs }   from "@angular/http";

@Injectable()
export class DriveServiceStub implements IDriveService {
    
    public insertFile(path:string, file:any){}
    public updateFile(path:string, file:any){}
    public readFile(path:string): any{}
    public createFolder(folderName: string){}
    public updateFolder(existingFolderName: string, newFolderName: string){}
    public deleteFolder(folderName: string){}
}
