import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TranslateIconComponent } from '../../icons/translate-icon/translate-icon.component';

@Component({
  selector: 'app-btn-translate',
  standalone: true,
  imports: [CommonModule, TranslateIconComponent],
  template: `
    <button [class]="btnTranslateStyles"
      aria-label="translate text"
      type="button">
      <app-translate-icon />
      Translate
    </button>
  `,
  styles: [`:host { display: contents }`]
})
export class BtnTranslateComponent {
  readonly iconBtn = 'assets/img/Sort_alfa.svg';
  readonly btnTranslateStyles = 'text-white bg-[#3762E4] rounded-lg flex gap-1 py-2 px-4 justify-center border-[#7CA9F3] border-[.1rem] font-medium stylesBtn select-none'
}
