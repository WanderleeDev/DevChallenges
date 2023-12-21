import { CommonModule } from '@angular/common';
import { ChangeDetectionStrategy, Component, OnInit } from '@angular/core';
import { BannerComponent } from '../../components/banner/banner.component';
import { UserInfoComponent } from '../../components/user-info/user-info.component';
//  services
import { UserGithubService } from '../../services/userGithub.service';
// interface
import { IDataUser } from '../../interface/IAllDataUser.interface';
import { SkeletonComponent } from '../../shared/components/skeleton/skeleton.component';
import { ErrorRequestComponent } from '../../shared/components/errorRequest/errorRequest.component';
import { LoaderComponent } from '../../shared/components/loader/loader.component';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [
    CommonModule,
    BannerComponent,
    UserInfoComponent,
    SkeletonComponent,
    ErrorRequestComponent,
    LoaderComponent
  ],
  templateUrl: './home.component.html',
  changeDetection: ChangeDetectionStrategy.Default,
  styles: `:host { display: contents; }`,
})

export default class HomeComponent implements OnInit {
  allDataUser!: IDataUser;

  constructor(private userGithubSvc: UserGithubService) {}

  ngOnInit(): void {
    this.userGithubSvc.getAllDataUser('github')
    this.userGithubSvc.getDataUser$()
      .subscribe({
        next: (data): void => {
          this.allDataUser = data
          console.log(data);
        },
      })
  }
}
