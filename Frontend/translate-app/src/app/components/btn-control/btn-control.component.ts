import { CommonModule } from '@angular/common';
import { ChangeDetectionStrategy, Component, Input } from '@angular/core';

@Component({
  selector: 'app-btn-control',
  standalone: true,
  imports: [
    CommonModule,
  ],
  template: `
    <button
    class="rounded-md text-white py-2 px-3 font-medium text-sm hover:bg-[#4D5562] stylesBtn" type="button">
      {{textBtn}}
    </button>`,
  styles: [`:host { display: contents }`],

  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class BtnControlComponent {
  @Input({required: true}) textBtn = 'empty'
}
