import {Component,OnInit,Input} from '@angular/core';
import {SearchResult} from '../searchresult';

@Component({
    selector:'search-result',
    templateUrl:'./search-result.component.html'
})
export class SearchResultComponent implements OnInit{
    @Input() result:SearchResult;

    constructor() {
        
    }
    ngOnInit(){
        
    }
}
