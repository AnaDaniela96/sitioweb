import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BubleTeaIcedCoffeeComponent } from './bubble-tea-iced-coffee.component';

describe('BubleTeaIcedCoffeeComponent', () => {
  let component: BubleTeaIcedCoffeeComponent;
  let fixture: ComponentFixture<BubleTeaIcedCoffeeComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [BubleTeaIcedCoffeeComponent]
    });
    fixture = TestBed.createComponent(BubleTeaIcedCoffeeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
