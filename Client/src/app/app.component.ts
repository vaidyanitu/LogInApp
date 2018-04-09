import { Component,Output} from '@angular/core';
import { RouterModule, Routes, Router } from '@angular/router';
import {ShareduserService} from './service/shareduser.service';
import { debug } from 'util';
import {AuthenticationService} from './service/authentication.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'Login Application';
  loggedIn:boolean=false;

 currentUser:any;
  constructor(private _sharedservice:ShareduserService, private authservice:AuthenticationService, private router:Router) {
    this.currentUser=this._sharedservice.resp;
    authservice.loggedIn$.subscribe(
      status=>{
        this.loggedIn=status;
        this._sharedservice.loggedIn=true;
        console.log(status+'from app component');
      }
    )
  }

  logout() {
    debugger;
    this.authservice.logout().subscribe(x => {
      this._sharedservice.setlog(false);
      this.router.navigate(['/login']);
    })
  }


}

