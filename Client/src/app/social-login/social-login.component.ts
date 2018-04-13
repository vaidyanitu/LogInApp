import { Component, OnInit } from '@angular/core';
import { AuthService,GoogleLoginProvider } from "angularx-social-login";
import { SocialUser } from 'angularx-social-login/src/entities/user';
import { ShareduserService } from '../service/shareduser.service';
import { Router } from '@angular/router';
import { Local } from 'protractor/built/driverProviders';
import { AuthenticationService } from '../service/authentication.service';
import { Http, Headers, RequestOptions, Response } from '@angular/http';
import { AppConfig } from '../app.config';


@Component({
  selector: 'social-login',
  templateUrl: './social-login.component.html',
  styleUrls: ['./social-login.component.css']
})
export class SocialLoginComponent implements OnInit {

  private user: SocialUser;
  private loggedIn: boolean;

  constructor(private socialLogin: AuthService, private sharedUser: ShareduserService,
    private router: Router, private auth: AuthenticationService,
    private http: Http, private config: AppConfig) { }

  signInWithGoogle(): void {
    this.socialLogin.signIn(GoogleLoginProvider.PROVIDER_ID);
    localStorage.setItem('loggedin', 'true');
    //console.log(localStorage.getItem('loggedIn'));
  }

  ngOnInit() {
    this.loggedIn = false;
    this.socialLogin.authState.subscribe((user) => {
      this.user = user;
      //console.log(user);
      this.loggedIn = (user != null);
      //console.log(this.loggedIn);
      
      //console.log(this.sharedUser.getLog());
      if (localStorage.getItem('loggedin')) {
        localStorage.setItem('currentUser', JSON.stringify(user));
        localStorage.removeItem('password');
        this.sharedUser.setlog(this.loggedIn);
        this.issueJwtToken();
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
  issueJwtToken() {
    var currentuser = JSON.parse(localStorage.getItem('currentUser'));
    if (currentuser && currentuser.id)
      var userId = currentuser.id;
    let param: URLSearchParams = new URLSearchParams();
    param.append('Id', userId);
    var options = new RequestOptions({ params: param });
    var url = this.config.apiUrl + '/users/issueToken?UserId=' + userId;
    this.http.post(url, {})
      .map((res: Response) => {
        //login successful if there's a jwt token in the response
        let user = res.json();
        let jwtToken = user.token;
        currentuser.token = jwtToken;
        currentuser = JSON.stringify(currentuser);
        localStorage.setItem('currentUser', currentuser);
      })
      .subscribe(x => { }
        //console.log(x)
      );
      
  }

}
