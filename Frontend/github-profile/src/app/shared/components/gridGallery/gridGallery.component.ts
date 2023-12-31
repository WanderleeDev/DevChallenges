import { CommonModule } from '@angular/common';
import { ChangeDetectionStrategy, Component, Input } from '@angular/core';

@Component({
  selector: 'app-grid-gallery',
  standalone: true,
  imports: [
    CommonModule,
  ],
  templateUrl: './gridGallery.component.html',
  styles: `
    :host {
      display: block;
    }
  `,
  changeDetection: ChangeDetectionStrategy.OnPush,
})

export class GridGalleryComponent {
  @Input({required: true}) user = {name: '', bio: ''}
}
