import { Component, Input, OnInit, booleanAttribute } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormControl, ReactiveFormsModule } from '@angular/forms';
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
export class TextBoxComponent implements OnInit {
  @Input({required: true, transform: booleanAttribute}) isInputBox!: boolean;
  textAreaControl!: FormControl<string>;

  constructor (
    private boxTextStateSvc: BoxTextStateService
  ) {}

  ngOnInit(): void {
    this.textAreaControl = this.boxTextStateSvc.getFormControlTextArea(this.isInputBox)
  }
}
