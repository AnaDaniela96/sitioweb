import { Component, AfterViewInit, QueryList, ViewChildren } from '@angular/core';
import { DataService } from '../../../../utils/data.service';
import { DomSanitizer, SafeUrl } from '@angular/platform-browser';


@Component({
  selector: 'app-jarabes',
  templateUrl: './jarabes.component.html',
  styleUrls: ['./jarabes.component.css']
})
export class JarabesComponent {

  constructor(
    private dataService: DataService,
    private sanitizer: DomSanitizer,
  ) { }

  insumosArray: any[] = [];
  extractedUrls: any;

  //Menu
  hidesJarabesChillOut: boolean = true;
  hidesJarabesClasicoTorani: boolean = true;
  hidesJarabePuremade: boolean = false;
  hidesJarabeSugarFree: boolean = false;
  hidesNdulce: boolean = true;
  hidesZeroSugarTorani: boolean = false;

  mostrarCuadricula: boolean = false;
  elementosVisibles: number = 0;

  //Datos para Jarabes ChillOut
  jarabesChillOut: any[] = [];
  paginaActualJarabesChillOut: number = 1;
  tamañoPaginaJarabesChillOut: number = 5;

  //Datos para Jarabes ToraniClasico
  jarabesToraniClasico: any[] = [];
  paginaActualToraniClasico: number = 1;
  tamañoPaginaToraniClasico: number = 5;

  //Datos para Jarabes PuremadeTorani
  jarabesPuremadeTorani: any[] = [];
  paginaActualPuremadeTorani: number = 1;
  tamañoPaginaPuremadeTorani: number = 5;

  //Datos para Jarabes SugarFree
  jarabesSugarFree: any[] = [];
  paginaActualSugarFree: number = 1;
  tamañoPaginaSugarFree: number = 5;

   //Datos para Jarabes ZeroSugar
   jarabesZeroSugar: any[] = [];
   paginaActualZeroSugar: number = 1;
   tamañoPaginaZeroSugar: number = 5;

  //Datos para Jarabes N'dulce
  jarabesNdulce: any[] = [];
  paginaActualjarabesNdulce: number = 1;
  tamañoPaginajarabesNdulce: number = 5;


  @ViewChildren('tarjeta')
  tarjetas!: QueryList<any>;

  ngAfterViewInit() {
    this.elementosVisibles = this.tarjetas.length;
  }

  // Obtener los elementos de la página actual para Jarabes N'dulce
  get elementosPaginaJarabesNdulce() {
    const inicio = (this.paginaActualjarabesNdulce - 1) * this.tamañoPaginajarabesNdulce;
    const fin = inicio + this.tamañoPaginajarabesNdulce;
    return this.jarabesNdulce.slice(inicio, fin);
  }

  // Obtener las páginas para Jarabes N'dulce
  get paginasJarabesNdulce() {
    const totalPaginas = Math.ceil(this.jarabesNdulce.length / this.tamañoPaginajarabesNdulce);
    return Array(totalPaginas).fill(0).map((_, index) => index + 1);
  }

  // Cambiar página para Jarabes N'dulce
  paginaAnteriorJarabesNdulce() {
    if (this.paginaActualjarabesNdulce > 1) {
      this.paginaActualjarabesNdulce--;
    }
  }

  paginaSiguienteJarabesNdulce() {
    if (this.paginaActualjarabesNdulce < this.paginasJarabesNdulce.length) {
      this.paginaActualjarabesNdulce++;
    }
  }

  // Obtener los elementos de la página actual para Jarabes Torani ZeroSugar
  get elementosPaginaJarabesZeroSugarTorani() {
    const inicio = (this.paginaActualZeroSugar - 1) * this.tamañoPaginaZeroSugar;
    const fin = inicio + this.tamañoPaginajarabesNdulce;
    return this.jarabesZeroSugar.slice(inicio, fin);
  }

  // Obtener las páginas para JarabesZeroSugarTorani
  get paginasJarabesZeroSugarTorani() {
    const totalPaginas = Math.ceil(this.jarabesZeroSugar.length / this.tamañoPaginaZeroSugar);
    return Array(totalPaginas).fill(0).map((_, index) => index + 1);
  }

  // Cambiar página para JarabesZeroSugarTorani
  paginaAnteriorJarabesZeroSugarTorani() {
    if (this.paginaActualZeroSugar > 1) {
      this.paginaActualZeroSugar--;
    }
  }

  paginaSiguienteJarabesZeroSugarTorani() {
    if (this.paginaActualZeroSugar < this.paginasJarabesZeroSugarTorani.length) {
      this.paginaActualZeroSugar++;
    }
  }

