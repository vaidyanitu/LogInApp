import { Pipe, PipeTransform } from '@angular/core';
import {DomSanitizer} from '@angular/platform-browser';

@Pipe({
  name: 'youtube'
})
export class YoutubePipe implements PipeTransform {
  constructor(private dom: DomSanitizer){

  }
  
  transform(value: any, args?: any): any {
    var safeUrl="https://www.youtube.com/embed/"+value;
    return this.dom.bypassSecurityTrustResourceUrl(safeUrl);
  }

}
