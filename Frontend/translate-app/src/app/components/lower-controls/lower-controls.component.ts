import { Component, Input } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BtnBaseComponent } from '../../shared/components/btn-base/btn-base.component';
import { BtnTranslateComponent } from '../../shared/components/btn-translate/btn-translate.component';
import { SoundComponent } from '../../shared/icons/sound/sound.component';
import { CopyComponent } from '../../shared/icons/copy/copy.component';
//  helpers
import { textToSpeech } from '../../shared/helpers/textToSpeech';
//  services
import { TranslateService } from '../../services/translate.service';
import { BoxTextStateService } from '../../services/boxTextState.service';
import { CopyToClipboardService } from '../../services/copyToClipboard.service';

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
  @Input({required: true}) hasTranslationBtn!: boolean;

  constructor (
    private httpTranslateSvc: TranslateService,
    private boxTextStateSvc: BoxTextStateService,
    private copyToClipboardSvc: CopyToClipboardService,
    ) {}

  public translateText (): void {
    this.httpTranslateSvc.getTranslate('en|es').subscribe(res => console.log(res))
  }

  public copyText (): void {
    this.copyToClipboardSvc.copyToClipboard(this.boxTextStateSvc.getContentText())
  }

  public textToSpeech (): void {
    textToSpeech(this.boxTextStateSvc.getContentText());
  }
}
