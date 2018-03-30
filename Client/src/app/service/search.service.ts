import { Injectable } from '@angular/core';
import { Http } from '@angular/http';

@Injectable()
export class SearchService {
apiRoot:string='https://itunes.apple.com/search';
results:Object[];
loading:boolean;

  constructor(private http:Http) {
    this.loading=false;
   }

   search(term:string){
     let apiURL=`${this.apiRoot}?term=${term}&media=music`; //&limit=20
      return this.http.get(apiURL);
  }
}
