import { Injectable } from '@angular/core';
import { TooltipService } from './tooltip.service';

@Injectable({
  providedIn: 'root'
})
export class CopyToClipboardService {

  constructor(
    private tooltipService: TooltipService,
  ) { }

  public async copyToClipboard (value: string): Promise<void> {
    if (!value) { return }
    await navigator.clipboard.writeText(value.trim())
    this.tooltipService.showTooltip()
  }
}
