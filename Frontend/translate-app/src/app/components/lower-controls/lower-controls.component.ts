import { Component, Input } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BtnBaseComponent } from '../btn-base/btn-base.component';
import { BtnTranslateComponent } from '../btn-translate/btn-translate.component';
import { SoundComponent } from '../../icons/sound/sound.component';
import { CopyComponent } from '../../icons/copy/copy.component';

@Component({
  selector: 'app-lower-controls',
  standalone: true,
  imports: [
    CommonModule,
    BtnBaseComponent,
    BtnTranslateComponent,
    SoundComponent,
    CopyComponent
  ],
  templateUrl: './lower-controls.component.html',
  styles: [`:host { display: contents }`]
})
export class LowerControlsComponent {
  @Input({required: true}) hasTranslationBtn?: boolean;
}
