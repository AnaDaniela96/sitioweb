import { Component, ElementRef, AfterViewInit, ViewChildren, QueryList } from '@angular/core';
import { Router, Event, NavigationStart } from '@angular/router';
import { DataService } from '../../../utils/data.service';
import { DomSanitizer, SafeUrl } from '@angular/platform-browser';

@Component({
  selector: 'app-insumos',
  templateUrl: './insumos.component.html',
  styleUrls: ['./insumos.component.css']
})
export class InsumosComponent implements AfterViewInit {


  constructor(
    private dataService: DataService,
    private sanitizer: DomSanitizer,
    private elementRef: ElementRef,
    private router: Router,
  ) { }

  insumosArray: any[] = [];
  extractedUrls: any;
  mostrarCuadricula: boolean = false;
  elementosVisibles: string = '0';
  paginaActual: number = 1; // Página actual
  tamañoPagina: number = 10; // Tamaño de página
  menuVisible: boolean = true;

  // Obtener las tarjetas (cards) de la vista
  @ViewChildren('tarjeta')
  tarjetas!: QueryList<any>;

  ngAfterViewInit() {
    // Contar elementos visibles
    this.actualizarElementosVisibles();
  }

  actualizarElementosVisibles() {
  const inicio = (this.paginaActual - 1) * this.tamañoPagina + 1;
  const fin = Math.min(this.paginaActual * this.tamañoPagina, this.insumosArray.length);
  this.elementosVisibles = `${inicio} - ${fin} de ${this.insumosArray.length}`;
}

  // Obtener los elementos a mostrar en la página actual
  get elementosPagina() {
    const inicio = (this.paginaActual - 1) * this.tamañoPagina;
    const fin = inicio + this.tamañoPagina;
    return this.insumosArray.slice(inicio, fin);
  }

  // Obtener un arreglo de números que representan las páginas disponibles
  get paginas() {
    const totalPaginas = Math.ceil(this.insumosArray.length / this.tamañoPagina);
    return Array(totalPaginas).fill(0).map((_, index) => index + 1);
  }

  // Cambia a la página anterior
  paginaAnterior() {
    if (this.paginaActual > 1) {
      this.paginaActual--;
      this.actualizarElementosVisibles();
    }
  }

  // Cambia a la página siguiente
  paginaSiguiente() {
    if (this.paginaActual < this.paginas.length) {
      this.paginaActual++;
      this.actualizarElementosVisibles();
    }
  }

  // Cambia a una página específica
  cambiarPagina(pagina: number) {
    this.paginaActual = pagina;
    this.actualizarElementosVisibles();
  }


  ngOnInit(): void {
    this.dataService.getInsumos().then((insumosArray: any[]) => {
      this.insumosArray = insumosArray;
      //console.log('Información de insumosArray', this.insumosArray);
      // Escuchar eventos de cambio de ruta
    }).catch((error: any) => {
      console.error('Error al obtener datos de insumo', error);
    })

    // Escuchar eventos de cambio de ruta
    this.router.events.subscribe((event: Event) => {
      if (event instanceof NavigationStart) {
        // Verificar si se está navegando a una de las rutas hijas
        if (event.url.includes('/productos-y-servicios/insumos-para-cafeterias/')) {
          // Ocultar el menú
          this.menuVisible = false;
        } else {
          // Mostrar el menú
          this.menuVisible = true;
        }
      }
    });
  }

  //Limpia las url de las imagenes del insumo
  extractUrlsFromString(input: string): void {
    const cleanedInput = input
      .replace(/\[|\]|'/g, ''); // Elimina '[' ']' y comillas simples

    // Si cleanedInput contiene caracteres después de limpiar, consideramos que es una URL válida
    if (cleanedInput.trim().length > 0) {
      const urls = cleanedInput
        .split(',')
        .map(url => url);
      // console.log(urls);
      // Devuelve la primera URL encontrada (o null si no hay URLs válidas)
      this.extractedUrls = urls.length > 0 ? urls[0] : null;
    } else {
      this.extractedUrls = null; // No hay URLs válidas
    }

  }

  sanitizeUrl(url: string): SafeUrl {
    return this.sanitizer.bypassSecurityTrustUrl(url);
  }

}