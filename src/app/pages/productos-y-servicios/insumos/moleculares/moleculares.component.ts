import { Component, AfterViewInit, QueryList, ViewChildren } from '@angular/core';
import { DataService } from '../../../../utils/data.service';
import { DomSanitizer, SafeUrl } from '@angular/platform-browser';

@Component({
  selector: 'app-moleculares',
  templateUrl: './moleculares.component.html',
  styleUrls: ['./moleculares.component.css']
})
export class MolecularesComponent {

  constructor(
    private dataService: DataService,
    private sanitizer: DomSanitizer,
  ) { }

  insumosArray: any[] = [];
  extractedUrls: any;

  //Menu
  hideChillOutPearls: boolean = true;
  hidesTeaZonePerlas: boolean = true;
  hidesChillOutJelly: boolean = true;
  hidesTeaZoneJelly: boolean = true;
  hidesChillOutTapioca: boolean = true;
  hidesTeaZoneTapioca: boolean = true;

  mostrarCuadricula: boolean = false;
  elementosVisibles: number = 0;

  //chillOut Pearls
  chillOutPearls: any[] = [];
  paginaActualChillOutPearls: number = 1;
  tamañoPaginaChillOutPearls: number = 5;

  //Tea Zone Pearls
  teaZonePerlas: any[] = [];
  paginaActualteaZonePerlas: number = 1;
  tamañoPaginateaZonePerlas: number = 5;

  //chillOutJelly
  chillOutJelly: any[] = [];
  paginaActualChillOutJelly: number = 1;
  tamañoPaginaChillOutJelly: number = 5;

  //teaZone Jelly
  teaZoneJelly: any[] = [];
  paginaActualTeaZoneJelly: number = 1;
  tamañoPaginaTeaZoneJelly: number = 5;

  //ChillOut Tapioca
  chillOutTapioca: any[] = [];
  paginaActualchillOutTapioca: number = 1;
  tamañoPaginachillOutTapioca: number = 5;

  //TeaZoneTapioca
  teaZoneTapioca: any[] = [];
  paginaActualTeaZoneTapioca: number = 1;
  tamañoPaginaTeaZoneTapioca: number = 5;

  @ViewChildren('tarjeta')
  tarjetas!: QueryList<any>;

  ngAfterViewInit() {
    this.elementosVisibles = this.tarjetas.length;
  }

  // Obtener los elementos de la página actual para ChillOutPearls
  get elementosPaginaChillOutPearls() {
    const inicio = (this.paginaActualChillOutPearls - 1) * this.tamañoPaginaChillOutPearls;
    const fin = inicio + this.tamañoPaginaChillOutPearls;
    return this.chillOutPearls.slice(inicio, fin);
  }

  // Obtener las páginas ChillOutPearls
  get paginasChillOutPearls() {
    const totalPaginas = Math.ceil(this.chillOutPearls.length / this.tamañoPaginaChillOutPearls);
    return Array(totalPaginas).fill(0).map((_, index) => index + 1);
  }

  // Cambiar página para ChillOutPearls
  paginaAnteriorChillOutPearls() {
    if (this.paginaActualChillOutPearls > 1) {
      this.paginaActualChillOutPearls--;
    }
  }

  paginaSiguienteChillOutPearls() {
    if (this.paginaActualChillOutPearls < this.paginasChillOutPearls.length) {
      this.paginaActualChillOutPearls++;
    }
  }

  // Obtener los elementos de la página actual para teaZonePerlas
  get elementosPaginaTeaZonePerlas() {
    const inicio = (this.paginaActualteaZonePerlas - 1) * this.tamañoPaginateaZonePerlas;
    const fin = inicio + this.tamañoPaginateaZonePerlas;
    return this.teaZonePerlas.slice(inicio, fin);
  }

  // Obtener las páginas Tea Zone Pearls
  get paginasTeaZonePerlas() {
    const totalPaginas = Math.ceil(this.teaZonePerlas.length / this.tamañoPaginateaZonePerlas);
    return Array(totalPaginas).fill(0).map((_, index) => index + 1);
  }

