import { Component, OnInit ,Input} from '@angular/core';
import { Subject } from 'rxjs/Subject';
import {SearchService} from '../service/search.service';

@Component({
  selector: 'data',
  templateUrl: './data.component.html',
  styleUrls: ['./data.component.css']
})
export class DataComponent implements OnInit {
@Input() searchvalue:string;
 data=[];

dtOptions: DataTables.Settings = {};
dtTrigger: Subject<any> = new Subject();
  constructor(private itunes:SearchService) { }

  ngOnInit() {
    debugger;
    this.dtOptions = {
      pagingType: 'full_numbers',
      pageLength:4,      
    }; 
    this.getData();
  }

  getData(){
    debugger;
    this.itunes.search(this.searchvalue).subscribe(x=>{
      //console.log(x.json());
      this.data=x.json().results.map(item=>{
        return new SearchItem(
          item.trackName,
          item.artistName,
          item.trackViewUrl,
          item.artworkUrl30,
          item.artistId
          );
    });
    console.log(this.data);
    this.dtTrigger.next();
  } ,
  err=>console.log("Error:",err));  
  }

}

class SearchItem{
  constructor(
    public name: string,
    public artist: string,
    public link: string,
    public thumbnail: string,
    public artistId: string
  ){

  }
}