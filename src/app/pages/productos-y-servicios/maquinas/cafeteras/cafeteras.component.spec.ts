import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CafeterasComponent } from './cafeteras.component';

describe('CafeterasComponent', () => {
  let component: CafeterasComponent;
  let fixture: ComponentFixture<CafeterasComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [CafeterasComponent]
    });
    fixture = TestBed.createComponent(CafeterasComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
