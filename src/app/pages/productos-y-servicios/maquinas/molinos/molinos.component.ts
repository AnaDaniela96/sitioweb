import { Component, ElementRef, AfterViewInit, ViewChildren, QueryList } from '@angular/core';
import { DataService } from 'src/app/utils/data.service';
import { DomSanitizer, SafeUrl } from '@angular/platform-browser';

@Component({
  selector: 'app-molinos',
  templateUrl: './molinos.component.html',
  styleUrls: ['./molinos.component.css']
})
export class MolinosComponent {

  constructor(
    private dataService: DataService,
    private sanitizer: DomSanitizer,
  ) { }

  maquinasArray: any[] = [];
  extractedUrls: any;

  molinos: any [] = [];

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
     return this.molinos.slice(inicio, fin);
   }
 
   // Obtener un arreglo de números que representan las páginas disponibles
   get paginas() {
     const totalPaginas = Math.ceil(this.molinos.length / this.tamañoPagina);
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
    this.dataService.getMaquinaria().then((maquinasArray: any[]) => {
      this.maquinasArray = maquinasArray;
      //console.log(this.maquinasArray);

      //Filtrar los molinos
      this.molinos = this.maquinasArray.filter(maquina =>
        this.contienePalabraMolino(maquina.name) &&
        maquina.urlArticleFirst && maquina.urlArticleFirst.trim() !== ''
      );

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

  contienePalabraMolino(nombre: string): boolean {
    const palabrasClave = ['MOLINO'];
    const cumpleCondicion = palabrasClave.every(palabra => nombre.toUpperCase().includes(palabra));
    console.log(nombre, cumpleCondicion); // Verifica los resultados en la consola
    return cumpleCondicion;
  }

}
