import { Component, Input } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TextBoxComponent } from '../../shared/components/text-box/text-box.component';
import { LowerControlsComponent } from '../lower-controls/lower-controls.component';
import { SuperiorControlsComponent } from '../superior-controls/superior-controls.component';
//  services
import { BoxTextStateService } from '../../services/boxTextState.service';
BoxTextStateService

@Component({
  selector: 'app-box-translate',
  standalone: true,
  imports: [
    CommonModule,
    LowerControlsComponent,
    TextBoxComponent,
    SuperiorControlsComponent
  ],
  templateUrl: './box-translate.component.html',
  styles: [`:host { display: contents }`]
})
export class BoxTranslateComponent {
  @Input({required: true}) boxColor = 'bg-[#212936cc]';
  @Input({required: true}) isInputBox!: boolean;
}
