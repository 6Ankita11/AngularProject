import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'appPipe'
})
export class AppPipePipe implements PipeTransform {

  transform(value:any) {
    // console.log(value);
    return value.substr(0,5) + ' ...';
  }

}
