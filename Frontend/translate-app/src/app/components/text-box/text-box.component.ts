import { AfterViewInit, Component, Input, computed, signal } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ViewChild, ElementRef } from '@angular/core';

@Component({
  selector: 'app-text-box',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './text-box.component.html',
  styles: [`:host { display: contents }`]
})
export class TextBoxComponent implements AfterViewInit {
  @ViewChild('box') textBox!: ElementRef<HTMLTextAreaElement>;
  @Input({required: true}) hasLetterCounter?: boolean;
  text = signal('');
  lettersCounter = computed(() => this.text().length)

  ngAfterViewInit(): void {
    this.textBox.nativeElement.value = '';
  }

  public updateValue (value: string): void {
    console.log(value);
    this.text.set(value);
  }
}
