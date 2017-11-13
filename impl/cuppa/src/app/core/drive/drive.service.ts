import { Injectable }           from '@angular/core';
import { GoogleApiService }     from 'ng-gapi';

import { IDriveService }        from './drive.service.interface';
import { AuthService }          from '../auth.service';
import { FolderRequestBody }    from './folder-request-body';
import { FileRequestBody }      from './file-request-body';
import { PostRequestArgs }      from './post-request-args';

@Injectable()
export class DriveService implements IDriveService {

  constructor(private gapiService: GoogleApiService, 
    private authService: AuthService) {}

    public insertFile(path:string, file:any){
        this.gapiService.onLoad().subscribe(() => {
         // gapi.client.request(gapi.client.RequestOption)
      }); 
  }

  public updateFile(path:string, file:any){

  }

  public readFile(path:string): any{

  }


    public createFolder(folderName: string){
        var requestArgs = new PostRequestArgs(new FolderRequestBody(folderName));
        this.gapiService.onLoad().subscribe(() => {
            var request = gapi.client.request({"path": requestArgs.path, 
                                                "method": requestArgs.method,
                                                "params": requestArgs.params,
                                                "headers": requestArgs.headers,
                                                "body": requestArgs.body
                                            });
        }); 

    }

    public updateFolder(existingFolderName: string, newFolderName: string){
        var folderRequestBody = new FolderRequestBody(newFolderName).toJSONString();
    }

    public deleteFolder(folderName: string){
        var folderRequestBody = new FolderRequestBody(folderName).toJSONString();
    }
}
