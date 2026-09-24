import { TestBed } from '@angular/core/testing';

// If we add this mock, vitest will stop failing with this error : "ReferenceError: Cannot access 'OverlayService' before initialization"

/* vi.mock('ngx-colors', async () => {
  const { Component, Directive, EventEmitter, Input, Output } = await import('@angular/core');

  class MockNgxColorsComponent {
    color = '';
    outputModel = '';
    theme = '';
    colorChange = new EventEmitter<string>();
  }

  Input()(MockNgxColorsComponent.prototype, 'color');
  Input()(MockNgxColorsComponent.prototype, 'outputModel');
  Input()(MockNgxColorsComponent.prototype, 'theme');
  Output()(MockNgxColorsComponent.prototype, 'colorChange');
  Component({
    selector: 'ngx-colors',
    standalone: true,
    template: '',
  })(MockNgxColorsComponent);

  class MockNgxColorsTriggerDirective {}

  Directive({
    selector: '[ngxColorsTrigger]',
    standalone: true,
  })(MockNgxColorsTriggerDirective);

  return {
    NgxColorsComponent: MockNgxColorsComponent,
    NgxColorsTriggerDirective: MockNgxColorsTriggerDirective,
  };
}); */

describe('App', () => {
  let App: typeof import('./app').App;

  beforeEach(async () => {
    App = (await import('./app')).App;

    await TestBed.configureTestingModule({
      imports: [App],
    }).compileComponents();
  });

  it('should create the app', () => {
    const fixture = TestBed.createComponent(App);
    const app = fixture.componentInstance;
    expect(app).toBeTruthy();
  });

  it('should render title', async () => {
    const fixture = TestBed.createComponent(App);
    await fixture.whenStable();
    const compiled = fixture.nativeElement as HTMLElement;
    expect(compiled.querySelector('h1')?.textContent).toContain('ngx-colors-vitest');
  });
});
