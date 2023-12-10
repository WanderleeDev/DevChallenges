import { Injectable } from '@angular/core';
import { FormControl, Validators } from '@angular/forms';

@Injectable({
  providedIn: 'root'
})
export class BoxTextStateService {
  private  textAreaInputControl$ = new FormControl<string>('', {
    nonNullable: true,
    validators: [Validators.maxLength(500)]
  });
  private  textAreaOutputControl$ = new FormControl<string>(
    { value: '', disabled: true },
    { nonNullable: true });

  public getFormControlTextArea (isInputBox: boolean): FormControl<string> {
    return isInputBox
      ? this.textAreaInputControl$
      : this.textAreaOutputControl$
  }

  public getContentFormControl (isInputBox: boolean): string {
    return isInputBox
      ? this.textAreaInputControl$.value
      : this.textAreaOutputControl$.value
  }

  public setValueFormControl (value: string, isInputBox: boolean): void {
    isInputBox
      ? this.textAreaInputControl$.setValue(value)
      : this.textAreaOutputControl$.setValue(value)
  }

  public invertValues ():void {
    const textAreaInputValueCurrent = this.textAreaInputControl$.value;
    const textAreaOutputValueCurrent = this.textAreaOutputControl$.value;

    this.textAreaInputControl$.setValue(textAreaOutputValueCurrent);
    this.textAreaOutputControl$.setValue(textAreaInputValueCurrent);
  }
}
