import { CommonModule } from '@angular/common';
import { ChangeDetectionStrategy, Component } from '@angular/core';

@Component({
  selector: 'app-search-box',
  standalone: true,
  imports: [
    CommonModule,
  ],
  templateUrl: './searchBox.component.html',
  styles: `:host { display: contents; }`,
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class SearchBoxComponent { }
