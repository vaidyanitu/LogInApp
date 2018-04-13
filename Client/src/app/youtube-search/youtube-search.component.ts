import { Component, OnInit, ViewChild, AfterViewInit } from '@angular/core';
import { SearchResult } from '../youtube-search/searchresult';

import { DataTableDirective } from 'angular-datatables';

import { SearchService } from './youtube-search.service';
import{Http,Response} from '@angular/http';
import { Subject } from 'rxjs/Subject';
import 'rxjs/add/operator/map';

@Component({
  selector: 'youtube-search',
  templateUrl: './youtube-search.component.html' 
})
export class YouTubeSearchComponent implements OnInit, AfterViewInit {
  results: SearchResult[];  
loading:boolean=false;


  @ViewChild(DataTableDirective)
  dtElement: DataTableDirective;
  dtOptions: DataTables.Settings = {};
dtTrigger:Subject<any>=new Subject();

  constructor(private youtube: SearchService) { }

  ngOnInit() {
    this.dtOptions = {
      pagingType: 'full_numbers',
      pageLength:4,      
    };
    this.youtube.search("welcome")
      .subscribe(
      (data: SearchResult[]) => {
        this.results = data;
        this.dtTrigger.next();
      });
  }

  ngAfterViewInit() {    
      this.dtTrigger.next();
  }

  updateResults(results: string): void{    
    this.getResult(results);
    this.rerender();
  }

  getResult(results:string) {
    this.youtube.search(results)
      .subscribe(
      (data: SearchResult[]) => {
        this.results = data;
        this.dtTrigger.next();
        this.loading = true;
      },
      (err: any) => {
        console.log(err);
      }
      );
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
