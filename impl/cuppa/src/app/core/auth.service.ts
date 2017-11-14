import { Component, OnInit, 
        AfterViewInit, NgZone, Injectable } from '@angular/core';
import { BehaviorSubject }                  from 'rxjs/BehaviorSubject';
import { Observable }                       from 'rxjs/Observable';

declare const gapi: any;

export interface IAuthService {
    loggedIn$: Observable<boolean>;
    
    login(googleLoginButtonId, clientId);
}


@Injectable()
export class AuthService implements IAuthService {

  constructor(private zone: NgZone) { }
  
    private userAuthToken: string = null;
    private userDisplayName: string = "empty";
    private loggedInSource = new BehaviorSubject<boolean>(false);
    public loggedIn$ = this.loggedInSource.asObservable();

    public login(googleLoginButtonId, clientId) {
      // Converts the Google login button stub to an actual button.
      gapi.signin2.render(googleLoginButtonId, {
        "onSuccess": this.onGoogleLoginSuccess,
        "scope": "profile email",
        "theme": "dark",
        "client_id": clientId
    });
  }

  // Triggered after a user successfully logs in using the Google external
    // login provider.
    private onGoogleLoginSuccess = (loggedInUser) => {
        this.zone.run(() => {
            this.userAuthToken = loggedInUser.getAuthResponse().id_token;
            this.userDisplayName = loggedInUser.getBasicProfile().getName();
            this.loggedInSource.next(true);
        });
    }

}
