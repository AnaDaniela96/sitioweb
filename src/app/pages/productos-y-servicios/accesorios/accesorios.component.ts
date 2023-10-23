import { AfterViewInit, Component, QueryList, ViewChildren, } from '@angular/core';
import { Router } from '@angular/router';
import { DataService } from '../../../utils/data.service';
import { DomSanitizer, SafeUrl } from '@angular/platform-browser';

@Component({
  selector: 'app-accesorios',
  templateUrl: './accesorios.component.html',
  styleUrls: ['./accesorios.component.css']
})
export class AccesoriosComponent implements AfterViewInit {
  // //Manipulación de filtros por categoría
  // categorias = {
  //   metodoGoteo: false,
  //   prensaFrancesa: false,
  //   jarrasEspumadoras: false,
  //   tampers: false,
  //   molinos: false,
  //   catacion: false,
  //   vasos: false,
  //   cafeteria: false,
  //   metodosExtraccion: false,
  //   tesYteteras: false,
  // };

  // subcategorias = {
  //   metodoGoteo: {
  //     filtros: false,
  //     drippers: false,
  //   },

  //   cafeteria: {
  //     especieros: false,
  //     tazasVidrio: false,
  //     bagaceras: false,
  //     sifones: false,
  //     elementosAuxiliares: false,
  //   },

  //   metodosExtraccion: {
  //     filtros: false,
  //     complementosMetodos: false,
  //     limpieza: false,
  //     kitsParaPruebas: false,
  //     jarrasServidoras: false,
  //   }

  // };

  // //Método de goteo
  // drippers: any[] = [];

  constructor(
    private dataService: DataService,
    private sanitizer: DomSanitizer,
    private router: Router,

  ) { }

  accesoriosArray: any[] = [];
  extractedUrls: any;
  mostrarCuadricula: boolean = false;
  elementosVisibles: number = 0;
  paginaActual: number = 1; // Página actual
  tamañoPagina: number = 15; // Tamaño de página

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
    return this.accesoriosArray.slice(inicio, fin);
  }

  // Obtener un arreglo de números que representan las páginas disponibles
  get paginas() {
    const totalPaginas = Math.ceil(this.accesoriosArray.length / this.tamañoPagina);
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
  ngOnInit(): void {
    this.dataService.getAccesorios().then((accesoriosArray: any[]) => {
      this.accesoriosArray = accesoriosArray;
      console.log('Información de accesoriosArray', this.accesoriosArray);

      // //Filtra los drippers y crea un nuevo array.
      // this.drippers = this.accesoriosArray.filter(accesorio =>
      //   this.contienePalabrasDrippers(accesorio.name) &&
      //   accesorio.urlArticleFirst && accesorio.urlArticleFirst.trim() !== ''
      // );

      console.log(this.accesoriosArray);

    }).catch((error: any) => {
      console.error('Error al obtener datos de accesorios', error);
    })
  }

  //Limpia las url de las imagenes del accesorio
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

  // //Mostrar accesorios
  // contienePalabrasDrippers(nombre: string): boolean {
  //   const palabrasClave = ['DRIPPER',];
  //   return palabrasClave.every(palabra => nombre.toUpperCase().includes(palabra));
  // }
}

