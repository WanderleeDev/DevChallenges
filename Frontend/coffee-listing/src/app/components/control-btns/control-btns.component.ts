import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CoffeeService } from '../../services/http-coffee.service';

@Component({
  selector: 'app-control-btns',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './control-btns.component.html',
})
export class ControlBtnsComponent {
  readonly btnBase = 'font-bold py-1 px-4 rounded-lg hover:scale-95 active:scale-105 disabled:hover:scale-100 disabled:active:scale-100 duration-300';
  isActiveBtn  = true;

  constructor(
    private listCoffeeSvc: CoffeeService
  ) {}

  public activateBtn () {
    this.isActiveBtn = !this.isActiveBtn;
  }

  public filterList(filterCoffee: boolean): void {
    this.listCoffeeSvc.filterCoffee(filterCoffee);
  }
}
