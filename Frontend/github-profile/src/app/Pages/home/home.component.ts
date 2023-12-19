import { CommonModule } from '@angular/common';
import { ChangeDetectionStrategy, Component, OnInit, effect, signal } from '@angular/core';
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
  styles: `:host { display: contents; }`,
  changeDetection: ChangeDetectionStrategy.OnPush,
})

export default class HomeComponent implements OnInit {
  developerData = signal<IUsersGithub | null>(null)
  repositoryData : IUserRepositories[] | null = null;

  user!: IUsersGithub | null;

  constructor (private userGithubSvc: UserGithubService) {
    effect(() => {
      const url  = userGithubSvc.userSignal()?.repos_url;

      if (url) {
        this.userGithubSvc.getRepositories(url)
          .then(data =>  this.repositoryData = data)
      }
    })

  }

  ngOnInit(): void {
    this.user = this.userGithubSvc.computedState()
  }
}
