import { Component, Input, OnInit, signal } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DoubleArrowComponent } from '../../shared/icons/double-arrow/double-arrow.component';
import { BtnBaseComponent } from '../../shared/components/btn-base/btn-base.component';
import { BtnControlComponent } from '../../shared/components/btn-control/btn-control.component';
import { LanguageSelectorComponent } from '../../shared/components/language-selector/language-selector.component';
//  services
import { BoxTextStateService } from '../../services/boxTextState.service';
import { TranslateService } from '../../services/translate.service';

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
export class SuperiorControlsComponent implements OnInit {
  @Input({required: true}) isInputBox?: boolean;
  isActiveLanguageDetection = signal(false);
  fnSetLanguageFinal!: (lang:string) => void;

  constructor (
    private boxTextStateSvc: BoxTextStateService,
    private translateSvc: TranslateService,
  ) { }

  ngOnInit(): void {
    this.isInputBox
      ? this.fnSetLanguageFinal = this.translateSvc.setLanguageInitial
      : this.fnSetLanguageFinal = this.translateSvc.setLanguageFinal;
  }

  public invertValues (): void {
    this.boxTextStateSvc.invertValues();
  }

  public languageDetectionToggle (): void {
    this.isActiveLanguageDetection.update( () => this.translateSvc.setLanguageDetection());
  }

  public setLanguage (lang: string): void {
    this.fnSetLanguageFinal(lang)
  }
}
