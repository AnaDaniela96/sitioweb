import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TostadoComponent } from './tostado.component';

describe('TostadoComponent', () => {
  let component: TostadoComponent;
  let fixture: ComponentFixture<TostadoComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [TostadoComponent]
    });
    fixture = TestBed.createComponent(TostadoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
