import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ColdBrewComponent } from './cold-brew.component';

describe('ColdBrewComponent', () => {
  let component: ColdBrewComponent;
  let fixture: ComponentFixture<ColdBrewComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ColdBrewComponent]
    });
    fixture = TestBed.createComponent(ColdBrewComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
