import { TestBed } from '@angular/core/testing';
import { App } from './app';

describe('App title', () => {
  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [App],
    }).compileComponents();
  });

  it('renders the right page title', async () => {
    const fixture = TestBed.createComponent(App);

    await fixture.whenStable();

    const title = fixture.nativeElement.querySelector('h1') as HTMLHeadingElement | null;
    expect(title?.textContent?.trim()).toBe('ngx-colors-vitest');
  });
});
