import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CardCoffeeComponent } from '../card-coffee/card-coffee.component';
import { Observable } from 'rxjs';
//  services
import { CoffeeService } from '../../services/http-coffee.service';
//  interface
import { ICoffee } from '../../interfaces/ICoffee.interface';
import { LoaderComponent } from '../loader/loader.component';

@Component({
  selector: 'app-gallery-coffee',
  standalone: true,
  imports: [
    CommonModule,
    CardCoffeeComponent,
    LoaderComponent
  ],
  templateUrl: './gallery-coffee.component.html',
})
export class GalleryCoffeeComponent implements OnInit {
  listCoffee!: Observable<ICoffee[]>;

  constructor (
    private listCoffeeSvc: CoffeeService
  ) {}

  ngOnInit(): void {
    this.listCoffee = this.listCoffeeSvc.getDbCoffeeObservable();
    this.listCoffeeSvc.filterCoffee();
  }
}
