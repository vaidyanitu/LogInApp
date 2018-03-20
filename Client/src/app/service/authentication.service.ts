import { Injectable } from '@angular/core';
import { Http, Headers, Response } from '@angular/http';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/map';
import { AppConfig } from '../app.config';
import { Router } from '@angular/router';
import { ShareduserService } from '../service/shareduser.service';

@Injectable()
export class AuthenticationService {
  rememberMe: boolean = false;
  constructor(private http: Http, private config: AppConfig, private router: Router, private _shared: ShareduserService) { }

  login(username: string, password: string, remember: boolean) {
    debugger;
    return this.http.post(this.config.apiUrl + '/users/authenticate', { username: username, password: password })
      .map((res: Response) => {
        //login successful if there's a jwt token in the response
        let user = res.json();
        this._shared.currentUser = { username: username, password: password };
        this.rememberMe = remember;
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
    debugger;
    console.log("logged out");
    if (this.rememberMe == true) {
      this._shared.currentUser = null;
      // sessionStorage.removeItem('currentUser');
      // this.router.navigate[('/login')];
    }
    else {
      // remove user from local storage to log user out

      //sessionStorage.removeItem('currentUser');
      localStorage.removeItem('currentUser');
      localStorage.removeItem('password');
      localStorage.removeItem('remember');
    }

  }
}