  // Obtener los elementos de la página actual para Torani SugarFree
  get elementosPaginaSugarFreeTorani() {
    const inicio = (this.paginaActualSugarFree - 1) * this.tamañoPaginaSugarFree;
    const fin = inicio + this.tamañoPaginaSugarFree;
    return this.jarabesSugarFree.slice(inicio, fin);
  }

  // Obtener las páginas para Torani SugarFree
  get paginasToraniSugarFreeTorani() {
    const totalPaginas = Math.ceil(this.jarabesSugarFree.length / this.tamañoPaginaSugarFree);
    return Array(totalPaginas).fill(0).map((_, index) => index + 1);
  }

  // Cambiar página para Torani SugarFree
  paginaAnteriorSugarFreeTorani() {
    if (this.paginaActualSugarFree > 1) {
      this.paginaActualSugarFree--;
    }
  }

  paginaSiguienteSugarFreeTorani() {
    if (this.paginaActualSugarFree < this.paginasToraniSugarFreeTorani.length) {
      this.paginaActualSugarFree++;
    }
  }

  // Obtener los elementos de la página actual para Torani Puremade
  get elementosPaginaPuremadeTorani() {
    const inicio = (this.paginaActualPuremadeTorani - 1) * this.tamañoPaginaPuremadeTorani;
    const fin = inicio + this.tamañoPaginaToraniClasico;
    return this.jarabesPuremadeTorani.slice(inicio, fin);
  }

  // Obtener las páginas para Torani Puremade
  get paginasToraniPuremadeTorani() {
    const totalPaginas = Math.ceil(this.jarabesPuremadeTorani.length / this.tamañoPaginaPuremadeTorani);
    return Array(totalPaginas).fill(0).map((_, index) => index + 1);
  }

  // Cambiar página para Torani Puremade
  paginaAnteriorPuremadeTorani() {
    if (this.paginaActualPuremadeTorani > 1) {
      this.paginaActualPuremadeTorani--;
    }
  }

  paginaSiguientePuremadeTorani() {
    if (this.paginaActualPuremadeTorani < this.paginasToraniPuremadeTorani.length) {
      this.paginaActualPuremadeTorani++;
    }
  }

  // Obtener los elementos de la página actual para Torani Clasico
  get elementosPaginaToraniClasico() {
    const inicio = (this.paginaActualToraniClasico - 1) * this.tamañoPaginaToraniClasico;
    const fin = inicio + this.tamañoPaginaToraniClasico;
    return this.jarabesToraniClasico.slice(inicio, fin);
  }

  // Obtener las páginas para Torani Clasico
  get paginasToraniClasico() {
    const totalPaginas = Math.ceil(this.jarabesToraniClasico.length / this.tamañoPaginaToraniClasico);
    return Array(totalPaginas).fill(0).map((_, index) => index + 1);
  }

  // Cambiar página para Torani Clasico
  paginaAnteriorToraniClasico() {
    if (this.paginaActualToraniClasico > 1) {
      this.paginaActualToraniClasico--;
    }
  }

  paginaSiguienteToraniClasico() {
    if (this.paginaActualToraniClasico < this.paginasToraniClasico.length) {
      this.paginaActualToraniClasico++;
    }
  }

  // Obtener los elementos de la página actual para ChillOut Jarabes
  get elementosPaginaJarabesChillOut() {
    const inicio = (this.paginaActualJarabesChillOut - 1) * this.tamañoPaginaJarabesChillOut;
    const fin = inicio + this.tamañoPaginaJarabesChillOut;
    return this.jarabesChillOut.slice(inicio, fin);
  }

  // Obtener las páginas para ChillOut Jarabes
  get paginasJarabesChillOut() {
    const totalPaginas = Math.ceil(this.jarabesChillOut.length / this.tamañoPaginaJarabesChillOut);
    return Array(totalPaginas).fill(0).map((_, index) => index + 1);
  }

  // Cambiar página para ChillOut Jarabes
  paginaAnteriorJarabesChillOut() {
    if (this.paginaActualJarabesChillOut > 1) {
      this.paginaActualJarabesChillOut--;
    }
  }

  paginaSiguienteJarabesChillOut() {
    if (this.paginaActualJarabesChillOut < this.paginasJarabesChillOut.length) {
      this.paginaActualJarabesChillOut++;
    }
  }

