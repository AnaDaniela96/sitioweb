import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FormacionEmprendedoresComponent } from './formacion-emprendedores.component';

describe('FormacionEmprendedoresComponent', () => {
  let component: FormacionEmprendedoresComponent;
  let fixture: ComponentFixture<FormacionEmprendedoresComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [FormacionEmprendedoresComponent]
    });
    fixture = TestBed.createComponent(FormacionEmprendedoresComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
