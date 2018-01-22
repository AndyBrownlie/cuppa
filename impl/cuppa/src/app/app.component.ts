import { Component, OnInit, AfterViewInit, NgZone }     from '@angular/core';
import { DomSanitizer }                                 from '@angular/platform-browser';
import { Subscription }                                 from 'rxjs/Subscription';
import { AuthService }                                  from './core/auth.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})

export class AppComponent implements AfterViewInit {

    constructor(private _zone: NgZone, private authService: AuthService) { 

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
                                    .subscribe(loggedIn => this.loggedIn = loggedIn);

                                    
        
    }

    ngOnDestroy() {
        //Called once, before the instance is destroyed.
        //Add 'implements OnDestroy' to the class.
        this.loggedInSubscription.unsubscribe();
    }
    
}
