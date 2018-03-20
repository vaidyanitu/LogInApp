import { Injectable } from '@angular/core';
import { Http, Headers,URLSearchParams, RequestOptions, Response } from '@angular/http';
import { AppConfig } from '../app.config';
import 'rxjs/add/operator/map';

@Injectable()
export class EmailService {

  constructor(private http: Http, private config: AppConfig) { }
  verifyEmail(userId: number, confirmationtoken: string) {
    debugger;
    var params = {
      id: userId,
      token: confirmationtoken
    };
    //let param = new URLSearchParams();
    //param.append('id', userId);
    //param.append('token', confirmationtoken);



    
    //return this.http.post(this.config.apiUrl + '/users/VerifyEmail', param).map((response: Response) => {
    //  response.json();
    //  console.log(response.json());
    //});
  }
  
  
}
