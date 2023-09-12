import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MixologiaMocteleriaComponent } from './mixologia-mocteleria.component';

describe('MixologiaMocteleriaComponent', () => {
  let component: MixologiaMocteleriaComponent;
  let fixture: ComponentFixture<MixologiaMocteleriaComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [MixologiaMocteleriaComponent]
    });
    fixture = TestBed.createComponent(MixologiaMocteleriaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
