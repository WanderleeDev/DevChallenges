import { CommonModule } from '@angular/common';
import { ChangeDetectionStrategy, Component, Input } from '@angular/core';
// interface
import { IUsersGithub } from '../../interface/IUserGithub.interface';
import { HeaderComponent } from '../header/header.component';

@Component({
  selector: 'app-user-info',
  standalone: true,
  imports: [
    CommonModule,
    HeaderComponent
  ],
  templateUrl: './user-info.component.html',
  styles: `
    :host { display: contents; }
  `,
  changeDetection: ChangeDetectionStrategy.OnPush,
})

export class UserInfoComponent {
  @Input({required: true}) developerData: IUsersGithub | null = null;
}
