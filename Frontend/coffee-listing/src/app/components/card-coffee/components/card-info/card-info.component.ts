import { Component, Input } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ICoffeeRating } from '../../../../interfaces/ICoffee.interface';

@Component({
  selector: 'app-card-info',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './card-info.component.html'
})
export class CardInfoComponent {
  @Input({required: true}) dataCoffee!: ICoffeeRating;
}
