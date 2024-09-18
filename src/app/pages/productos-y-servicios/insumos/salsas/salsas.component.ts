import { Component, AfterViewInit, QueryList, ViewChildren } from '@angular/core';
import { DataService } from '../../../../utils/data.service';
import { DomSanitizer, SafeUrl } from '@angular/platform-browser';

@Component({
  selector: 'app-salsas',
  templateUrl: './salsas.component.html',
  styleUrls: ['./salsas.component.css']
})
export class SalsasComponent {

  constructor(
    private dataService: DataService,
    private sanitizer: DomSanitizer,
  ) { }

  insumosArray: any[] = [];
  extractedUrls: any;

  mostrarCuadricula: boolean = false;
  elementosVisibles: number = 0;

  //Menu
  hidesSalsasTorani: boolean = true;
  hidesSalsasHollander: boolean = true;

  //Salsas Torani
  salsasTorani: any[] = [];
  paginaActualTorani: number = 1;
  tamañoPaginaTorani: number = 5;

  //Salsas Hollander
  salsasHollander: any[] = [];
  paginaActualHollander: number = 1;
  tamañoPaginaHollander: number = 5;

  @ViewChildren('tarjeta')
  tarjetas!: QueryList<any>;

  ngAfterViewInit() {
    this.elementosVisibles = this.tarjetas.length;
  }

  // Obtener los elementos de la página actual para Torani
  get elementosPaginaTorani() {
    const inicio = (this.paginaActualTorani - 1) * this.tamañoPaginaTorani;
    const fin = inicio + this.tamañoPaginaTorani;
    return this.salsasTorani.slice(inicio, fin);
  }

  // Obtener las páginas para Torani
  get paginasTorani() {
    const totalPaginas = Math.ceil(this.salsasTorani.length / this.tamañoPaginaTorani);
    return Array(totalPaginas).fill(0).map((_, index) => index + 1);
  }

  // Cambiar página para Torani
  paginaAnteriorTorani() {
    if (this.paginaActualTorani > 1) {
      this.paginaActualTorani--;
    }
  }

  paginaSiguienteTorani() {
    if (this.paginaActualTorani < this.paginasTorani.length) {
      this.paginaActualTorani++;
    }
  }

  // Obtener los elementos de la página actual para Hollander
  get elementosPaginaHollander() {
    const inicio = (this.paginaActualHollander - 1) * this.tamañoPaginaHollander;
    const fin = inicio + this.tamañoPaginaTorani;
    return this.salsasHollander.slice(inicio, fin);
  }

  // Obtener las páginas para Hollander
  get paginasHollander() {
    const totalPaginas = Math.ceil(this.salsasHollander.length / this.tamañoPaginaHollander);
    return Array(totalPaginas).fill(0).map((_, index) => index + 1);
  }

  // Cambiar página para Torani
  paginaAnteriorHollander() {
    if (this.paginaActualHollander > 1) {
      this.paginaActualHollander--;
    }
  }

  paginaSiguienteHollander() {
    if (this.paginaActualHollander < this.paginasHollander.length) {
      this.paginaActualHollander++;
    }
  }

  ngOnInit(): void {
    this.dataService.getInsumos().then((insumosArray: any[]) => {
      this.insumosArray = insumosArray;
      //console.log('Información de insumosArray', this.insumosArray);

      //Filtra las salsas Torani y crea un nuevo array.
      this.salsasTorani = this.insumosArray.filter(insumo =>
        this.contienePalabrasToraniSalsa(insumo.name) &&
        insumo.urlArticleFirst && insumo.urlArticleFirst.trim() !== ''
      );

      //Filtra las salsas Hollander y crea un nuevo array.
      this.salsasHollander = this.insumosArray.filter(insumo =>
        this.contienePalabrasSalsaHollander(insumo.name) &&
        insumo.urlArticleFirst && insumo.urlArticleFirst.trim() !== ''
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

  contienePalabrasToraniSalsa(nombre: string): boolean {
    const palabrasClave = ['TORANI', 'SALSA'];

    // Convierte el nombre a mayúsculas para hacer la coincidencia sin distinción de mayúsculas y minúsculas
    const nombreEnMayusculas = nombre.toUpperCase();

    // Verifica que todas las palabras clave estén presentes y que ninguna palabra excluida esté presente
    const cumpleCondicion = palabrasClave.every(palabra => nombreEnMayusculas.includes(palabra));

    //console.log(nombre, cumpleCondicion); // Verifica los resultados en la consola
    return cumpleCondicion;
  }

  contienePalabrasSalsaHollander(nombre: string): boolean {
    const palabrasClave = ['HOLLANDER', 'SALSA'];

    // Convierte el nombre a mayúsculas para hacer la coincidencia sin distinción de mayúsculas y minúsculas
    const nombreEnMayusculas = nombre.toUpperCase();

    // Verifica que todas las palabras clave estén presentes y que ninguna palabra excluida esté presente
    const cumpleCondicion = palabrasClave.every(palabra => nombreEnMayusculas.includes(palabra));

    //console.log(nombre, cumpleCondicion); // Verifica los resultados en la consola
    return cumpleCondicion;
  }

}
