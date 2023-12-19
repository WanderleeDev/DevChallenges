import { CommonModule } from '@angular/common';
import { ChangeDetectionStrategy, Component } from '@angular/core';

@Component({
  selector: 'app-skeleton',
  standalone: true,
  imports: [
    CommonModule,
  ],
  templateUrl: './skeleton.component.html',
  styles: `
    :host { display: contents; }
  `,
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class SkeletonComponent { }
