import { Component, Input } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormControl, ReactiveFormsModule, Validators } from '@angular/forms';
//  services
import { BoxTextStateService } from '../../../services/boxTextState.service';

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
export class TextBoxComponent {
  @Input({required: true}) hasLetterCounter?: boolean;
  textArea = new FormControl<string>('', {
    nonNullable: true,
    validators: [Validators.maxLength(500)]
  });

  constructor (private boxTextStateSvc: BoxTextStateService) {}

  public saveText (): void {
    this.boxTextStateSvc.setContentText(this.textArea.value);
  }
}
