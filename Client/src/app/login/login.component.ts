import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';

import { AlertService } from '../service/alert.service';
import { AuthenticationService } from '../service/authentication.service';
import { ShareduserService } from '../service/shareduser.service';

@Component({
  selector: 'login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  model: any = {};
  loading = false;
  returnUrl: string;
  rememberMe: boolean = true;
  loggedIn:boolean=false;
  constructor(private route: ActivatedRoute, private router: Router,
    private _alertService: AlertService, private _authService: AuthenticationService,
    private _shared: ShareduserService) { }

  ngOnInit() {
    this._authService.logout();
    var a = this._shared.getCurrentUser();
    if (a) {
      this.model.username = a.currentUser;
      this.model.password = a.pwd;
      if (a.remember == "true") {
        this.rememberMe = true;
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

}
