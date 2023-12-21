import { CommonModule } from '@angular/common';
import { ChangeDetectionStrategy, Component, Input } from '@angular/core';
import { InfoComplementaryComponent } from '../info-complementary/info-complementary.component';
//  interface
import { IUserRepositories } from '../../../interface/IUserRepositories.interface';

@Component({
  selector: 'app-project-card',
  standalone: true,
  imports: [
    CommonModule,
    InfoComplementaryComponent
  ],
  templateUrl: './project-card.component.html',
  styles: `:host {display: contents;}`,
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class ProjectCardComponent {
  @Input({required: true}) repository!: IUserRepositories;
}
