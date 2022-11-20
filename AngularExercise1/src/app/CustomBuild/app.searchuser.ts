import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'filterUserPipe'
}) 
export class SearchUserPipe implements PipeTransform {
  transform(values: any[], filterText: any): any[] {
    return values.filter(v =>  v.name.indexOf(filterText) > -1);
  }
}