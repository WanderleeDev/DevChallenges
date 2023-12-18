import { CommonModule } from '@angular/common';
import { ChangeDetectionStrategy, Component } from '@angular/core';
import { SearchBoxComponent } from '../../shared/components/searchBox/searchBox.component';

@Component({
  selector: 'app-banner',
  standalone: true,
  imports: [
    CommonModule,
    SearchBoxComponent
  ],
  templateUrl: './banner.component.html',
  styles: `:host { display: contents; }`,
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class BannerComponent { }
