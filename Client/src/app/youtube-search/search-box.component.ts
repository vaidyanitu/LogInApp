import { Component, OnInit, Output,EventEmitter, ElementRef } from '@angular/core';
import {SearchResult} from './searchresult';
import { SearchService } from './youtube-search.service';
import {Observable} from 'rxjs/Observable';
import 'rxjs/Rx';

@Component({
  selector: 'search-box',
  template: `
  <input type="text" class="form-control" placeholder="Search" autofocus>
  `
})
export class SearchBoxComponent implements OnInit {
  query: string;
@Output() loading:EventEmitter<boolean>= new EventEmitter<boolean>();
@Output() results:EventEmitter<string>= new EventEmitter<string>();

  constructor(private youtube:SearchService, private el:ElementRef) { 

  }

  ngOnInit(): void {
    debugger;
    //convert the keyup event into an observable stream
    Observable.fromEvent(this.el.nativeElement, 'keyup')
      .map((e: any) => e.target.value)             //extract the value of the input
      .filter((text: string) => text.length > 1)     //filter out if empty
      .debounceTime(400)                        //only once every 250ms
      .do(() => this.loading.emit(true))
      .map((query: string) => this.query = query)
      .subscribe((query: string) => {
        this.loading.emit(false);
        this.results.emit(this.query);
      }
      );
        

    //enable loading
    //search, discarding old events if new input comes in
    //.map((query:string)=>this.youtube.search(query)) 
    //.switch()      
    ////act on the return of the search
    //.subscribe(
    //  (results: SearchResult[] )=>{
    //    this.loading.emit(false);
    //   this.results.emit(results); 
    //  },
    //  (err:any)=>{
    //    console.log(err);
    //    this.loading.emit(false);
    //  },
    //  ()=>{
    //    this.loading.emit(false);
    //  }
    //);
  }

}
