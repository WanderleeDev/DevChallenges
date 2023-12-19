import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'dateDifference',
  standalone: true
})

export class DateDifferencePipe implements PipeTransform {
  transform(value: Date): string {
    const difference = Math.floor((new Date().getTime() - new Date(value).getTime()) / (1000 * 60 * 60 * 24));
    return `updated ${difference} ${difference > 1 ? 'days' : 'day' } ago`;
  }
}
