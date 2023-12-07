import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';
import { take } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class BoxTextStateService {
  private contentText$ = new BehaviorSubject('');

  public getContentTextObservable (): Observable<string> {
    return this.contentText$.asObservable().pipe(take(1))
  }

  public setContentText (text: string) {
    this.contentText$.next(text);
    console.log(this.contentText$.getValue());

  }

  public getContentText (): string {
    return this.contentText$.getValue();
  }
}
