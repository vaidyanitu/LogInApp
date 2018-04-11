import { Component, OnInit , NgZone} from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';

import { AlertService } from '../service/alert.service';
import { AuthenticationService } from '../service/authentication.service';
import { ShareduserService } from '../service/shareduser.service';
import { window } from 'rxjs/operator/window';


@Component({
  selector: 'login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
 
  model: any = {};
  loading = false;
  returnUrl: string;
  rememberMe: boolean=false;
  loggedIn:boolean=false;
  constructor(private route: ActivatedRoute, private router: Router,
    private _alertService: AlertService, private _authService: AuthenticationService,
    private _shared: ShareduserService, private ngZone: NgZone) {
    window['onSignIn'] = (user) => ngZone.run(() => this.onSignIn(user));
  }

  ngOnInit() {
    //this._authService.logout();
    debugger;
    var a = this._shared.getCurrentUser();
    if (a) {
      if (a.name && a.pwd) {
        this.model.username = a.name;
        this.model.password = a.pwd;
        if (a.remember == "true") {
          this.rememberMe = true;
        }
      }
    }
    this.returnUrl = this.route.snapshot.queryParams['returnUrl'] || '/';
  }

  login() {
    this.loading = true;
    this._authService.login(this.model.username, this.model.password, this.rememberMe)
      .subscribe(
      data => {
        console.log(data);
      this.router.navigate(['/home']);
      },
      error => {
        console.log(error);
        this._alertService.error(error._body);
        this.loading = false;
      }
      );
  }

  remember() {
    this.rememberMe = !this.rememberMe;
  }


  onSignIn(googleUser): void {
    debugger;
    var profile = googleUser.getBasicProfile();
    console.log('ID: ' + profile.getId()); // Do not send to your backend! Use an ID token instead.
    console.log('Name: ' + profile.getName());
    console.log('Image URL: ' + profile.getImageUrl());
    console.log('Email: ' + profile.getEmail());
    localStorage.setItem('user', profile.getName());
  }

}
