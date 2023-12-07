import { CommonModule } from '@angular/common';
import { ChangeDetectionStrategy, Component, Input } from '@angular/core';
import { CirclePulseComponent } from '../circle-pulse/circle-pulse.component';

@Component({
  selector: 'app-btn-control',
  standalone: true,
  imports: [
    CommonModule,
    CirclePulseComponent
  ],
  templateUrl: './btn-control.component.html',
  styles: [`:host { display: contents }`],

  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class BtnControlComponent {
  @Input({required: true}) textBtn = 'empty'
  @Input({required: true}) hasMarkActive = false;
}
