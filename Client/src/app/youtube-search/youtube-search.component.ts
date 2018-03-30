import { Component, OnInit } from '@angular/core';
import { SearchResult } from '../youtube-search/searchresult';

import{Http,Response} from '@angular/http';
import { Subject } from 'rxjs/Subject';
import 'rxjs/add/operator/map';

@Component({
  selector: 'youtube-search',
  templateUrl: './youtube-search.component.html' 
})
export class YouTubeSearchComponent implements OnInit {
results:SearchResult[];
loading:boolean=false;

dtOptions:DataTables.Settings={};
dtTrigger:Subject<any>=new Subject();

  constructor() { }

  ngOnInit() {
    this.dtOptions = {
      pagingType: 'full_numbers',
      pageLength:4,      
    };
  }

  updateResults(results:SearchResult[]):void{
    this.results=results; 
    this.dtTrigger.next(); 
    this.loading=true; 
  }
}
