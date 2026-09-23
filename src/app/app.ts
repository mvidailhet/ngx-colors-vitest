import { Component, signal } from '@angular/core';
import { NgxColorsComponent, NgxColorsTriggerDirective } from 'ngx-colors';

@Component({
  selector: 'app-root',
  imports: [NgxColorsComponent, NgxColorsTriggerDirective],
  templateUrl: './app.html',
  styleUrl: './app.scss'
})
export class App {
  protected readonly title = signal('ngx-colors-vitest');
  protected selectedColor = '#3f51b5';
}
