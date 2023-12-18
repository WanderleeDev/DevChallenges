import { CommonModule } from '@angular/common';
import { ChangeDetectionStrategy, Component } from '@angular/core';

@Component({
  selector: 'app-info-complementary',
  standalone: true,
  imports: [
    CommonModule,
  ],
  templateUrl: './info-complementary.component.html',
  styles: `:host { display: contents; }`,
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class InfoComplementaryComponent { }
