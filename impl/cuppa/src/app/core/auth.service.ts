import { Component, OnInit, 
        AfterViewInit, NgZone, Injectable } from '@angular/core';
import { BehaviorSubject }                  from 'rxjs/BehaviorSubject';
import { Observable }                       from 'rxjs/Observable';
import { IAuthService }                     from './auth.service.interface';

declare const gapi: any;

@Injectable()
export class AuthService implements IAuthService {

  constructor(private zone: NgZone) { }
  
    private userIdToken: string = null;
    private static SESSION_STORAGE_KEY: string = "accessToken";
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
        console.log("in here");
        this.zone.run(() => {
            this.userIdToken = loggedInUser.getAuthResponse().id_token;
            this.userDisplayName = loggedInUser.getBasicProfile().getName();
            this.loggedInSource.next(true);
            sessionStorage.setItem(
                AuthService.SESSION_STORAGE_KEY, loggedInUser.getAuthResponse().access_token
            );
        });
    }
    
    public getToken(): string {
        let token: string = sessionStorage.getItem(AuthService.SESSION_STORAGE_KEY);
        if (!token) {
            throw new Error("no token set , authentication required");
        }
        return sessionStorage.getItem(AuthService.SESSION_STORAGE_KEY);
    }

}
