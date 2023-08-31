import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PoliticasDeNavegacionComponent } from './politicas-de-navegacion.component';

describe('PoliticasDeNavegacionComponent', () => {
  let component: PoliticasDeNavegacionComponent;
  let fixture: ComponentFixture<PoliticasDeNavegacionComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [PoliticasDeNavegacionComponent]
    });
    fixture = TestBed.createComponent(PoliticasDeNavegacionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
