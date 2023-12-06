import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-btn-translate',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './btn-translate.component.html',
  styles: [`:host { display: contents }`]
})
export class BtnTranslateComponent {
  readonly iconBtn = 'assets/img/Sort_alfa.svg';
}
