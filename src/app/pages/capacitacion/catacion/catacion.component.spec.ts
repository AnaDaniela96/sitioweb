import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CatacionComponent } from './catacion.component';

describe('CatacionComponent', () => {
  let component: CatacionComponent;
  let fixture: ComponentFixture<CatacionComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [CatacionComponent]
    });
    fixture = TestBed.createComponent(CatacionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
