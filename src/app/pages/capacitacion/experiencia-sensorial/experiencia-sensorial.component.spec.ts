import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ExperienciaSensorialComponent } from './experiencia-sensorial.component';

describe('ExperienciaSensorialComponent', () => {
  let component: ExperienciaSensorialComponent;
  let fixture: ComponentFixture<ExperienciaSensorialComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ExperienciaSensorialComponent]
    });
    fixture = TestBed.createComponent(ExperienciaSensorialComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
