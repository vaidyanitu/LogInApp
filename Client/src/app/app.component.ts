import { Component,Output} from '@angular/core';
import { RouterModule, Routes, Router } from '@angular/router';
import {ShareduserService} from './service/shareduser.service';
import { debug } from 'util';
import { AuthenticationService } from './service/authentication.service';
import { AuthService, GoogleLoginProvider } from "angularx-social-login";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'Login Application';
  loggedIn: boolean = false;

 currentUser:any;
  constructor(private _sharedservice:ShareduserService, private authservice:AuthenticationService, private router:Router,private socialLogin:AuthService) {
    this.currentUser=this._sharedservice.resp;
    authservice.loggedIn$.subscribe(
      status=>{
        this.loggedIn=status;
        this._sharedservice.loggedIn=this.loggedIn;
        //console.log(status+'from app component');
      }
    )
  }

  //logout() {
  //  debugger;
  //  this.authservice.logout().subscribe(x => {
  //    this._sharedservice.setlog(false);
  //    this.router.navigate(['/login']);
  //  })
  //}

  signOut(): void {
    //window.location.href = 'https://mail.google.com/mail/u/0/?logout&hl=en';    
    this._sharedservice.setlog(false);
    var rem = this._sharedservice.getRemember();
    if (rem =="true") {
      this.loggedIn = false;
      this._sharedservice.setCurrentUser(null);
      this._sharedservice.setlog(false);
      this.authservice.setlog(false);
      localStorage.removeItem("loggedin");
      this.router.navigate(['/login']);
    }
    else {
      this.authservice.logout();
      this._sharedservice.setCurrentUser(null);
      localStorage.removeItem('currentUser');
      localStorage.removeItem('password');
      localStorage.removeItem('remember');
      localStorage.removeItem("loggedin");
      this._sharedservice.setlog(false);
      this.authservice.setlog(false);
      this.router.navigate(['/login']);

    }
    //this._sharedservice.setCurrentUser(null);
    //this.loggedIn = false;
    //localStorage.removeItem('loggedIn');
    //this.authservice.logout();
    //this.router.navigate(['/login']);
  }

}

