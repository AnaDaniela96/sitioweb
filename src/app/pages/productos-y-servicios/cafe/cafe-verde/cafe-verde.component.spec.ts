import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CafeVerdeComponent } from './cafe-verde.component';

describe('CafeVerdeComponent', () => {
  let component: CafeVerdeComponent;
  let fixture: ComponentFixture<CafeVerdeComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [CafeVerdeComponent]
    });
    fixture = TestBed.createComponent(CafeVerdeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
