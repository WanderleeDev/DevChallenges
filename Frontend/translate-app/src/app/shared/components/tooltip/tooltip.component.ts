import { CommonModule } from '@angular/common';
import { ChangeDetectionStrategy, Component } from '@angular/core';
import { TooltipService } from '../../../services/tooltip.service';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-tooltip',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './tooltip.component.html',
  styleUrls: ['./tooltip.component.css'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class TooltipComponent {
  isViewTooltip: Observable<boolean>;

  constructor (private tooltipSvc: TooltipService) {
    this.isViewTooltip = this.tooltipSvc.getObservableTooltip()
  }
}
