import { CommonModule } from '@angular/common';
import { ChangeDetectionStrategy, Component } from '@angular/core';

@Component({
  selector: 'app-logo',
  standalone: true,
  imports: [
    CommonModule,
  ],
  templateUrl: './logo.component.html',
  styles: `:host {display: contents;}`,
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class LogoComponent { }