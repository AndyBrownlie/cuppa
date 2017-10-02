import { Component, AfterViewInit, NgZone } from '@angular/core';
import { DomSanitizer } from '@angular/platform-browser';

declare const gapi: any;

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})

export class AppComponent implements AfterViewInit {

    public title: string = 'cuppa';
    private clientId: string = "659602254635-j2lfo490qpi9r94pd1tfjnjas9jfs8t6.apps.googleusercontent.com";
    public googleLoginButtonId: string  = "google-login-button";
    private userAuthToken: string = null;
    private userDisplayName: string = "empty";
    private loggedIn: boolean = false;
        
    constructor(private _zone: NgZone) { 
        console.log(this);
    }

    // Angular hook that allows for interaction with elements inserted by the
    // rendering of a view.

    ngAfterViewInit() {

        // Converts the Google login button stub to an actual button.
        gapi.signin2.render(this.googleLoginButtonId, {
            "onSuccess": this.onGoogleLoginSuccess,
            "scope": "profile email",
            "theme": "dark",
            "client_id": this.clientId
        });
    }
    
    // Triggered after a user successfully logs in using the Google external
    // login provider.
    onGoogleLoginSuccess = (loggedInUser) => {
        this._zone.run(() => {
            this.userAuthToken = loggedInUser.getAuthResponse().id_token;
            this.userDisplayName = loggedInUser.getBasicProfile().getName();
            this.loggedIn = true;
        });
    }
    
}
