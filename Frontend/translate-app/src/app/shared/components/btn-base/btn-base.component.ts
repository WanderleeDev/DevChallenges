import { Component, Input } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-btn-base',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './btn-base.component.html',
  styles: [`:host { display: contents }`]
})
export class BtnBaseComponent {
  @Input({required: true}) ariaLabel = '';
}
