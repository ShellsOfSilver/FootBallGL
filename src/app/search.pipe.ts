import {Pipe, PipeTransform} from '@angular/core';

@Pipe({
  name: 'searchCom'
})

export class SearchPipe implements PipeTransform {
  transform(list, searchName: string) {
    if (list.length === 0 || searchName === '') {
      return list;
    }
    return list.filter(item => item['name'].toLowerCase().indexOf(searchName.toLowerCase()) !== -1);
  }
}
