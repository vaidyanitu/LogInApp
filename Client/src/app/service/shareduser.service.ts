import { Injectable } from '@angular/core';
import { debounce } from 'rxjs/operator/debounce';

@Injectable()
export class ShareduserService {
  currentUser: any;
  pwd: string;
  remember: string;
  resp: {currentUser,pwd,remember};
  loggedIn:boolean;
  
  
  constructor() {
    debugger;
    this.checkUser();
    if (localStorage.getItem('loggedin')) {
      this.loggedIn = true;
    }
    else {
      this.loggedIn = false;
    }
  }

  getCurrentUser() {
    this.checkUser();
    return this.resp;

  }

  setlog(log: boolean) {
    this.loggedIn = log;
  }

  getLog() {
    return this.loggedIn;
  }

  checkUser() {
    if (localStorage.getItem('currentUser')) {
      let a = JSON.parse(localStorage.getItem('currentUser'));
      this.currentUser = a.username;
      this.pwd = localStorage.getItem('password');
      this.remember = localStorage.getItem('remember');
      this.resp = { currentUser: this.currentUser, pwd: this.pwd, remember: this.remember }
    }


  }
}
