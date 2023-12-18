import { CommonModule } from '@angular/common';
import { ChangeDetectionStrategy, Component } from '@angular/core';

@Component({
  selector: 'app-project-card',
  standalone: true,
  imports: [
    CommonModule,
  ],
  templateUrl: './project-card.component.html',
  styles: `:host {display: contents;}`,
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class ProjectCardComponent { }
