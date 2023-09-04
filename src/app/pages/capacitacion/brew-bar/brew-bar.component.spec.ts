import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BrewBarComponent } from './brew-bar.component';

describe('BrewBarComponent', () => {
  let component: BrewBarComponent;
  let fixture: ComponentFixture<BrewBarComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [BrewBarComponent]
    });
    fixture = TestBed.createComponent(BrewBarComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
