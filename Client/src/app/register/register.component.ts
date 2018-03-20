import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

import { UserService } from '../service/user.service';
import { AlertService } from '../service/alert.service';
import { FormGroup, FormControl, Validators } from '@angular/forms';

@Component({
  selector: 'register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {
  model: any = {};
  loading = false;
  emailPattern = "^[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,4}$"; 

  constructor(private router: Router, private _userService: UserService, private _alertService:AlertService) { }

  ngOnInit() {
  }

  register() {
    debugger;
    this.loading = true;
    this._userService.create(this.model)
      .subscribe(
      data => {
        console.log(data);
        this._alertService.success(data, true);
        this.router.navigate(['login']);
      },
      error => {
        this._alertService.error(error._body);
        this.loading = false;
      }
    )

  }

}
