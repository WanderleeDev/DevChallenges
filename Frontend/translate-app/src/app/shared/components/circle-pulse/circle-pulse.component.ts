import { CommonModule } from '@angular/common';
import { ChangeDetectionStrategy, Component } from '@angular/core';

@Component({
  selector: 'app-circle-pulse',
  standalone: true,
  imports: [
    CommonModule,
  ],
  templateUrl: './circle-pulse.component.html',
  styles: `:host { display: contents; }`,
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class CirclePulseComponent { }
