import { CommonModule } from '@angular/common';
import { ChangeDetectionStrategy, Component, Input } from '@angular/core';

@Component({
  selector: 'app-error-request',
  standalone: true,
  imports: [
    CommonModule,
  ],
  templateUrl: './errorRequest.component.html',
  styles: `:host { display: contents;}`,
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class ErrorRequestComponent {
  @Input({required: true}) messageError ='Ops something wrong'
}
