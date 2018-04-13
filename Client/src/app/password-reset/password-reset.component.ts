import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { UserService } from '../service/user.service';
import { AlertService } from '../service/alert.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-password-reset',
  templateUrl: './password-reset.component.html',
  styleUrls: ['./password-reset.component.css']
})
export class PasswordResetComponent implements OnInit {
  ResetPassword: FormGroup;
  password: string='';
  repassword: string = '';
  ResetId:string;
  ResetToken: string = "";
  visible: boolean = false;

  constructor(private fb: FormBuilder, private _userService: UserService,
    private _alertService: AlertService, private router:Router) {
    this.createForm();
  }

  ngOnInit() {
    if (localStorage.getItem('ResetId') && localStorage.getItem('PasswordResetToken')) {
      this.visible = true;
    }  
  }

  createForm() {
    this.ResetPassword = this.fb.group({
      password: ['',Validators.compose([Validators.required,Validators.minLength(6)])],
      repassword: ['', Validators.required]
    });
  }

  

  onSubmit(formvalue) {
    debugger;
    //console.log(formvalue);
    if (localStorage.getItem('ResetId') && localStorage.getItem('PasswordResetToken')) {
      this.ResetId = localStorage.getItem('ResetId');
      this.ResetToken = localStorage.getItem('PasswordResetToken');
    }
    this._userService.resetPassword(formvalue.password, formvalue.repassword, this.ResetId, this.ResetToken)
      .subscribe(x => {
        //console.log(x);
        localStorage.removeItem('PasswordResetToken');
        localStorage.removeItem('ResetId');
        this._alertService.success(x, true);
        this.router.navigate(["login"]);    
      },
      err => {
        console.log("error:", err);
        var msg = JSON.parse(err['_body']);
        this._alertService.error(msg, false);
        this.password = '';
        this.repassword = '';
      });

  }

}
