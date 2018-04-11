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
  rememberMe: boolean;
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
        
        let shareduser = { name: username, pwd: password, remember: remember };
        this._shared.setlog(true);
        this._shared.setCurrentUser(shareduser);
        //this._shared.loggedIn = true;
        this._shared.setRemember(remember);
        this.loggedIn.next(true);
        if (user && user.token) {
          //store user details and jwt token in local storage
          //to keep user logged in between page refreshes         
            localStorage.setItem('currentUser', JSON.stringify(user));
            localStorage.setItem('password', password);            
          localStorage.setItem('loggedin', "true");
          if (remember) {
            localStorage.setItem('remember', "true");
          }
          else {
            localStorage.setItem('remember', "false");
          }
        }
      });
  }

  logout() {
    debugger;
    return this.http.post(this.config.apiUrl + '/users/logout', {});
 
  }
}
