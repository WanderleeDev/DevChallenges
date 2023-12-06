import { CommonModule } from '@angular/common';
import { ChangeDetectionStrategy, Component } from '@angular/core';

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
  listLanguages: string[] = ['en', 'es'];
}
