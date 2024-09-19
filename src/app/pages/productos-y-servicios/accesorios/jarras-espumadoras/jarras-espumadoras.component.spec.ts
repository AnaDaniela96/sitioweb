import { ComponentFixture, TestBed } from '@angular/core/testing';

import { JarrasEspumadorasComponent } from './jarras-espumadoras.component';

describe('JarrasEspumadorasComponent', () => {
  let component: JarrasEspumadorasComponent;
  let fixture: ComponentFixture<JarrasEspumadorasComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [JarrasEspumadorasComponent]
    });
    fixture = TestBed.createComponent(JarrasEspumadorasComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
