import { Injectable } from '@angular/core';
import { debounce } from 'rxjs/operator/debounce';

@Injectable()
export class ShareduserService {
  currentUser: any;
  pwd: string;
  remember: string;
  resp: {name,pwd,remember};
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

  setCurrentUser(user: any, ) {
    debugger;
    this.resp = user;
  }
  setRemember(val: boolean) {
    if (val == true) {
      this.remember = "true";
    }
    else {
      this.remember = "false"; 
    }
  }

  getRemember() {
    return this.remember;
  }

  setlog(log: boolean) {
    debugger;
    this.loggedIn = log;
  }

  getLog() {
    return this.loggedIn;
  }

  checkUser() {
    debugger;
    if (localStorage.getItem('currentUser')) {
      let a = JSON.parse(localStorage.getItem('currentUser'));
      this.currentUser = a.username?a.username:a.name;
      this.pwd = localStorage.getItem('password');
      this.remember = localStorage.getItem('remember');
      this.resp = { name: this.currentUser, pwd: this.pwd, remember: this.remember }
    }


  }
}
