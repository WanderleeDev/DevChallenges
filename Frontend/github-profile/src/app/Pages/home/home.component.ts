import { CommonModule } from '@angular/common';
import { ChangeDetectionStrategy, Component, OnInit } from '@angular/core';
import { BannerComponent } from '../../components/banner/banner.component';
import { UserInfoComponent } from '../../components/user-info/user-info.component';
import { Observable } from 'rxjs';
//  services
import { UserGithubService } from '../../services/userGithub.service';
// interface
import { IDataUser } from '../../interface/IAllDataUser.interface';

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

export default class HomeComponent implements OnInit {
  allDataUser?: Observable<IDataUser | null>;

  constructor(private userGithubSvc: UserGithubService) {}

  ngOnInit(): void {
    this.allDataUser = this.userGithubSvc.getDataUser$()
  }
}
