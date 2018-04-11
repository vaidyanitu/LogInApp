import { Component, OnInit, ViewChild, AfterViewInit } from '@angular/core';
import { SearchResult } from '../youtube-search/searchresult';

import { DataTableDirective } from 'angular-datatables';

import{Http,Response} from '@angular/http';
import { Subject } from 'rxjs/Subject';
import 'rxjs/add/operator/map';

@Component({
  selector: 'youtube-search',
  templateUrl: './youtube-search.component.html' 
})
export class YouTubeSearchComponent implements OnInit, AfterViewInit {
results:SearchResult[];
loading:boolean=false;

  @ViewChild(DataTableDirective)
  dtElement: DataTableDirective;
dtOptions:DataTables.Settings={};
dtTrigger:Subject<any>=new Subject();

  constructor() { }

  ngOnInit() {
    this.dtOptions = {
      pagingType: 'full_numbers',
      pageLength:4,      
    };
  }

  ngAfterViewInit() {
    this.dtTrigger.next();
  }
  
  updateResults(results: SearchResult[]): void{
    this.rerender();
    this.results=results; 
    this.dtTrigger.next(); 
    this.loading=true; 
  }

  rerender(): void {
    if (this.dtElement != undefined) {
      this.dtElement.dtInstance.then((dtInstance: DataTables.Api) => {
        dtInstance.destroy();
        //this.dtTrigger.next();
      });
    }
  }

}
