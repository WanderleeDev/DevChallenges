import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterOutlet } from '@angular/router';
import { TitleComponent } from './components/title/title.component';
import { BoxTranslateComponent } from './components/box-translate/box-translate.component';
import { TooltipComponent } from './shared/components/tooltip/tooltip.component';


@Component({
  selector: 'app-root',
  standalone: true,
  imports: [
    CommonModule,
    RouterOutlet,
    TitleComponent,
    BoxTranslateComponent,
    TooltipComponent
  ],
  templateUrl: './app.component.html',
})
export class AppComponent {
  title = 'translate-app';
}
