import { CommonModule } from '@angular/common';
import { ChangeDetectionStrategy, Component, Input } from '@angular/core';
// interface
import { IUsersGithub } from '../../interface/IUserGithub.interface';
import { HeaderComponent } from '../header/header.component';
import { GridGalleryComponent } from '../../shared/components/gridGallery/gridGallery.component';
import { ProjectCardComponent } from '../../shared/components/project-card/project-card.component';
import { SkeletonComponent } from '../../shared/components/skeleton/skeleton.component';
import { IUserRepositories } from '../../interface/IUserRepositories.interface';

@Component({
  selector: 'app-user-info',
  standalone: true,
  imports: [
    CommonModule,
    HeaderComponent,
    GridGalleryComponent,
    ProjectCardComponent,
    SkeletonComponent
  ],
  templateUrl: './user-info.component.html',
  styles: `:host { display: contents; }`,
  changeDetection: ChangeDetectionStrategy.OnPush,
})

export class UserInfoComponent {
  @Input({required: true}) developerData: IUsersGithub | null = null ;
  @Input({required: true}) repositoryData: IUserRepositories[] | null = null;
}
