import { ComponentFixture, TestBed } from '@angular/core/testing';
import { MenuComponent } from './menu.component';

describe('MenuComponent', () => {
  let component: MenuComponent;
  let fixture: ComponentFixture<MenuComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [MenuComponent]
    });
    fixture = TestBed.createComponent(MenuComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should set isMenuFixed to true when scrolling past 100 pixels', () => {
    // Simula un evento de desplazamiento con una posición mayor a 100 pixels
    spyOnProperty(window, 'pageYOffset').and.returnValue(101);

    // Dispara el evento de desplazamiento manualmente
    window.dispatchEvent(new Event('scroll'));

    // Verifica si isMenuFixed se estableció en true
    expect(component.isMenuFixed).toBe(true);
  });

  it('should set isMenuFixed to false when scrolling less than 100 pixels', () => {
    // Simula un evento de desplazamiento con una posición menor a 100 pixels
    spyOnProperty(window, 'pageYOffset').and.returnValue(99);

    // Dispara el evento de desplazamiento manualmente
    window.dispatchEvent(new Event('scroll'));

    // Verifica si isMenuFixed se estableció en false
    expect(component.isMenuFixed).toBe(false);
  });
});