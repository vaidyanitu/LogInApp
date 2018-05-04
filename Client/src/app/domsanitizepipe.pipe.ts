import { Pipe, PipeTransform } from '@angular/core';
import {DomSanitizer} from '@angular/platform-browser';

@Pipe({
  name: 'domsanitizepipe'
})
export class DomsanitizepipePipe implements PipeTransform {
  constructor(private dom: DomSanitizer){

  }
  transform(value: any, args?: any): any {
    debugger;
    return this.dom.bypassSecurityTrustResourceUrl(value);
  }

}






