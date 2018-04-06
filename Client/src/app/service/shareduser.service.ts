import { Injectable } from '@angular/core';

@Injectable()
export class ShareduserService {
  currentUser: any;
  pwd: string;
  remember: string;
  resp: {currentUser,pwd,remember};
  loggedIn:boolean;
  
  
  constructor() {
    if (localStorage.getItem('currentUser')) {
      let a = JSON.parse(localStorage.getItem('currentUser'));
     this.currentUser = a.username;
     this.pwd = localStorage.getItem('password');
     this.remember = localStorage.getItem('remember');
     this.resp={currentUser:this.currentUser,pwd:this.pwd,remember:this.remember}
    }
  }

  getCurrentUser() {
    if (localStorage.getItem('currentUser')) {
      let a = JSON.parse(localStorage.getItem('currentUser'));
      this.currentUser = a.username;
      this.pwd = localStorage.getItem('password');
      this.remember = localStorage.getItem('remember');
      this.resp = {currentUser:this.currentUser,pwd:this.pwd,remember:this.remember}
      return this.resp;
    }
  }

  
}
