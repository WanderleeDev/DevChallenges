import { Injectable } from '@angular/core';
import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { BehaviorSubject, Observable, map, take } from 'rxjs';
//  interface
import { ICoffee } from '../interfaces/ICoffee.interface';
import { environment } from '../../environments/environment.development';

@Injectable({
  providedIn: 'root'
})
export class CoffeeService {
  private listCoffee = environment.apiCoffee;
  private coffeeSubject$ = new BehaviorSubject<ICoffee[]>([])

  constructor(
    private http: HttpClient
  ) {}

  // Obtiene la lista original de café desde la API
  private getListCoffee (): Observable<ICoffee[]> {
    return this.http.get<ICoffee[]>(this.listCoffee);
  }

  // Retorna un Observable de la lista de café actualizada
  getDbCoffeeObservable () {
    return this.coffeeSubject$.asObservable();
  }

  // Actualiza el BehaviorSubject con la nueva lista de café
  private updateListCoffee (newCoffee: ICoffee[]):void {
    this.coffeeSubject$.next(newCoffee);
  }

  // Obtiene la lista de café y la filtra si se especifica, de lo contrario, devuelve la lista original.
  // Se suscribe y actualiza el valor del Observable lista de café.
  // La lógica del filtrado podría delegarse a otro servicio para evitar recargar este.
  public filterCoffee (param?: boolean ):void {
    const newCoffee:Observable<ICoffee[]> = param
    ? this.getListCoffee().pipe(
      map(coffees => coffees.filter(coffee => coffee.available === true))
    )
    : this.getListCoffee();

    newCoffee.pipe(take(1)).subscribe({
      next: (coffee => this.updateListCoffee(coffee)),
      error: (err: HttpErrorResponse) => console.log(err.message)
    })
  }
}
