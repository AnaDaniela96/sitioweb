import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LicuadorasComponent } from './licuadoras.component';

describe('LicuadorasComponent', () => {
  let component: LicuadorasComponent;
  let fixture: ComponentFixture<LicuadorasComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [LicuadorasComponent]
    });
    fixture = TestBed.createComponent(LicuadorasComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
