import { Component, AfterViewInit, QueryList, ViewChildren } from '@angular/core';
import { DataService } from '../../../../utils/data.service';
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

  // Menu
  hidesFiorenzato: boolean = true;
  hidesCeado: boolean = true;
  hidesEureka: boolean = true;
  hidesAnfim: boolean = true;
  hidesBaratza: boolean = true;

  mostrarCuadricula: boolean = false;
  elementosVisibles: number = 0;

  // Datos para molinos Fiorenzato
  molinosFiorenzato: any[] = [];
  paginaActualFiorenzato: number = 1;
  tamañoPaginaFiorenzato: number = 5;

  // Datos para molinos Ceado
  molinosCeado: any[] = [];
  paginaActualCeado: number = 1;
  tamañoPaginaCeado: number = 5;

  // Datos para molinos Eureka
  molinosEureka: any[] = [];
  paginaActualEureka: number = 1;
  tamañoPaginaEureka: number = 5;

  @ViewChildren('tarjeta')
  tarjetas!: QueryList<any>;

  ngAfterViewInit() {
    // Contar elementos visibles
    this.elementosVisibles = this.tarjetas.length;
  }

  // Obtener los elementos de la página actual para Fiorenzato
  get elementosPaginaFiorenzato() {
    const inicio = (this.paginaActualFiorenzato - 1) * this.tamañoPaginaFiorenzato;
    const fin = inicio + this.tamañoPaginaFiorenzato;
    return this.molinosFiorenzato.slice(inicio, fin);
  }

  // Obtener las páginas para Fiorenzato
  get paginasFiorenzato() {
    const totalPaginas = Math.ceil(this.molinosFiorenzato.length / this.tamañoPaginaFiorenzato);
    return Array(totalPaginas).fill(0).map((_, index) => index + 1);
  }

  // Cambiar página para Fiorenzato
  paginaAnteriorFiorenzato() {
    if (this.paginaActualFiorenzato > 1) {
      this.paginaActualFiorenzato--;
    }
  }

  paginaSiguienteFiorenzato() {
    if (this.paginaActualFiorenzato < this.paginasFiorenzato.length) {
      this.paginaActualFiorenzato++;
    }
  }

   // Obtener los elementos de la página actual para Ceado
   get elementosPaginaCeado() {
    const inicio = (this.paginaActualCeado - 1) * this.tamañoPaginaCeado;
    const fin = inicio + this.tamañoPaginaCeado;
    return this.molinosCeado.slice(inicio, fin);
  }

  // Obtener las páginas para Ceado
  get paginasCeado() {
    const totalPaginas = Math.ceil(this.molinosCeado.length / this.tamañoPaginaCeado);
    return Array(totalPaginas).fill(0).map((_, index) => index + 1);
  }

  // Cambiar página para Ceado
  paginaAnteriorCeado() {
    if (this.paginaActualCeado > 1) {
      this.paginaActualCeado--;
    }
  }

  paginaSiguienteCeado() {
    if (this.paginaActualCeado < this.paginasCeado.length) {
      this.paginaActualCeado++;
    }
  }

  // Obtener los elementos de la página actual para Eureka
  get elementosPaginaEureka() {
    const inicio = (this.paginaActualEureka - 1) * this.tamañoPaginaEureka;
    const fin = inicio + this.tamañoPaginaEureka;
    return this.molinosEureka.slice(inicio, fin);
  }

  // Obtener las páginas para Eureka
  get paginasEureka() {
    const totalPaginas = Math.ceil(this.molinosEureka.length / this.tamañoPaginaEureka);
    return Array(totalPaginas).fill(0).map((_, index) => index + 1);
  }

  // Cambiar página para Eureka
  paginaAnteriorEureka() {
    if (this.paginaActualEureka > 1) {
      this.paginaActualEureka--;
    }
  }

  paginaSiguienteEureka() {
    if (this.paginaActualEureka < this.paginasEureka.length) {
      this.paginaActualEureka++;
    }
  }


  ngOnInit(): void {
    this.dataService.getMaquinaria().then((maquinasArray: any[]) => {
      this.maquinasArray = maquinasArray;
      //console.log(this.maquinasArray);

      //Filtrar los molinos Fiorenzato
      this.molinosFiorenzato = this.maquinasArray.filter(maquina =>
        this.contienePalabraMolinoFiorenzato(maquina.name) &&
        maquina.urlArticleFirst && maquina.urlArticleFirst.trim() !== ''
      );

      //Filtrar los molinos Ceado
      this.molinosCeado = this.maquinasArray.filter(maquina =>
        this.contienePalabraMolinoCeado(maquina.name) 
        //&&
        // maquina.urlArticleFirst && maquina.urlArticleFirst.trim() !== ''
      );

      //Filtrar los molinos EUREKA
      this.molinosEureka = this.maquinasArray.filter(maquina =>
        this.contienePalabraMolinoEUREKA(maquina.name) &&
        maquina.urlArticleFirst && maquina.urlArticleFirst.trim() !== ''
      );
      
      //console.log(this.molinosCeado);
    }).catch((error: any) => {
      console.error('Error al obtener datos de insumo', error);
    })
  }

  //Limpia las url de las imagenes del producto
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

  contienePalabraMolinoFiorenzato(nombre: string): boolean {
    const palabrasClave = ['MOLINO', 'FIORENZATO'];
    const cumpleCondicion = palabrasClave.every(palabra => nombre.toUpperCase().includes(palabra));
    console.log(nombre, cumpleCondicion); // Verifica los resultados en la consola
    return cumpleCondicion;
  }

  contienePalabraMolinoCeado(nombre: string): boolean {
    const palabrasClave = ['MOLINO', 'CEADO'];
    const cumpleCondicion = palabrasClave.every(palabra => nombre.toUpperCase().includes(palabra));
    console.log(nombre, cumpleCondicion); // Verifica los resultados en la consola
    return cumpleCondicion;
  }

  contienePalabraMolinoEUREKA(nombre: string): boolean {
    const palabrasClave = ['MOLINO', 'EUREKA'];
    const cumpleCondicion = palabrasClave.every(palabra => nombre.toUpperCase().includes(palabra));
    console.log(nombre, cumpleCondicion); // Verifica los resultados en la consola
    return cumpleCondicion;
  }

}
