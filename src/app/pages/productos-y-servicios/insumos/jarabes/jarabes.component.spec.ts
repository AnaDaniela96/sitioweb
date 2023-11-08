import { ComponentFixture, TestBed } from '@angular/core/testing';

import { JarabesComponent } from './jarabes.component';

describe('JarabesComponent', () => {
  let component: JarabesComponent;
  let fixture: ComponentFixture<JarabesComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [JarabesComponent]
    });
    fixture = TestBed.createComponent(JarabesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
