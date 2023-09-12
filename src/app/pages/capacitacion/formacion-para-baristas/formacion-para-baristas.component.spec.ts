import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FormacionParaBaristasComponent } from './formacion-para-baristas.component';

describe('FormacionParaBaristasComponent', () => {
  let component: FormacionParaBaristasComponent;
  let fixture: ComponentFixture<FormacionParaBaristasComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [FormacionParaBaristasComponent]
    });
    fixture = TestBed.createComponent(FormacionParaBaristasComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
