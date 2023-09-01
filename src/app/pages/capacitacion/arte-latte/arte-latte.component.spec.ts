import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ArteLatteComponent } from './arte-latte.component';

describe('ArteLatteComponent', () => {
  let component: ArteLatteComponent;
  let fixture: ComponentFixture<ArteLatteComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ArteLatteComponent]
    });
    fixture = TestBed.createComponent(ArteLatteComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
