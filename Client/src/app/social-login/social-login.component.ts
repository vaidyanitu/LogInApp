import { Component, OnInit } from '@angular/core';
import { AuthService,GoogleLoginProvider } from "angularx-social-login";
import { SocialUser } from 'angularx-social-login/src/entities/user';
import { ShareduserService } from '../service/shareduser.service';
import { Router } from '@angular/router';
import { Local } from 'protractor/built/driverProviders';
import { AuthenticationService } from '../service/authentication.service';

@Component({
  selector: 'social-login',
  templateUrl: './social-login.component.html',
  styleUrls: ['./social-login.component.css']
})
export class SocialLoginComponent implements OnInit {

  private user: SocialUser;
  private loggedIn: boolean;

  constructor(private socialLogin:AuthService, private sharedUser:ShareduserService, private router:Router,private auth:AuthenticationService) { }

  signInWithGoogle(): void {
    debugger;
    this.socialLogin.signIn(GoogleLoginProvider.PROVIDER_ID);
    localStorage.setItem('loggedin', 'true');
    console.log(localStorage.getItem('loggedIn'));
  }

  ngOnInit() {
    debugger;
    this.loggedIn = false;
    this.socialLogin.authState.subscribe((user) => {
      this.user = user;
      console.log(user);
      this.loggedIn = (user != null);
      console.log(this.loggedIn);
      
      console.log(this.sharedUser.getLog());
      if (localStorage.getItem('loggedin')) {
        localStorage.setItem('currentUser', JSON.stringify(user));
        this.sharedUser.setlog(this.loggedIn);
        this.router.navigate(['/home']);
        this.auth.setlog(true);
      }
    })
  }


  //signOut(): void {
  //  this.socialLogin.signOut();
  //  this.sharedUser.setlog(false);
  //  this.loggedIn = false;
  //  localStorage.removeItem('loggedin');
  //  this.auth.setlog(false);
  //}

}
