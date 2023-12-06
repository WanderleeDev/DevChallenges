import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'noImage',
  standalone: true
})
export class NoImagePipe implements PipeTransform {
  readonly imageBackup = 'tu ruta de img de respaldo aquí';

  //  Si la imagen existe  la devuelve como esta  de lo contrario usa la imagen de respaldo
  transform(images: string): string {
    return images ? images : this.imageBackup
  }
}
