import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ProductosPedecederosComponent } from './productos-pedecederos.component';

describe('ProductosPedecederosComponent', () => {
  let component: ProductosPedecederosComponent;
  let fixture: ComponentFixture<ProductosPedecederosComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ProductosPedecederosComponent]
    });
    fixture = TestBed.createComponent(ProductosPedecederosComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
