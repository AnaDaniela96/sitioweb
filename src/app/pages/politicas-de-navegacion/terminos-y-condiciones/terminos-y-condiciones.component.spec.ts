import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TerminosYCondicionesComponent } from './terminos-y-condiciones.component';

describe('TerminosYCondicionesComponent', () => {
  let component: TerminosYCondicionesComponent;
  let fixture: ComponentFixture<TerminosYCondicionesComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [TerminosYCondicionesComponent]
    });
    fixture = TestBed.createComponent(TerminosYCondicionesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
