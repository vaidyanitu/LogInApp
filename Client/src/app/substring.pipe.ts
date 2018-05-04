import { Pipe, PipeTransform } from '@angular/core';


@Pipe({
  name: 'substring'
})
export class SubStringPipe implements PipeTransform {
  constructor() {

  }
  transform(value: any, args?: any): any {
    debugger;
    var val = value.substring(0, 55);
    val += '..........';
    return val;
   
  }

}
