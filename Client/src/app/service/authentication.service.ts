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
  loggedIn$ = this.loggedIn.asObservable();

  setlog(log: boolean) {
    this.loggedIn.next(log);
  }

  constructor(private http: Http, private config: AppConfig, private router: Router, private _shared: ShareduserService) { }

  login(username: string, password: string, remember: boolean) {
    debugger;
    return this.http.post(this.config.apiUrl + '/users/authenticate', { username: username, password: password })
      .map((res: Response) => {
        //login successful if there's a jwt token in the response
        let user = res.json();
        
        this._shared.resp = { currentUser: username, pwd: password, remember: remember };
        this._shared.setlog(true);
        //this._shared.loggedIn = true;
        this.rememberMe = remember;
        this.loggedIn.next(true);
        if (user && user.token) {
          //store user details and jwt token in local storage
          //to keep user logged in between page refreshes
          if (remember) {
            localStorage.setItem('currentUser', JSON.stringify(user));
            localStorage.setItem('password', password);
            localStorage.setItem('remember', "true");
            localStorage.setItem('loggedin', "true");
          }
          //else {
          //  sessionStorage.setItem('currentUser', JSON.stringify(user));
          //}
        }
      });
  }

  logout() {
    return this.http.post(this.config.apiUrl + '/users/logout', {}).map((resp: Response) => {
      if (this.rememberMe == true) {
        this._shared.resp = null;
        //this._shared.loggedIn = false;
        this._shared.setlog(false);
        this.loggedIn.next(false);
        localStorage.removeItem("loggedin");
        // sessionStorage.removeItem('currentUser');
        // this.router.navigate[('/login')];
      }
      else {
        // remove user from local storage to log user out

        //sessionStorage.removeItem('currentUser');
        localStorage.removeItem('currentUser');
        localStorage.removeItem('password');
        localStorage.removeItem('remember');
        localStorage.removeItem("loggedin");
        this._shared.setlog(false);
        //this._shared.loggedIn = false;
        this.loggedIn.next(false);
      }
    })

  }
}
