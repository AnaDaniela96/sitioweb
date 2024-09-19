import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PrensasFrancesasComponent } from './prensas-francesas.component';

describe('PrensasFrancesasComponent', () => {
  let component: PrensasFrancesasComponent;
  let fixture: ComponentFixture<PrensasFrancesasComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [PrensasFrancesasComponent]
    });
    fixture = TestBed.createComponent(PrensasFrancesasComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