  // Cambiar página para Tea Zone Pearls
  paginaAnteriorTeaZonePerlas() {
    if (this.paginaActualteaZonePerlas > 1) {
      this.paginaActualteaZonePerlas--;
    }
  }

  paginaSiguienteTeaZonePerlas() {
    if (this.paginaActualteaZonePerlas < this.paginasChillOutPearls.length) {
      this.paginaActualteaZonePerlas++;
    }
  }

  // Obtener los elementos de la página actual para chillOutJelly
  get elementosPaginaChillOutJelly() {
    const inicio = (this.paginaActualChillOutJelly - 1) * this.tamañoPaginaChillOutJelly;
    const fin = inicio + this.tamañoPaginaChillOutJelly;
    return this.chillOutJelly.slice(inicio, fin);
  }

  // Obtener las páginas chillOutJelly
  get paginasChillOutJelly() {
    const totalPaginas = Math.ceil(this.chillOutJelly.length / this.tamañoPaginaChillOutJelly);
    return Array(totalPaginas).fill(0).map((_, index) => index + 1);
  }

  // Cambiar página para chillOutJelly
  paginaAnteriorChillOutJelly() {
    if (this.paginaActualChillOutJelly > 1) {
      this.paginaActualChillOutJelly--;
    }
  }

  paginaSiguienteChillOutJelly() {
    if (this.paginaActualChillOutJelly < this.paginasChillOutPearls.length) {
      this.paginaActualChillOutJelly++;
    }
  }

  // Obtener los elementos de la página actual para teaZone Jelly
  get elementosPaginaTeaZoneJelly() {
    const inicio = (this.paginaActualTeaZoneJelly - 1) * this.tamañoPaginaTeaZoneJelly;
    const fin = inicio + this.tamañoPaginaTeaZoneJelly;
    return this.teaZoneJelly.slice(inicio, fin);
  }

  // Obtener las páginas teaZone Jelly
  get paginasTeaZoneJelly() {
    const totalPaginas = Math.ceil(this.teaZoneJelly.length / this.tamañoPaginaTeaZoneJelly);
    return Array(totalPaginas).fill(0).map((_, index) => index + 1);
  }

  // Cambiar página para teaZone Jelly
  paginaAnteriorTeaZoneJelly() {
    if (this.paginaActualTeaZoneJelly > 1) {
      this.paginaActualTeaZoneJelly--;
    }
  }

  paginaSiguienteTeaZoneJelly() {
    if (this.paginaActualTeaZoneJelly < this.paginasChillOutPearls.length) {
      this.paginaActualTeaZoneJelly++;
    }
  }

  // Obtener los elementos de la página actual para ChillOut Tapioca
  get elementosPaginaChillOutTapioca() {
    const inicio = (this.paginaActualchillOutTapioca - 1) * this.tamañoPaginachillOutTapioca;
    const fin = inicio + this.tamañoPaginachillOutTapioca;
    return this.chillOutTapioca.slice(inicio, fin);
  }

  // Obtener las páginas ChillOut Tapioca
  get paginasChillOutTapioca() {
    const totalPaginas = Math.ceil(this.chillOutTapioca.length / this.tamañoPaginachillOutTapioca);
    return Array(totalPaginas).fill(0).map((_, index) => index + 1);
  }

  // Cambiar página para ChillOut Tapioca
  paginaAnteriorChillOutTapioca() {
    if (this.paginaActualchillOutTapioca > 1) {
      this.paginaActualchillOutTapioca--;
    }
  }

  paginaSiguienteChillOutTapioca() {
    if (this.paginaActualchillOutTapioca < this.paginasChillOutTapioca.length) {
      this.paginaActualchillOutTapioca++;
    }
  }

  // Obtener los elementos de la página actual para teaZone Tapioca
  get elementosPaginaTeaZoneTapioca() {
    const inicio = (this.paginaActualTeaZoneTapioca - 1) * this.tamañoPaginaTeaZoneTapioca;
    const fin = inicio + this.tamañoPaginaTeaZoneTapioca;
    return this.teaZoneTapioca.slice(inicio, fin);
  }

