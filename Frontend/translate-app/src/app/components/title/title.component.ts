import { Component } from '@angular/core';
import { CommonModule, NgOptimizedImage } from '@angular/common';

@Component({
  selector: 'app-title',
  standalone: true,
  imports: [CommonModule, NgOptimizedImage],
  templateUrl: './title.component.html',
  styles: [`:host { display: contents }`]
})

export class TitleComponent {
  readonly logoSvg = 'assets/img/logo.svg';

}
