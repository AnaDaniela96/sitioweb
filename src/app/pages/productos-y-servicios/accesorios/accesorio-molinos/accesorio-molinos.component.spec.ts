import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AccesorioMolinosComponent } from './accesorio-molinos.component';

describe('AccesorioMolinosComponent', () => {
  let component: AccesorioMolinosComponent;
  let fixture: ComponentFixture<AccesorioMolinosComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [AccesorioMolinosComponent]
    });
    fixture = TestBed.createComponent(AccesorioMolinosComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
