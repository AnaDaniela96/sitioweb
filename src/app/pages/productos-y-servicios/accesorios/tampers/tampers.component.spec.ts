import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TampersComponent } from './tampers.component';

describe('TampersComponent', () => {
  let component: TampersComponent;
  let fixture: ComponentFixture<TampersComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [TampersComponent]
    });
    fixture = TestBed.createComponent(TampersComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
