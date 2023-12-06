import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'filter',
  standalone: true
})
export class FilterPipe implements PipeTransform {

  transform<T>(arr: T[] , param: T): Array<T> {
    return (!arr || arr.length === 0)
      ? []
      : arr.filter(child => child !== param);
  }
}
