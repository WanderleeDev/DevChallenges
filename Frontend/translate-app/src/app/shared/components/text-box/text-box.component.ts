import { Component, Input, OnInit, booleanAttribute } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormControl, ReactiveFormsModule, Validators } from '@angular/forms';
//  services
import { BoxTextStateService } from '../../../services/boxTextState.service';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-text-box',
  standalone: true,
  imports: [
    CommonModule,
    ReactiveFormsModule
  ],
  templateUrl: './text-box.component.html',
  styles: [`:host { display: contents }`]
})
export class TextBoxComponent implements OnInit {
  @Input({required: true, transform: booleanAttribute}) isInputBox!: boolean;
  textArea = new FormControl<string>('', { nonNullable: true });
  outPutTextArea!: Observable<string>



  constructor (private boxTextStateSvc: BoxTextStateService) {}

  ngOnInit(): void {
    if (!this.isInputBox) {
      this.outPutTextArea = this.boxTextStateSvc.getContentTextObservable(!this.isInputBox)
      console.log('b');
    } else {
      this.textArea.addValidators([Validators.maxLength(500)])
    }
  }

  public saveText (): void {
    this.boxTextStateSvc.setContentText(this.textArea.value, this.isInputBox);
  }
}
