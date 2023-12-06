import { Component, Input } from '@angular/core';
import { CommonModule, NgOptimizedImage } from '@angular/common';
import { ICoffeeImgInfo } from '../../../../interfaces/ICoffee.interface';

@Component({
  selector: 'app-coffee-img',
  standalone: true,
  imports: [CommonModule, NgOptimizedImage],
  templateUrl: './coffee-img.component.html',
})
export class CoffeeImgComponent {
  @Input({required: true}) dataCoffee!: ICoffeeImgInfo;
}
