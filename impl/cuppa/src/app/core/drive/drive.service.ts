import { Injectable }         from '@angular/core';
//import { GoogleApiService }   from 'ng-gapi';

import { IDriveService }      from './drive.service.interface';
import { AuthService }        from '../auth.service';

@Injectable()
export class DriveService implements IDriveService {

  constructor(//private gapiService: GoogleApiService, 
    private authService: AuthService) {}

    public insertFile(path:string, file:any){
    //  this.gapiService.onLoad().subscribe(() => {
          //gapi.client.request()
      //});
  }

  public updateFile(path:string, file:any){

  }

  public readFile(path:string): any{

  }


  public createFolder(folderName: string){}
  public updateFolder(existingFolderName: string, newFolderName: string){}
  public deleteFolder(folderName: string){}
}
