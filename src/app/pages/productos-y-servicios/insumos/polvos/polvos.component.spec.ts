import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PolvosComponent } from './polvos.component';

describe('PolvosComponent', () => {
  let component: PolvosComponent;
  let fixture: ComponentFixture<PolvosComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [PolvosComponent]
    });
    fixture = TestBed.createComponent(PolvosComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
