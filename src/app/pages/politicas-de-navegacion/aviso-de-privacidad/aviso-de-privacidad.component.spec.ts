import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AvisoDePrivacidadComponent } from './aviso-de-privacidad.component';

describe('AvisoDePrivacidadComponent', () => {
  let component: AvisoDePrivacidadComponent;
  let fixture: ComponentFixture<AvisoDePrivacidadComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [AvisoDePrivacidadComponent]
    });
    fixture = TestBed.createComponent(AvisoDePrivacidadComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
