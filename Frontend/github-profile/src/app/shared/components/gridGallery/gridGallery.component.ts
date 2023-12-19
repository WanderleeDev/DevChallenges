import { CommonModule } from '@angular/common';
import { ChangeDetectionStrategy, Component, Input } from '@angular/core';
import { IUserRepositories } from '../../../interface/IUserRepositories.interface';

@Component({
  selector: 'app-grid-gallery',
  standalone: true,
  imports: [
    CommonModule,
  ],
  templateUrl: './gridGallery.component.html',
  styles: `
    :host {
      display: block;
    }
  `,
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class GridGalleryComponent {
  @Input({required: true}) urlRepositoriesUsers: string | null = null
  repositories: IUserRepositories | null = null;

  // ngOnInit(): void {
  //   fetch('https://api.github.com/users/WanderleeDev/repos')
  //     .then((res: Response ): Promise<IUserRepositories>  => {
  //       return match(res.ok)
  //       .with(true, ():Promise<IUserRepositories> => res.json())
  //       .otherwise(() => { throw new Error('Error')} )
  //     })
  //     .then(data => this.repositories = data)
  //     .catch((err: Error) => {
  //       console.log(err.message);
  //       this.repositories = null;
  //     })
  // }
}
