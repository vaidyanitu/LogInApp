import { Component, OnInit } from '@angular/core';
import { Blog } from '../model/blog';
import{FileUploadService} from '../blog/fileUpload.service';
import { DomSanitizer, SafeResourceUrl } from '@angular/platform-browser';
import { Router } from '@angular/router';
import { AuthenticationService } from '../service/authentication.service';

@Component({
  selector: 'blog-display',
  templateUrl: './blog-display.component.html',
  styleUrls: ['./blog-display.component.css']
})
export class BlogDisplayComponent implements OnInit {
  blogs: any;
  align: boolean = false;
  logged: boolean;
blogPic:SafeResourceUrl;
  constructor(private fileservice: FileUploadService, private dom: DomSanitizer,
    private router: Router, private auth: AuthenticationService) { }

  ngOnInit() {
    if (localStorage.getItem('loggedin'))
      this.logged = true;
    else
      this.logged = false;
    this.auth.setlog(this.logged);
this.getBlogs();
  }

  getBlogs(){
    this.fileservice.getBlogs().subscribe((data)=>{
      this.blogs=data;
      console.log(this.blogs);
    })
  }

  getUrl(filePath){
    debugger;
    var path = '../../assets/images/'+filePath;
    return path;
  }

  setalign() {
    debugger;
    this.align = !this.align;
    if (this.align)
      return "left"
    else
      return "right"
  }

  loadBlog(blogId:number) {
    this.router.navigate(['/getBlog', blogId]);
  }

}
