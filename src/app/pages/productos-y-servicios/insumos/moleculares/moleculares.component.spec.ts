import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MolecularesComponent } from './moleculares.component';

describe('MolecularesComponent', () => {
  let component: MolecularesComponent;
  let fixture: ComponentFixture<MolecularesComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [MolecularesComponent]
    });
    fixture = TestBed.createComponent(MolecularesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
