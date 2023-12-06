import { Component, Input } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ICoffeeLabel } from '../../../../interfaces/ICoffee.interface';

@Component({
  selector: 'app-card-label',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './card-label.component.html'
})
export class CardLabelComponent {
  @Input({required: true}) dataCoffee!: ICoffeeLabel;
}
