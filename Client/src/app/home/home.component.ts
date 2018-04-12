import { Component, OnInit } from '@angular/core';

import { User } from '../model/user';
import { UserService } from '../service/user.service';
import { ShareduserService } from '../service/shareduser.service';

@Component({
  selector: 'home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  LogUsers: boolean;
  currentUser: any;
  users: User[] = [];
  id: number;
  itunes:boolean=true;
  youtube:boolean;

  constructor(private userService: UserService, private _shareduser: ShareduserService) {
    debugger;
    this.currentUser = this._shareduser.getCurrentUser();
   //console.log(this.currentUser);
  }

  ngOnInit() {
    this.loadAllUsers();
    //this.currentUser = this._shareduser.currentUser;
  }

  deleteUser(tuser:any) {
    this.userService.delete(tuser.id).subscribe(
      () => {
        this.loadAllUsers();
      });
  }

  private loadAllUsers() {
    this.userService.getAll().subscribe(users => {
      this.users = users
    });
  }

  
}
