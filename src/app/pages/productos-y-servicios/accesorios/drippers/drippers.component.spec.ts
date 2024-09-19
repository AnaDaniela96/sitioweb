import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DrippersComponent } from './drippers.component';

describe('DrippersComponent', () => {
  let component: DrippersComponent;
  let fixture: ComponentFixture<DrippersComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [DrippersComponent]
    });
    fixture = TestBed.createComponent(DrippersComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
