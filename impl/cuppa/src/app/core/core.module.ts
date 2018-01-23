import { NgModule, ModuleWithProviders }        from '@angular/core';
import { CommonModule }                         from '@angular/common';
import { MatIconModule }                        from '@angular/material';
import { HttpModule }                           from '@angular/http';
import { GoogleApiModule, GoogleApiService }    from 'ng-gapi';
import { NgGapiClientConfig, NG_GAPI_CONFIG }   from 'ng-gapi';

import { CoreRoutingModule }                    from './core-routing.module';
import { ToolbarComponent }                     from './toolbar/toolbar.component';
import { DriveService }                         from './drive/drive.service';
import { IDriveService }                        from './drive/drive.service.interface';
import { DRIVE_SERVICE }                        from './drive/drive.constants';
import { DriveServiceStub }                     from './drive/drive.service.stub';
import { AuthService }                          from './auth.service';
import { AUTH_SERVICE }                         from './core.constants';
import { HttpService }                          from './http/http-service';
import { HTTP_SERVICE }                         from './http/http.constants';
import { HttpErrorHandler }                     from './http/http-error-handler';


let gapiClientConfig: NgGapiClientConfig = {
  client_id: "659602254635-j2lfo490qpi9r94pd1tfjnjas9jfs8t6.apps.googleusercontent.com",
  discoveryDocs: ["https://drive.googleapis.com/$discovery/rest?version=v3"],
  scope: ["https://www.googleapis.com/auth/drive.file"]
  .join(" ")
};
 
@NgModule({
  imports: [
    CommonModule,
    CoreRoutingModule,
    HttpModule,
    MatIconModule,
  ],
  exports: [ToolbarComponent],
  providers: [AuthService, HttpErrorHandler, HttpService],
  declarations: [ToolbarComponent],
  
})
export class CoreModule { 
    static forRoot(): ModuleWithProviders {
        return {
          ngModule: CoreModule,
          providers: [
            {provide: AUTH_SERVICE, useClass: AuthService},
            {provide: HTTP_SERVICE, useClass: HttpService},
            {provide: DRIVE_SERVICE, useClass: DriveService}
        ]
        };
      }
}
