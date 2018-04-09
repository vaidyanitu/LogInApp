import { Injectable } from '@angular/core';
import { Router, CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot } from '@angular/router';
import { ShareduserService } from '../service/shareduser.service';
import {AuthenticationService} from '../service/authentication.service';

@Injectable()
export class AuthGuard implements CanActivate {
  private loggedIn:boolean;
  constructor(private router: Router, private auth: AuthenticationService,private _shareduser:ShareduserService) { 
    this.loggedIn = _shareduser.getLog();
    auth.setlog(this.loggedIn);
  }

  canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot) {
    //if (localStorage.getItem('currentUser')||sessionStorage.getItem('currentUser')) {
    //logged in so return true
    if (this.loggedIn) {
      return true;
    }
    //not logged in so redirect to login page with the return url
    this.router.navigateByUrl('/login')
    return false;
  }
}
