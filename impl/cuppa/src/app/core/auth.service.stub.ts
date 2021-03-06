import { Component, OnInit, AfterViewInit, 
            NgZone, Injectable }            from '@angular/core';
import { Observable }                       from 'rxjs/Observable';
import { IAuthService }                     from './auth.service.interface';

@Injectable()
export class AuthServiceStub implements IAuthService {

  constructor() { }

      public loggedIn$: Observable<boolean>;
      public loggedIn: boolean;
      public login(googleLoginButtonId, clientId) { }
      public getToken(): string {
        return "";
      }


}
