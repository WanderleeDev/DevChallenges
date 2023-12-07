import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class TooltipService {
  private isViewTooltip = new BehaviorSubject<boolean>(false);

  public showTooltip (): void {
    if (this.isViewTooltip.getValue()) { return }
    this.isViewTooltip.next(true);
    setTimeout(() => this.isViewTooltip.next(false), 1500);
  }

  public getObservableTooltip (): Observable<boolean> {
    return this.isViewTooltip.asObservable();
  }

}
