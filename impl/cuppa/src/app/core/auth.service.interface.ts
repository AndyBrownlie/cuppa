import { Observable }                       from 'rxjs/Observable';

export interface IAuthService {
    loggedIn$: Observable<boolean>;
    
    login(googleLoginButtonId, clientId);
    getToken(): string;
}
