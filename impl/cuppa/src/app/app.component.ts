import { Component, OnInit, AfterViewInit, NgZone } from '@angular/core';
import { DomSanitizer } from '@angular/platform-browser';
import { Subscription } from 'rxjs/Subscription';
import { AuthorisationService } from './core/authorisation.service';

//declare const gapi: any;

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})

export class AppComponent implements AfterViewInit {

    constructor(private _zone: NgZone, private authService: AuthorisationService) { 
        console.log(this);
    }

    public title: string = 'cuppa';
    private clientId: string = "659602254635-j2lfo490qpi9r94pd1tfjnjas9jfs8t6.apps.googleusercontent.com";
    public googleLoginButtonId: string  = "google-login-button";
    private userAuthToken: string = null;
    private userDisplayName: string = "empty";
    private loggedIn: boolean = false;
    private loggedInSubscription: Subscription;

    ngAfterViewInit() {
        this.authService.login(this.googleLoginButtonId, this.clientId);
        this.loggedInSubscription = this.authService.loggedIn$
                                    .subscribe(loggedIn => this.loggedIn = loggedIn)
        
        
        /* // Converts the Google login button stub to an actual button.
        gapi.signin2.render(this.googleLoginButtonId, {
            "onSuccess": this.onGoogleLoginSuccess,
            "scope": "profile email",
            "theme": "dark",
            "client_id": this.clientId
        }); */
    }
    
    // Triggered after a user successfully logs in using the Google external
    // login provider.
   /*  onGoogleLoginSuccess = (loggedInUser) => {
        this._zone.run(() => {
            this.userAuthToken = loggedInUser.getAuthResponse().id_token;
            this.userDisplayName = loggedInUser.getBasicProfile().getName();
            this.loggedIn = true;
        });
    } */
    
}
