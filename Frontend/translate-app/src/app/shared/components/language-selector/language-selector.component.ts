import { CommonModule } from '@angular/common';
import { ChangeDetectionStrategy, Component, Input } from '@angular/core';
//  languages
import { languages } from '../../../languages/languages';
//  interfaces
import { ILanguage } from '../../interfaces/ILanguage.interface';

@Component({
  selector: 'app-language-selector',
  standalone: true,
  imports: [
    CommonModule,
  ],
  templateUrl: './language-selector.component.html',
  styles: [`:host { display: contents }`],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class LanguageSelectorComponent {
  @Input({required: true}) functionSetLanguage?: (lang: string) => void;
  listLanguagesFull: ILanguage[] = languages;

  public changeLanguage (lang: string): void {
    if (this.functionSetLanguage) {
      this.functionSetLanguage(lang)
    }
  }
}
