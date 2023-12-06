import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HeaderComponent } from '../../components/header/header.component';
import { ControlBtnsComponent } from '../../components/control-btns/control-btns.component';
import { GalleryCoffeeComponent } from '../../components/gallery-coffee/gallery-coffee.component';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [
    CommonModule,
    HeaderComponent,
    ControlBtnsComponent,
    GalleryCoffeeComponent
  ],
  templateUrl: './home.component.html',
})
export class HomeComponent {
  readonly bgImage = '../../../assets/img/vector.svg'
  readonly bgImage2 ={
    'background-image': "url('../../../assets/img/vector.svg')",
    
    'background-repeat': 'no-repeat'
  }
}
