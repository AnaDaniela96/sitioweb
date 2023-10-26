import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PedidosForaneosExpoCafeComponent } from './pedidos-foraneos-expo-cafe.component';

describe('PedidosForaneosExpoCafeComponent', () => {
  let component: PedidosForaneosExpoCafeComponent;
  let fixture: ComponentFixture<PedidosForaneosExpoCafeComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [PedidosForaneosExpoCafeComponent]
    });
    fixture = TestBed.createComponent(PedidosForaneosExpoCafeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
