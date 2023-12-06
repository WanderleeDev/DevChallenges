import { Component, Input } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DoubleArrowComponent } from '../../icons/double-arrow/double-arrow.component';
import { BtnBaseComponent } from '../btn-base/btn-base.component';
import { BtnControlComponent } from '../btn-control/btn-control.component';
import { LanguageSelectorComponent } from '../language-selector/language-selector.component';

@Component({
  selector: 'app-superior-controls',
  standalone: true,
  imports: [
    CommonModule,
    DoubleArrowComponent,
    BtnBaseComponent,
    BtnControlComponent,
    LanguageSelectorComponent
  ],
  templateUrl: './superior-controls.component.html',
  styles: [`:host { display: contents }`]
})
export class SuperiorControlsComponent {
  @Input({required: true}) isInputBox?: boolean;
}
