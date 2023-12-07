import { Component, Input } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DoubleArrowComponent } from '../../shared/icons/double-arrow/double-arrow.component';
import { BtnBaseComponent } from '../../shared/components/btn-base/btn-base.component';
import { BtnControlComponent } from '../../shared/components/btn-control/btn-control.component';
import { LanguageSelectorComponent } from '../../shared/components/language-selector/language-selector.component';

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
