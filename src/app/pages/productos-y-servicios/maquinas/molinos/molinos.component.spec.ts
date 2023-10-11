import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MolinosComponent } from './molinos.component';

describe('MolinosComponent', () => {
  let component: MolinosComponent;
  let fixture: ComponentFixture<MolinosComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [MolinosComponent]
    });
    fixture = TestBed.createComponent(MolinosComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
