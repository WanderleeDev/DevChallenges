import { Component, Input } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CardInfoComponent } from './components/card-info/card-info.component';
import { CardLabelComponent } from './components/card-label/card-label.component';
import { ICoffee } from '../../interfaces/ICoffee.interface';
import { CoffeeImgComponent } from './components/coffee-img/coffee-img.component';

@Component({
  selector: 'app-card-coffee',
  standalone: true,
  imports: [
    CommonModule,
    CardInfoComponent,
    CardLabelComponent,
    CoffeeImgComponent,
  ],
  templateUrl: './card-coffee.component.html'
})
export class CardCoffeeComponent {
  @Input({required: true}) dataCoffee!: ICoffee;
}
