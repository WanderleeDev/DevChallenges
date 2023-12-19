import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'objEntries',
  standalone: true
})
export class ObjEntriesPipe<T> implements PipeTransform {

  transform(object: T): T[keyof T][] {
    if (object === null || typeof object !== 'object') {
      throw new Error('El valor proporcionado debe ser un objeto');
    }
    return Object.values(object) as Array<T[keyof T]>;
  }

}
