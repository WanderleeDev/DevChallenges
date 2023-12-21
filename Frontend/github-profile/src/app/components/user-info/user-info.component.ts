import { CommonModule } from '@angular/common';
import { ChangeDetectionStrategy, Component, Input, OnChanges } from '@angular/core';
// interface
import { IUsersGithub } from '../../interface/IUserGithub.interface';
import { HeaderComponent } from '../header/header.component';
import { GridGalleryComponent } from '../../shared/components/gridGallery/gridGallery.component';
import { ProjectCardComponent } from '../../shared/components/project-card/project-card.component';
import { IUserRepositories } from '../../interface/IUserRepositories.interface';
import { BtnVanillaComponent } from '../../shared/components/btnVanilla/btnVanilla.component';

@Component({
  selector: 'app-user-info',
  standalone: true,
  imports: [
    CommonModule,
    HeaderComponent,
    GridGalleryComponent,
    ProjectCardComponent,
    BtnVanillaComponent
  ],
  templateUrl: './user-info.component.html',
  styles: `:host { display: contents; }`,
  changeDetection: ChangeDetectionStrategy.OnPush,
})

export class UserInfoComponent implements OnChanges{
  @Input({required: true}) developerData: IUsersGithub | null = null;
  @Input({required: true}) repositoryData: IUserRepositories[] = [];
  copyRepositories: IUserRepositories[] = [];

  ngOnChanges(): void {
    this.copyRepositories = [...this.repositoryData.slice(0,4)];
  }

  public updateListProjects (): void {
    this.copyRepositories = [...this.repositoryData];
  }
}
