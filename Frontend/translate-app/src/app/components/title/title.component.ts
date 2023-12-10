import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LogoComponent } from '../../shared/icons/logo/logo.component';

@Component({
  selector: 'app-title',
  standalone: true,
  imports: [CommonModule, LogoComponent],
  templateUrl: './title.component.html',
  styles: [`:host { display: contents }`]
})

export class TitleComponent { }
