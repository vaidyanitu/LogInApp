import { Injectable } from '@angular/core';
import {Observable} from 'rxjs/observable';
import { Http,Headers,RequestOptions,Response} from '@angular/http';
import { HttpClient } from '@angular/common/http';
import { AppConfig } from '../app.config';
import {Blog} from '../model/blog';
import { Key } from 'selenium-webdriver';
import { HttpRequest } from 'selenium-webdriver/http';


@Injectable()
export class FileUploadService {
     headers= new Headers({'Content-Type':'application/json' });
     options=new RequestOptions({headers:this.headers});
constructor(private http:Http,private config: AppConfig, private httpClient:HttpClient){
    
}

  postFile(extraData: object,fileItem: File): any {
    debugger;
    const formData: FormData = new FormData();
    formData.append('file', fileItem, fileItem.name);
    if (extraData) {
      for (let key in extraData) {
        formData.append(key, extraData[key])
      }
    }
    return this.http.post(this.config.apiUrl + '/blogs/CreateBlog', formData,this.jwt());
  }

  getBlogs(){
    return this.http.get(this.config.apiUrl + '/blogs/GetBlogs',this.jwt()).map((response:Response)=>
    response.json());
  }
 
  private jwt() {
    //create authorization header with jwt token
    let currentUser = JSON.parse(localStorage.getItem('currentUser'));
    if (currentUser && currentUser.token) {
      let headers = new Headers({ 'Authorization': 'Bearer ' + currentUser.token });
      return new RequestOptions({ headers: headers });
    }
  }

  getBlog(id: number) {
    debugger;
    return this.http.get(this.config.apiUrl + '/blogs/GetBlogById?id=' + id, this.jwt())
      .map((response:Response)=>response.json());
  }

}
