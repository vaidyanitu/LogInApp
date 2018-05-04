import { Component, OnInit,Input } from '@angular/core';
import { FileUploadService } from '../blog/fileUpload.service';
import { Blog } from '../model/blog';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'get-blog',
  templateUrl: './get-blog.component.html',
  styleUrls: ['./get-blog.component.css']
})
export class GetBlogComponent implements OnInit {
  blogId:number;
  blog: Blog;
  constructor(private blogservice: FileUploadService, private route:ActivatedRoute) {

  }

  ngOnInit() {
    debugger;
    this.route.params.subscribe(params => {
      this.blogId = +params['id'];
    })
    this.blogservice.getBlog(this.blogId).subscribe(
      x => {
        console.log(x);
        this.blog = x;
        console.log(this.blog);
      })
  }

  getUrl(filePath) {
    debugger;
    var path = '../../assets/images/' + filePath;
    return path;
  }

}
