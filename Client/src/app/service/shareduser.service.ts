import { Injectable } from '@angular/core';

@Injectable()
export class ShareduserService {
  currentUser: any;
  pwd: string;
  remember: string;
  resp: {currentUser,pwd,remember};
  
  constructor() {
    debugger;
    if (localStorage.getItem('currentUser')) {
      let a = JSON.parse(localStorage.getItem('currentUser'));
     console.log(a);
     this.currentUser = a.username;
     this.pwd = localStorage.getItem('password');
     this.remember = localStorage.getItem('remember');
     console.log(this.currentUser);
    }
  }

  getCurrentUser() {
    debugger;
    if (localStorage.getItem('currentUser')) {
      let a = JSON.parse(localStorage.getItem('currentUser'));
      this.currentUser = a.username;
      this.pwd = localStorage.getItem('password');
      this.remember = localStorage.getItem('remember');
      this.resp = {currentUser:this.currentUser,pwd:this.pwd,remember:this.remember}
      return { username: this.currentUser, password: this.pwd, remember: this.remember};
    }
  }

  
}
