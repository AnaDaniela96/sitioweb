import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PoliticasCursosTalleresComponent } from './politicas-cursos-talleres.component';

describe('PoliticasCursosTalleresComponent', () => {
  let component: PoliticasCursosTalleresComponent;
  let fixture: ComponentFixture<PoliticasCursosTalleresComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [PoliticasCursosTalleresComponent]
    });
    fixture = TestBed.createComponent(PoliticasCursosTalleresComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
