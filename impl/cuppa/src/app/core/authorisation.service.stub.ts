import { Component, OnInit, AfterViewInit, 
            NgZone, Injectable }            from '@angular/core';
import { Observable }                       from 'rxjs/Observable';
import { IAuthorisationService }            from './authorisation.service';

@Injectable()
export class AuthorisationServiceStub implements IAuthorisationService {

  constructor() { }

    public loggedIn$: Observable<boolean>;
    public loggedIn: boolean;
    public login(googleLoginButtonId, clientId) {
  
  }



}
