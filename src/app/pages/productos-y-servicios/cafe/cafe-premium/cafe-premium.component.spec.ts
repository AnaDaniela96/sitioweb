import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CafePremiumComponent } from './cafe-premium.component';

describe('CafePremiumComponent', () => {
  let component: CafePremiumComponent;
  let fixture: ComponentFixture<CafePremiumComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [CafePremiumComponent]
    });
    fixture = TestBed.createComponent(CafePremiumComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
