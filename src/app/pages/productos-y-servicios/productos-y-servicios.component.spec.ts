import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ProductosYServiciosComponent } from './productos-y-servicios.component';

describe('ProductosYServiciosComponent', () => {
  let component: ProductosYServiciosComponent;
  let fixture: ComponentFixture<ProductosYServiciosComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ProductosYServiciosComponent]
    });
    fixture = TestBed.createComponent(ProductosYServiciosComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
