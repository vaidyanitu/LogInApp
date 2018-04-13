import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators, FormControl } from '@angular/forms';
import { UserService } from '../service/user.service';
import { AlertService } from '../service/alert.service';
import { Response } from '@angular/http';

@Component({
  selector: 'app-forgot-password',
  templateUrl: './forgot-password.component.html',
  styleUrls: ['./forgot-password.component.css']
})
export class ForgotPasswordComponent implements OnInit {
  ForgotPassword: FormGroup;
  emailPattern = "^[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,4}$";;
  email;

  constructor(private fb: FormBuilder, private _userService: UserService, private _alertService: AlertService) {
    this.ForgotPassword = this.fb.group({
      email: ['', Validators.required]
    });
    localStorage.removeItem('PasswordResetToken');
    localStorage.removeItem('ResetId');
  }

  ngOnInit() {
  }

  onSubmit(formval) {
    debugger;
    this._userService.forgotPassword(formval.email).subscribe((resp:Response) => {
      var data = resp.json();
      //console.log(data);
      var msg = data[0];
      localStorage.setItem('PasswordResetToken', data[2]);
      localStorage.setItem('ResetId', data[1]);
      this._alertService.success(msg, true);
      this.ForgotPassword.reset();
    },
      (err) => {
        var msg = "Check your email for a password reset link";
        console.log("error:", err);
        this._alertService.success(msg, true);
      });
  }
}
