import { TestBed, inject } from '@angular/core/testing';

import { DriveService }     from './drive.service';
import { GoogleApiService, NgGapiClientConfig, NG_GAPI_CONFIG } from 'ng-gapi';
import { AuthService }          from '../auth.service';

let gapiClientConfig: NgGapiClientConfig = {
    client_id: "659602254635-j2lfo490qpi9r94pd1tfjnjas9jfs8t6.apps.googleusercontent.com",
    discoveryDocs: ["https://drive.googleapis.com/$discovery/rest?version=v3"],
    scope: ["https://www.googleapis.com/auth/drive.file"]
    .join(" ")
  };

describe('DriveService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [DriveService,  AuthService, GoogleApiService,
        {
           provide: NG_GAPI_CONFIG,
           useValue: gapiClientConfig
        }]
    });
  });

it('should be created', inject([DriveService], (service: DriveService) => {
    expect(service).toBeTruthy();
})); 
});
