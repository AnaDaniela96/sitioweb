import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BaristaChampComponent } from './barista-champ.component';

describe('BaristaChampComponent', () => {
  let component: BaristaChampComponent;
  let fixture: ComponentFixture<BaristaChampComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [BaristaChampComponent]
    });
    fixture = TestBed.createComponent(BaristaChampComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
