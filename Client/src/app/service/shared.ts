import { Injectable } from '@angular/core';

@Injectable()
export class SharedService {
  currentUser: {};
  constructor() {
    if (localStorage.getItem('currentUser') && localStorage.getItem('password') && localStorage.getItem('remember')) {
      var a = JSON.parse(localStorage.getItem('currentUser'));
      var b = localStorage.getItem('password');
      var c = localStorage.getItem('remember');
      var d = { username: a.username, password: b, remember:c };
      this.currentUser = d;
    }
  }

  getCurrentUser() {
    debugger;
    if (localStorage.getItem('currentUser') && localStorage.getItem('password') && localStorage.getItem('remember')) {
      var a = JSON.parse(localStorage.getItem('currentUser'));
      var b = localStorage.getItem('password');
      var c = localStorage.getItem('remember');
      var d = { username: a.username, password: b, remember: c };
      this.currentUser = d;
      return ({ "username": a, "password": b, "remember": c });
    }
  }
}
