import { Injectable,Inject }    from '@angular/core';
import { GoogleApiService }     from 'ng-gapi';

import { IDriveService }        from './drive.service.interface';
import { AuthService }          from '../auth.service';
import { IAuthService }         from '../auth.service.interface';
import { AUTH_SERVICE }         from '../core.constants';
import { FolderRequestBody }    from './folder-request-body';
import { FileRequestBody }      from './file-request-body';
import { PostRequestArgs }      from './post-request-args';
import { DriveRequestHeaders }  from './drive-request-headers';
import { HTTP_SERVICE }         from '../http/http.constants';
import { IHttpService }         from '../http/http-service.interface';

//declare const gapi: any;

@Injectable()
export class DriveService implements IDriveService {

  constructor(private gapiService: GoogleApiService, 
                @Inject(AUTH_SERVICE) private authService: IAuthService, 
                @Inject(HTTP_SERVICE) private httpService: IHttpService) {
                    this.authHeader.append('Authorization', 'Bearer ' + authService.getToken())
                }

    private authHeader: Headers = new Headers();

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
        var requestArgs = new PostRequestArgs(new FolderRequestBody(folderName), 
                                                new DriveRequestHeaders(this.authService.getToken()));
       // this.gapiService.onLoad().subscribe(() => {
            
            //gapi.client.init();

            this.httpService.post(requestArgs.url, requestArgs.body, requestArgs);

             /*var request = gapi.client.request({"path": requestArgs.path, 
                                                "method": requestArgs.method,
                                                "params": "",//requestArgs.params,
                                                "headers": requestArgs.headers,
                                                "body": requestArgs.body
                                            });
             request.then((response)=> {
                console.log(response);        
            }); */                               
       // }); 

    }

    public updateFolder(existingFolderName: string, newFolderName: string){
        var folderRequestBody = new FolderRequestBody(newFolderName).toJSONString();
    }

    public deleteFolder(folderName: string){
        var folderRequestBody = new FolderRequestBody(folderName).toJSONString();
    }
}
