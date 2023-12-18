import { CommonModule } from '@angular/common';
import { ChangeDetectionStrategy, Component, Signal } from '@angular/core';
import { BannerComponent } from '../../components/banner/banner.component';
import { UserInfoComponent } from '../../components/user-info/user-info.component';
import { toSignal } from '@angular/core/rxjs-interop'
//  services
import { UserGithubService } from '../../services/userGithub.service';
// interface
import { IUsersGithub } from '../../interface/IUserGithub.interface';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [
    CommonModule,
    BannerComponent,
    UserInfoComponent
  ],
  templateUrl: './home.component.html',
  styles: `:host { display: contents; }`,
  changeDetection: ChangeDetectionStrategy.OnPush,
})

export default class HomeComponent {
  developerData: Signal<IUsersGithub | null> = toSignal(this.userGithubSvc.getUser('github'),{ initialValue: null })

  constructor (
    private userGithubSvc: UserGithubService
  ) { }
}