  // Obtener las páginas teaZone Tapioca
  get paginasTeaZoneTapioca() {
    const totalPaginas = Math.ceil(this.teaZoneTapioca.length / this.tamañoPaginaTeaZoneTapioca);
    return Array(totalPaginas).fill(0).map((_, index) => index + 1);
  }

  // Cambiar página para teaZone Tapioca
  paginaAnteriorTeaZoneTapioca() {
    if (this.paginaActualTeaZoneTapioca > 1) {
      this.paginaActualTeaZoneTapioca--;
    }
  }

  paginaSiguienteTeaZoneTapioca() {
    if (this.paginaActualTeaZoneTapioca < this.paginasTeaZoneTapioca.length) {
      this.paginaActualTeaZoneTapioca++;
    }
  }

  ngOnInit(): void {
    this.dataService.getInsumos().then((insumosArray: any[]) => {
      this.insumosArray = insumosArray;
      console.log('Información de insumosArray', this.insumosArray);

      // Filtra los chillOut Pearls y crea un nuevo array
      this.chillOutPearls = this.insumosArray.filter(insumo =>
        this.contienePalabrasChillOutPearls(insumo.name) &&
        insumo.urlArticleFirst && insumo.urlArticleFirst.trim() !== ''
      );

      // Filtra los TeaZone Perlas crea un nuevo array
      this.teaZonePerlas = this.insumosArray.filter(insumo =>
        this.contienePalabrasTeaZonePerlas(insumo.name) &&
        insumo.urlArticleFirst && insumo.urlArticleFirst.trim() !== ''
      );

      // Filtra los Jellys ChillOut y crea un nuevo array
      this.chillOutJelly = this.insumosArray.filter(insumo =>
        this.contienePalabrasChillOutJelly(insumo.name) &&
        insumo.urlArticleFirst && insumo.urlArticleFirst.trim() !== ''
      );

      // Filtra los Jellys Tea Zone y crea un nuevo array
      this.teaZoneJelly = this.insumosArray.filter(insumo =>
        this.contienePalabrasTeaZoneJelly(insumo.name) &&
        insumo.urlArticleFirst && insumo.urlArticleFirst.trim() !== ''
      );

      // Filtra las Tapiocas Chillout y crea un nuevo array
      this.chillOutTapioca = this.insumosArray.filter(insumo =>
        this.contienePalabrasChillOutTapioca(insumo.name) &&
        insumo.urlArticleFirst && insumo.urlArticleFirst.trim() !== ''
      );

      // Filtra las Tapiocas Chillout y crea un nuevo array
      this.teaZoneTapioca = this.insumosArray.filter(insumo =>
        this.contienePalabrasTeaZoneTapioca(insumo.name) &&
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
      this.extractedUrls = urls.length > 0 ? urls[0] + '?v=1' : null;
    } else {
      this.extractedUrls = null; // No hay URLs válidas
    }

  }

  sanitizeUrl(url: string): SafeUrl {
    return this.sanitizer.bypassSecurityTrustUrl(url);
  }

  contienePalabrasChillOutPearls(nombre: string): boolean {
    const palabrasClave = ['CHILLOUT', 'PEARL',];

    // Palabras a excluir
    const palabrasExcluidas = ['JAM', 'JARABE', 'TAPIOCA'];

    // Convierte el nombre a mayúsculas para hacer la coincidencia sin distinción de mayúsculas y minúsculas
    const nombreEnMayusculas = nombre.toUpperCase();

    // Verifica que todas las palabras clave estén presentes y que ninguna palabra excluida esté presente
    const cumpleCondicion = palabrasClave.every(palabra => nombreEnMayusculas.includes(palabra))
      && !palabrasExcluidas.some(excluida => nombreEnMayusculas.includes(excluida));

    //console.log(nombre, cumpleCondicion); // Verifica los resultados en la consola
    return cumpleCondicion;
  }

  contienePalabrasTeaZonePerlas(nombre: string): boolean {
    const palabrasClave = ['TEA', 'ZONE', 'PERLAS'];

    // Palabras a excluir
    const palabrasExcluidas = ['CONCENTRADO', 'TAPIOCA',];

    // Convierte el nombre a mayúsculas para hacer la coincidencia sin distinción de mayúsculas y minúsculas
    const nombreEnMayusculas = nombre.toUpperCase();

    // Verifica que todas las palabras clave estén presentes y que ninguna palabra excluida esté presente
    const cumpleCondicion = palabrasClave.every(palabra => nombreEnMayusculas.includes(palabra))
      && !palabrasExcluidas.some(excluida => nombreEnMayusculas.includes(excluida));

    //console.log(nombre, cumpleCondicion); // Verifica los resultados en la consola
    return cumpleCondicion;
  }

  contienePalabrasChillOutJelly(nombre: string): boolean {
    const palabrasClave = ['CHILLOUT', 'JELLY'];

    // Palabras a excluir
    const palabrasExcluidas = ['CONCENTRADO', 'TAPIOCA', 'JARABE'];

    // Convierte el nombre a mayúsculas para hacer la coincidencia sin distinción de mayúsculas y minúsculas
    const nombreEnMayusculas = nombre.toUpperCase();

    // Verifica que todas las palabras clave estén presentes y que ninguna palabra excluida esté presente
    const cumpleCondicion = palabrasClave.every(palabra => nombreEnMayusculas.includes(palabra))
      && !palabrasExcluidas.some(excluida => nombreEnMayusculas.includes(excluida));

    //console.log(nombre, cumpleCondicion); // Verifica los resultados en la consola
    return cumpleCondicion;
  }

  contienePalabrasTeaZoneJelly(nombre: string): boolean {
    const palabrasClave = ['TEA', 'ZONE', 'JELLY'];

    // Palabras a excluir
    const palabrasExcluidas = ['PERLAS', 'CONCENTRADO',];

    // Convierte el nombre a mayúsculas para hacer la coincidencia sin distinción de mayúsculas y minúsculas
    const nombreEnMayusculas = nombre.toUpperCase();

    // Verifica que todas las palabras clave estén presentes y que ninguna palabra excluida esté presente
    const cumpleCondicion = palabrasClave.every(palabra => nombreEnMayusculas.includes(palabra))
      && !palabrasExcluidas.some(excluida => nombreEnMayusculas.includes(excluida));

    //console.log(nombre, cumpleCondicion); // Verifica los resultados en la consola
    return cumpleCondicion;
  }

  contienePalabrasChillOutTapioca(nombre: string): boolean {
    const palabrasClave = ['TAPIOCA',];

    // Palabras a excluir
    const palabrasExcluidas = ['JELLY', 'TEA', 'ZONE'];

    // Convierte el nombre a mayúsculas para hacer la coincidencia sin distinción de mayúsculas y minúsculas
    const nombreEnMayusculas = nombre.toUpperCase();

    // Verifica que todas las palabras clave estén presentes y que ninguna palabra excluida esté presente
    const cumpleCondicion = palabrasClave.every(palabra => nombreEnMayusculas.includes(palabra))
      && !palabrasExcluidas.some(excluida => nombreEnMayusculas.includes(excluida));

    //console.log(nombre, cumpleCondicion); // Verifica los resultados en la consola
    return cumpleCondicion;
  }

  contienePalabrasTeaZoneTapioca(nombre: string): boolean {
    const palabrasClave = ['TAPIOCA', 'ZONE', 'TEA',];

    // Palabras a excluir
    const palabrasExcluidas = ['CHILOUT', 'CHILLOUT',];

    // Convierte el nombre a mayúsculas para hacer la coincidencia sin distinción de mayúsculas y minúsculas
    const nombreEnMayusculas = nombre.toUpperCase();

    // Verifica que todas las palabras clave estén presentes y que ninguna palabra excluida esté presente
    const cumpleCondicion = palabrasClave.every(palabra => nombreEnMayusculas.includes(palabra))
      && !palabrasExcluidas.some(excluida => nombreEnMayusculas.includes(excluida));

    //console.log(nombre, cumpleCondicion); // Verifica los resultados en la consola
    return cumpleCondicion;
  }

}
