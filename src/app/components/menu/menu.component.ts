import { Component, HostListener } from '@angular/core';
import { Router, NavigationEnd } from '@angular/router';

@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.css']
})
export class MenuComponent {
  isMenuFixed: boolean = false;
  isHome: boolean = false; // Agregamos una propiedad para verificar si estamos en la página de inicio


  constructor(private router: Router) { 
    // Escuchar cambios de ruta para verificar si estamos en la página de inicio
    this.router.events.subscribe((event) => {
      if (event instanceof NavigationEnd) {
        this.isHome = (event.url === '/'); // Define aquí la URL de la página de inicio
      }
    });
  }

  @HostListener('window:scroll', ['$event'])
  onScroll(event: Event): void {
    // Aquí puedes definir la lógica para determinar si isMenuFixed debe ser true o false
    const scrollY = window.scrollY; // Obtén la posición de desplazamiento vertical
    if (scrollY > window.innerHeight) {
      this.isMenuFixed = true;
    } else {
      this.isMenuFixed = false;
    }
  }
}
