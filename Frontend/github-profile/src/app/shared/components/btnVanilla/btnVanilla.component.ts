import { CommonModule } from '@angular/common';
import { ChangeDetectionStrategy, Component } from '@angular/core';

@Component({
  selector: 'app-btn-vanilla',
  standalone: true,
  imports: [
    CommonModule,
  ],
  templateUrl: './btnVanilla.component.html',
  styles: `:host { display: contents; }`,
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class BtnVanillaComponent { }
