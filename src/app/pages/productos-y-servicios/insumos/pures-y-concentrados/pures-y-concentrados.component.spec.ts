import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PuresYConcentradosComponent } from './pures-y-concentrados.component';

describe('PuresYConcentradosComponent', () => {
  let component: PuresYConcentradosComponent;
  let fixture: ComponentFixture<PuresYConcentradosComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [PuresYConcentradosComponent]
    });
    fixture = TestBed.createComponent(PuresYConcentradosComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
