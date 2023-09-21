import { Component } from '@angular/core';
import { ActivatedRoute, Router, NavigationEnd  } from '@angular/router';

@Component({
  selector: 'app-productos-y-servicios',
  templateUrl: './productos-y-servicios.component.html',
  styleUrls: ['./productos-y-servicios.component.css']
})
export class ProductosYServiciosComponent {
  isMenuProductosServicios: boolean = false;
  isMainVisible: boolean = true;
  isProductosYSevciciosPage: boolean = true;

  constructor(private route: ActivatedRoute, private router: Router) { 
    // Escuchar cambios de ruta para verificar si estamos en la página de inicio
    this.router.events.subscribe((event) => {
      if (event instanceof NavigationEnd) {
        if (event.url === '/productos-y-servicios') {
          this.isMenuProductosServicios = false;
          this.isMainVisible = true;
        }
      }
    });
  }

  onClickInsumosCard() {
    // Actualiza los estados y navega a la ruta deseada
    this.isMenuProductosServicios = true;
    this.isMainVisible = false;
    this.router.navigate(['/productos-y-servicios/insumos-para-cafeterias']);
  }

  onClickAccesoriosCard() {
    // Actualiza los estados y navega a la ruta deseada
    this.isMenuProductosServicios = true;
    this.isMainVisible = false;
    this.router.navigate(['/productos-y-servicios/accesorios-para-poner-una-cafeteria']);
  }

  onClickMaquinasCard() {
    // Actualiza los estados y navega a la ruta deseada
    this.isMenuProductosServicios = true;
    this.isMainVisible = false;
    this.router.navigate(['/productos-y-servicios/maquinaria-y-equipo-para-cafeterias']);
  }

  onClickCafeCard() {
    // Actualiza los estados y navega a la ruta deseada
    this.isMenuProductosServicios = true;
    this.isMainVisible = false;
    this.router.navigate(['/productos-y-servicios/cafe-de-especialidad']);
  }
}




