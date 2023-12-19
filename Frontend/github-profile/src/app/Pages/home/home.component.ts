import { CommonModule } from '@angular/common';
import { ChangeDetectionStrategy, Component, effect, signal } from '@angular/core';
import { BannerComponent } from '../../components/banner/banner.component';
import { UserInfoComponent } from '../../components/user-info/user-info.component';
//  services
import { UserGithubService } from '../../services/userGithub.service';
// interface
import { IUsersGithub } from '../../interface/IUserGithub.interface';
import { IUserRepositories } from '../../interface/IUserRepositories.interface';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [
    CommonModule,
    BannerComponent,
    UserInfoComponent
  ],
  templateUrl: './home.component.html',
  changeDetection: ChangeDetectionStrategy.OnPush,
  styles: `:host { display: contents; }`,
})

export default class HomeComponent  {
  developerData = signal<IUsersGithub | null>(null)
  repositoryData : IUserRepositories[] | null = null;

  user = this.userGithubSvc.computedState();

  constructor (
    private userGithubSvc: UserGithubService,
  ) {
    effect(() => {
      const url  = userGithubSvc.computedState()?.repos_url
      if (url !== null && url !== undefined) {
        this.userGithubSvc.getRepositories(url)
          .then(data =>  this.repositoryData = data)
      }
    })
  }

  clic() {
    console.log(this.user);
  }
}
