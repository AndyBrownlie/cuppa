import { TestBed, inject }                                        from '@angular/core/testing';
import { Http }                                                   from '@angular/http';

import { GoogleApiService, NgGapiClientConfig, NG_GAPI_CONFIG }   from 'ng-gapi';

import { DriveService }                                           from './drive.service';

import { AuthService }                                            from '../auth.service';
import { AuthServiceStub }                                        from '../auth.service.stub';
import { AUTH_SERVICE }                                           from '../core.constants';
import { HttpService }                                            from '../http/http-service';
import { HTTP_SERVICE }                                           from '../http/http.constants';
import { HttpServiceStub }                                        from '../http/http-service.stub';

let gapiClientConfig: NgGapiClientConfig = {
    client_id: "659602254635-j2lfo490qpi9r94pd1tfjnjas9jfs8t6.apps.googleusercontent.com",
    discoveryDocs: ["https://drive.googleapis.com/$discovery/rest?version=v3"],
    scope: ["https://www.googleapis.com/auth/drive.file"]
    .join(" ")
  };

describe('DriveService', () => {
    beforeEach(() => {
      TestBed.configureTestingModule({
        providers: [DriveService, GoogleApiService, Http,
          {provide: AUTH_SERVICE, useClass: AuthServiceStub},
          {provide: NG_GAPI_CONFIG, useValue: gapiClientConfig},
          {provide: HTTP_SERVICE, useClass: HttpServiceStub},
        ]
      });
    });

    it('should be created', inject([DriveService], (service: DriveService) => {
        expect(service).toBeTruthy();
    })); 

});
