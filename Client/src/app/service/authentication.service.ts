import { Injectable } from '@angular/core';
import { Http, Headers, Response } from '@angular/http';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/map';
import { AppConfig } from '../app.config';
import { Router } from '@angular/router';
import { ShareduserService } from '../service/shareduser.service';
import { Subject } from 'rxjs/Subject';

@Injectable()
export class AuthenticationService {
  rememberMe: boolean = true;
private loggedIn=new Subject<boolean>();
loggedIn$=this.loggedIn.asObservable();

  constructor(private http: Http, private config: AppConfig, private router: Router, private _shared: ShareduserService) { }

  login(username: string, password: string, remember: boolean) {
    return this.http.post(this.config.apiUrl + '/users/authenticate', { username: username, password: password })
      .map((res: Response) => {
        //login successful if there's a jwt token in the response
        let user = res.json();
        
        this._shared.resp = { currentUser: username, pwd: password,remember:remember };
        this.rememberMe = remember;
        this.loggedIn.next(true);
        if (user && user.token) {
          //store user details and jwt token in local storage
          //to keep user logged in between page refreshes
          if (remember) {
            localStorage.setItem('currentUser', JSON.stringify(user));
            localStorage.setItem('password', password);
            localStorage.setItem('remember', "true");
          }
          //else {
          //  sessionStorage.setItem('currentUser', JSON.stringify(user));
          //}
        }
      });
  }

  logout() {
    console.log("logged out");
    if (this.rememberMe == true) {
      this._shared.resp = null;
      this.loggedIn.next(false);
      // sessionStorage.removeItem('currentUser');
      // this.router.navigate[('/login')];
    }
    else {
      // remove user from local storage to log user out

      //sessionStorage.removeItem('currentUser');
      localStorage.removeItem('currentUser');
      localStorage.removeItem('password');
      localStorage.removeItem('remember');
      this._shared.loggedIn=false;
      this.loggedIn.next(false);
    }

  }
}