  ngOnInit(): void {
    this.dataService.getInsumos().then((insumosArray: any[]) => {
      this.insumosArray = insumosArray;

      //Filtra los Jarabes Chillout y crea un nuevo array.
      this.jarabesChillOut = this.insumosArray.filter(insumo =>
        this.contienePalabrasChillOutJarabe(insumo.name) &&
        insumo.urlArticleFirst && insumo.urlArticleFirst.trim() !== ''
      );

      //Filtra los Jarabes Clásico Torani y crea un nuevo array.
      this.jarabesToraniClasico = this.insumosArray.filter(insumo =>
        this.contienePalabrasToraniClasicoJarabe(insumo.name) &&
        insumo.urlArticleFirst && insumo.urlArticleFirst.trim() !== ''
      );

      //Filtra los Jarabes Puremade Torani y crea un nuevo array.
      this.jarabesPuremadeTorani = this.insumosArray.filter(insumo =>
        this.contienePalabrasToraniPuramadeJarabe(insumo.name) &&
        insumo.urlArticleFirst && insumo.urlArticleFirst.trim() !== ''
      );

      //Filtra los Jarabes Zugar free y crea un nuevo array.
      this.jarabesZeroSugar = this.insumosArray.filter(insumo =>
        this.contienePalabrasToraniZeroSugar(insumo.name) &&
        insumo.urlArticleFirst && insumo.urlArticleFirst.trim() !== ''
      );

      //Filtra los Jarabes Zero Sugar y crea un nuevo array.
      this.jarabesSugarFree = this.insumosArray.filter(insumo =>
        this.contienePalabrasToraniSugarFree(insumo.name) &&
        insumo.urlArticleFirst && insumo.urlArticleFirst.trim() !== ''
      );

      //Filtra los Jarabes jarabesNdulce y crea un nuevo array.
      this.jarabesNdulce = this.insumosArray.filter(insumo =>
        this.contienePalabrasNdulce(insumo.name) &&
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

  //Mostrar Jarabes 
  contienePalabrasChillOutJarabe(nombre: string): boolean {
    const palabrasClave = ['JARABE', 'AGAVE', 'CHILLOUT'];
    return palabrasClave.every(palabra => nombre.toUpperCase().includes(palabra));
  }

  contienePalabrasToraniClasicoJarabe(nombre: string): boolean {
    const palabrasClave = ['TORANI', 'CLASICO', 'JARABE'];
    const cumpleCondicion = palabrasClave.every(palabra => nombre.toUpperCase().includes(palabra));
    //console.log(nombre, cumpleCondicion); // Verifica los resultados en la consola
    return cumpleCondicion;
  }

  contienePalabrasToraniPuramadeJarabe(nombre: string): boolean {
    const palabrasClave = ['TORANI', 'PUREMADE', 'JARABE'];

    // Palabras a excluir
    const palabrasExcluidas = ['ZERO', 'SUGAR'];

    // Convierte el nombre a mayúsculas para hacer la coincidencia sin distinción de mayúsculas y minúsculas
    const nombreEnMayusculas = nombre.toUpperCase();

    // Verifica que todas las palabras clave estén presentes y que ninguna palabra excluida esté presente
    const cumpleCondicion = palabrasClave.every(palabra => nombreEnMayusculas.includes(palabra))
      && !palabrasExcluidas.some(excluida => nombreEnMayusculas.includes(excluida));

    //console.log(nombre, cumpleCondicion); // Verifica los resultados en la consola
    return cumpleCondicion;
  }

  contienePalabrasToraniZeroSugar(nombre: string): boolean {
    const palabrasClave = ['TORANI', 'ZERO', 'SUGAR', 'JARABE'];

    // Convierte el nombre a mayúsculas para hacer la coincidencia sin distinción de mayúsculas y minúsculas
    const nombreEnMayusculas = nombre.toUpperCase();

    // Verifica que todas las palabras clave estén presentes y que ninguna palabra excluida esté presente
    const cumpleCondicion = palabrasClave.every(palabra => nombreEnMayusculas.includes(palabra));

    //console.log(nombre, cumpleCondicion); // Verifica los resultados en la consola
    return cumpleCondicion;
  }

  contienePalabrasToraniSugarFree(nombre: string): boolean {
    const palabrasClave = ['TORANI', 'FREE', 'SUGAR', 'JARABE'];

    // Convierte el nombre a mayúsculas para hacer la coincidencia sin distinción de mayúsculas y minúsculas
    const nombreEnMayusculas = nombre.toUpperCase();

    // Verifica que todas las palabras clave estén presentes y que ninguna palabra excluida esté presente
    const cumpleCondicion = palabrasClave.every(palabra => nombreEnMayusculas.includes(palabra));

    //console.log(nombre, cumpleCondicion); // Verifica los resultados en la consola
    return cumpleCondicion;
  }

  contienePalabrasNdulce(nombre: string): boolean {
    const palabrasClave = ['DULCE', 'JARABE'];

    // Convierte el nombre a mayúsculas para hacer la coincidencia sin distinción de mayúsculas y minúsculas
    const nombreEnMayusculas = nombre.toUpperCase();

    // Verifica que todas las palabras clave estén presentes y que ninguna palabra excluida esté presente
    const cumpleCondicion = palabrasClave.every(palabra => nombreEnMayusculas.includes(palabra));

    //console.log(nombre, cumpleCondicion); // Verifica los resultados en la consola
    return cumpleCondicion;
  }
  
}