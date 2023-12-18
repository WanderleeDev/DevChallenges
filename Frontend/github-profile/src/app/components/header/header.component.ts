import { CommonModule, NgOptimizedImage } from '@angular/common';
import { ChangeDetectionStrategy, Component, Input, OnChanges } from '@angular/core';
import { TagInfoComponent } from '../../shared/components/tagInfo/tagInfo.component';
import { match, P } from 'ts-pattern';
//  interfaces
import { IUsersGithub } from '../../interface/IUserGithub.interface';

@Component({
  selector: 'app-header',
  standalone: true,
  imports: [
    CommonModule,
    NgOptimizedImage,
    TagInfoComponent
  ],
  templateUrl: './header.component.html',
  styles: `:host { display: contents; }`,
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class HeaderComponent implements OnChanges {
  @Input ({ required: true }) developerData: IUsersGithub | null = null;
  dataTagsUser?: Pick<IUsersGithub, 'followers' | 'following' | 'location'>;

  ngOnChanges (): void {
    match(this.developerData)
      .with({ followers: P.number, following: P.number, location: P.string }, (data) => {
          this.dataTagsUser = {
            ...this.dataTagsUser,
            followers: data.followers,
            following: data.following,
            location: data.location,
          };
      })
  }
}
