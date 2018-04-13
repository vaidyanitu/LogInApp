import { Component, OnInit, ViewChild ,AfterViewInit} from '@angular/core';
import {SearchService} from '../service/search.service';
import { Subject} from 'rxjs/Subject';
import {DataTableDirective} from 'angular-datatables';

@Component({
  selector: 'itunes-search',
  templateUrl: './itunes-search.component.html',
  styleUrls: ['./itunes-search.component.css']
})
export class ItunesSearchComponent implements OnInit, AfterViewInit {
  loading: boolean = false;
  @ViewChild(DataTableDirective)
  dtElement: DataTableDirective;
  results = [];
  dtOptions: DataTables.Settings = {};
  dtTrigger: Subject<any> = new Subject();

  constructor(private itunes: SearchService) {
    this.loading = false;
  }

  ngOnInit() {
    // this.results[0]={name:"test",artist:"test",thumbnail:"Test",artistId:"test",link:"test"};
    this.dtOptions = {
      pagingType: 'full_numbers',
      pageLength: 4,
    };
  }

  ngAfterViewInit() {
    this.dtTrigger.next();
  }

  doSearch(term: string) {
    this.loading = true;
    this.rerender();
    // console.log(this.dtElement);
    // this.dtElement.dtInstance.then((dtInstance:DataTables.Api)=>{
    //   //Destroy the table first
    //   dtInstance.destroy();
    //   //switch
    this.itunes.search(term)
      .subscribe(x => {
        //console.log(x.json());
        this.loading = true;
        this.results = x.json().results.map(item => {
          return new SearchItem(
            item.trackName,
            item.artistName,
            item.trackViewUrl,
            item.artworkUrl30,
            item.artistId
          );
        });
        //console.log(this.results);
        this.dtTrigger.next();
      },
      err => console.log("Error:", err));
    // })  
    
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
