import { CommonModule } from '@angular/common';
import { AfterViewInit, ChangeDetectionStrategy, Component, ElementRef, ViewChild } from '@angular/core';
import { UserGithubService } from '../../../services/userGithub.service';
import { FormControl, ReactiveFormsModule, Validators } from '@angular/forms';



@Component({
  selector: 'app-search-box',
  standalone: true,
  imports: [
    CommonModule,
    ReactiveFormsModule
  ],
  templateUrl: './searchBox.component.html',
  styles: `:host { display: contents; }`,
  changeDetection: ChangeDetectionStrategy.Default,
})
export class SearchBoxComponent implements AfterViewInit {
  @ViewChild('inputSearch') inputSearch!: ElementRef<HTMLInputElement>;

  public inputBox = new FormControl('', {nonNullable: true, validators: [Validators.required]});
  private prevValue = '';

  constructor (private userGithubService: UserGithubService) { }

  ngAfterViewInit(): void {
    this.inputSearch.nativeElement.focus();
  }

  public searchUser (): void {
    const currentValue = this.inputBox.value.trim();

    if (!currentValue || currentValue === this.prevValue ) return

    this.prevValue = currentValue;
    this.userGithubService.getAllDataUser(currentValue);
  }

  public onKeyPress (event: KeyboardEvent): void {
    if (event.key === 'Enter') this.searchUser();
  }
}
