import { Injectable } from '@angular/core';

@Injectable()
export class ShareduserService {
  currentUser: any;
  pwd: string;
  resp: {currentUser,pwd};
  
  constructor() {
    debugger;
    if (localStorage.getItem('currentUser')) {
      let a = JSON.parse(localStorage.getItem('currentUser'));
     console.log(a);
     this.currentUser = a.username;
     this.pwd = localStorage.getItem('password');
     console.log(this.currentUser);
    }
  }

  getCurrentUser() {
    debugger;
    if (localStorage.getItem('currentUser')) {
      let a = JSON.parse(localStorage.getItem('currentUser'));
      this.currentUser = a.username;
      this.pwd = localStorage.getItem('password');
      this.resp = {currentUser:this.currentUser,pwd:this.pwd}
      return this.resp;
    }
  }

  
}
