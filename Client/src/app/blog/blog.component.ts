import { Component, OnInit, ViewChild } from '@angular/core';
import {FormGroup,FormControl,FormBuilder, Validators} from '@angular/forms';
import {FileUploadService} from './fileUpload.service';
import { Blog} from '../model/blog';
import {Http, RequestOptions,Headers} from '@angular/http';
import { Observable} from 'rxjs/observable';
import { ShareduserService } from '../service/shareduser.service';
import {AlertService} from '../service/alert.service';

@Component({
  selector: 'blog',
  templateUrl: './blog.component.html',
  styleUrls: ['./blog.component.css']
})
export class BlogComponent implements OnInit {
  @ViewChild("fileInput") fileInput;
description:string;
title:string;
image:string;
author:string;
gallery:any;
tags:string[];
fileToUpload: File = null;
blogForm:FormGroup;
blogData:Blog={Title:"test",Description:"test",AuthorId:'',Tags:"test",File:null,FileName:''};
url:any;
file:File;

  constructor(private fb: FormBuilder, private fileUploadService: FileUploadService,
     private sharedUser:ShareduserService, private _alert:AlertService) {
    this.getForm();
   }

getForm(){
  this.blogForm=this.fb.group({
    Title:['',Validators.required],
    Description:['',Validators.required],
     Image:[''],
    AuthorId:[''],
    Tags:['',Validators.required],
    File:null,
    FileName:null
  })
}

  ngOnInit() {

  }

  onSubmit(value:any){
    debugger;
    console.log(value);
    // this.blogData.Title=value.title;
    // this.blogData.Description=value.description;
    // this.blogData.Tags=value.tags;
    // this.blogData.File=this.fileToUpload;
    //
    var AuthId = this.sharedUser.resp.id;
    AuthId = String(AuthId);
    const formModel = this.blogForm.value;
    formModel.FileName = this.fileToUpload.name;
    formModel.AuthorId = AuthId;
    this.uploadFileToActivity(formModel);
  }

  handleFileInput(event) {
    debugger;
    if(event.target.files && event.target.files[0]){
      this.fileToUpload = event.target.files[0];
      var reader=new FileReader();
      reader.onload=(event:any)=>{        
        this.url=event.target.result;
        console.log(this.url);
      }
      reader.readAsDataURL(this.fileToUpload);
    }
}

uploadFileToActivity(formvalue:any) {
  debugger;
  this.fileUploadService.postFile(formvalue,this.fileToUpload).subscribe(data => {
    // do something, if upload success
    console.log(data);
    this._alert.success(data._body,true);
    this.blogForm.reset();
    }, error => {
      this._alert.error(error,false);
      console.log(error);
    });
}


  

}

