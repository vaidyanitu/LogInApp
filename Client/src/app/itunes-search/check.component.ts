import {Component,Input,OnInit} from '@angular/core';
import {Subject} from 'rxjs/Subject';

@Component({
    selector:'check',
    template:`<check>
    <table datatable [dtOptions]="dtOptions" border="1px solid black">
    <thead>
      <tr>
      <td>Track</td>
    </tr>
    </thead>
    <tbody>
      <tr *ngFor="let track of itunes.results">  
    //   <td><img src="{{track.thumbnail}}" height="100px"></td>
    //   <td><a target="_blank" href="{{track.link}}">{{track.name}}</a></td>
    <td>{{data}}</td>
    </tr>
  </tbody>
  </table>
    </check> `
})

export class CheckComponent implements OnInit{
@Input() datas=[];
dtOptions: DataTables.Settings = {};
dtTrigger: Subject<any> = new Subject();

ngOnInit(){
    this.dtOptions = {
        pagingType: 'full_numbers',
        pageLength:4
      };
      this.dtTrigger.next();
}

}