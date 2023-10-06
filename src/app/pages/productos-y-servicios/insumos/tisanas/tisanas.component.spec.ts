import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TisanasComponent } from './tisanas.component';

describe('TisanasComponent', () => {
  let component: TisanasComponent;
  let fixture: ComponentFixture<TisanasComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [TisanasComponent]
    });
    fixture = TestBed.createComponent(TisanasComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
