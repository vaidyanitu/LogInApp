import { Injectable, Inject } from '@angular/core';
import {Http,Response} from '@angular/http';
import { Observable } from 'rxjs/Observable';
import {SearchResult} from '../youtube-search/searchresult';
import 'rxjs/add/operator/map';

//export const YOUTUBE_API_KEY:string="AIzaSyDgpnnMW2pFK1ZNS0pUUDUP6zDbJbveCzQ";
export const YOUTUBE_API_KEY="AIzaSyDOfT_BO81aEZScosfTYMruJobmpjqNeEk";
export const YOUTUBE_API_URL:string="https://www.googleapis.com/youtube/v3/search";

@Injectable()
export class SearchService {
constructor(private http:Http,
@Inject(YOUTUBE_API_KEY)private apiKey:string,
@Inject(YOUTUBE_API_URL)private apiUrl:String) { 
 }

search(query:string):Observable<SearchResult[]>{
  const params:string=[
    `q=${query}`,
    `key=${this.apiKey}`,
    `part=snippet`,
    `type=video`,
    `maxResults=50`
  ].join('&');
  const queryUrl=`${this.apiUrl}?${params}`;
  return this.http.get(queryUrl)
          .map((response:Response)=>{
              return(<any>response.json()).items.map(item=>{
                return new SearchResult({
                  id:item.id.videoId,
                  title:item.snippet.title,
                  description:item.snippet.description,
                  thumbnailUrl:item.snippet.thumbnails.high.url
                });
              });
          });
}
}
