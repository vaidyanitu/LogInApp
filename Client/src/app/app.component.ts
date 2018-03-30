import { Component } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {ShareduserService} from './service/shareduser.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'Login Application';
 currentUser:any;
  constructor(private _sharedservice:ShareduserService) {
    this.currentUser=this._sharedservice.currentUser;
  }
}
