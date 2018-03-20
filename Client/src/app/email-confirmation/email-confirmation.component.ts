import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { EmailService } from '../service/email.service';

@Component({
  selector: 'app-email-confirmation',
  templateUrl: './email-confirmation.component.html',
  styleUrls: ['./email-confirmation.component.css']
})
export class EmailConfirmationComponent implements OnInit {
  id: number;
  token: string;

  constructor(private route:ActivatedRoute, private _emailservice:EmailService) { }

  ngOnInit() {
    debugger;
    this.route.queryParams.subscribe(params => {
      //debugger;
      //console.log(params);
       this.id = +params["id"];
       this.token = params["token"];
       //console.log("id=", this.id);
       //console.log("token=", this.token);
    })
  }

  verifyEmail() {
    debugger;
    this._emailservice.verifyEmail(this.id, this.token)
    //  .subscribe(
    //  x => console.log(x),
    //  err => console.log("error:", err)
    //);
  }

}
