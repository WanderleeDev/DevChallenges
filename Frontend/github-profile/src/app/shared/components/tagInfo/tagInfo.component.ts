import { CommonModule } from '@angular/common';
import { ChangeDetectionStrategy, Component, Input } from '@angular/core';

@Component({
  selector: 'app-tag-info',
  standalone: true,
  imports: [
    CommonModule,
  ],
  templateUrl: './tagInfo.component.html',
  styles: `
    :host {
      display: block;
    }
  `,
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class TagInfoComponent {
  @Input({required: true}) dataTag?: { label: string, info: string | number };
}
