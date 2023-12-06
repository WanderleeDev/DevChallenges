import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterOutlet } from '@angular/router';
import { BannerComponent } from './components/banner/banner.component';
import { HomeComponent } from './page/home/home.component';
import { LoaderComponent } from './components/loader/loader.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [
    CommonModule,
    RouterOutlet,
    BannerComponent,
    HomeComponent,
    LoaderComponent
  ],
  templateUrl: './app.component.html',
  styleUrls: []
})
export class AppComponent {

}
