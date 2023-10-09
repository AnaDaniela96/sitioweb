import { Component, ElementRef, AfterViewInit, ViewChildren, QueryList } from '@angular/core';
import { Router } from '@angular/router';
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
  elementosVisibles: number = 0;
  paginaActual: number = 1; // Página actual
  tamañoPagina: number = 15; // Tamaño de página
  showTodosLosInsumos: boolean = true;

  // Obtener las tarjetas (cards) de la vista
  @ViewChildren('tarjeta')
  tarjetas!: QueryList<any>;

  ngAfterViewInit() {
    // Contar elementos visibles
    this.elementosVisibles = this.tarjetas.length;
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
    }
  }

  // Cambia a la página siguiente
  paginaSiguiente() {
    if (this.paginaActual < this.paginas.length) {
      this.paginaActual++;
    }
  }

  // Cambia a una página específica
  cambiarPagina(pagina: number) {
    this.paginaActual = pagina;
  }

  //Manipulación de menú
  toggleShowInsumos() {
    this.showTodosLosInsumos = !this.showTodosLosInsumos; // Invertir el valor
  }


  ngOnInit(): void {
    this.dataService.getInsumos().then((insumosArray: any[]) => {
      this.actualizarClaseDelDiv();
      this.insumosArray = insumosArray;
      console.log('Información de insumosArray', this.insumosArray);

    }).catch((error: any) => {
      console.error('Error al obtener datos de insumo', error);
    })

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

  //Iniciar con el div de todos los insumos

  actualizarClaseDelDiv() {
    // Obtiene la ruta actual
    const rutaActual = this.router.url;
    // Selecciona el div que quieres modificar por su ID o como sea adecuado
    const divAActualizar = document.getElementById('divTodosLosInsumos');

    // Comprueba si la ruta coincide con la ruta deseada
    if (rutaActual === '/productos-y-servicios/insumos-para-cafeterias') {
      // Si coincide, quita la clase "d-none"
      divAActualizar?.classList.remove('d-none');
    } else {
      // Si no coincide, agrega la clase "d-none"
      divAActualizar?.classList.add('d-none');
    }

  }
}