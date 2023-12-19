import { CommonModule } from '@angular/common';
import { ChangeDetectionStrategy, Component, Input } from '@angular/core';
import { IRepositoryTagDto } from '../../../interface/IUserRepositories.interface';
import { ObjEntriesPipe } from "../../pipes/obj-entries.pipe";
import { DateDifferencePipe } from '../../pipes/date-difference.pipe';

@Component({
    selector: 'app-info-complementary',
    standalone: true,
    templateUrl: './info-complementary.component.html',
    styles: `:host { display: contents; }`,
    changeDetection: ChangeDetectionStrategy.OnPush,
    imports: [
        CommonModule,
        ObjEntriesPipe,
        DateDifferencePipe
    ]
})
export class InfoComplementaryComponent {
  @Input({required: true}) repositoryTags!: IRepositoryTagDto;
}
