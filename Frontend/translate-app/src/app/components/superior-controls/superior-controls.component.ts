import { AfterViewInit, Component, Input, OnInit, signal } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DoubleArrowComponent } from '../../shared/icons/double-arrow/double-arrow.component';
import { BtnBaseComponent } from '../../shared/components/btn-base/btn-base.component';
import { BtnControlComponent } from '../../shared/components/btn-control/btn-control.component';
import { LanguageSelectorComponent } from '../../shared/components/language-selector/language-selector.component';
//  services
import { BoxTextStateService } from '../../services/boxTextState.service';
import { TranslateService } from '../../services/translate.service';
//  helpers
import { setListenerButtons } from '../../shared/helpers/setListenerButtons';

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
export class SuperiorControlsComponent implements OnInit, AfterViewInit {
  @Input({required: true}) isInputBox?: boolean;
  fnSetLanguage?: (lang:string) => void;
  isActiveLanguageDetection = signal(false);
  classContainerControl?: string;

  constructor (
    private boxTextStateSvc: BoxTextStateService,
    private translateSvc: TranslateService,
  ) { }

  ngOnInit(): void {
    this.classContainerControl = this.isInputBox ? 'textAreaInput' : 'textAreaOutput';
    this.isInputBox
      ? this.fnSetLanguage = this.translateSvc.setLanguageInitial.bind(this.translateSvc)
      : this.fnSetLanguage = this.translateSvc.setLanguageFinal.bind(this.translateSvc);

  }

  ngAfterViewInit(): void {
    !!this.classContainerControl && setListenerButtons({
      parentContainer: this.classContainerControl,
      buttonChild: 'btn-control',
      classActive: 'active-btn'
    })
  }

  public invertValues (): void {
    this.boxTextStateSvc.invertValues();
  }

  public languageDetectionToggle (): void {
    this.isActiveLanguageDetection.update( () => this.translateSvc.setLanguageDetection());
  }

  public setLanguage (lang: string): void {
    !!this.fnSetLanguage && this.fnSetLanguage(lang)
  }
}
