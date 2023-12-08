import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';
import { take } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class BoxTextStateService {
  private inputTextBox$ = new BehaviorSubject('A');
  private outputTextBox$ = new BehaviorSubject('B');

  public getContentTextObservable (isInputBox: boolean): Observable<string> {
    return isInputBox
      ? this.inputTextBox$.asObservable().pipe(take(1))
      : this.outputTextBox$.asObservable().pipe(take(1))
  }

  public setContentText (text: string, isInputBox: boolean) {
    isInputBox
      ? (this.inputTextBox$.next(text), console.log(this.inputTextBox$.getValue()))
      : (this.outputTextBox$.next(text), console.log(this.outputTextBox$.getValue()))
  }

  public getContentText (isInputBox: boolean): string {
    return isInputBox
      ? this.inputTextBox$.getValue()
      : this.outputTextBox$.getValue()
  }

  public invertValues (): void {
    const inputTextBoxCurrentValue = this.inputTextBox$.getValue();
    const outputTextBoxCurrentValue = this.outputTextBox$.getValue();
    this.inputTextBox$.next(outputTextBoxCurrentValue);
    this.outputTextBox$.next(inputTextBoxCurrentValue);
  }
}
