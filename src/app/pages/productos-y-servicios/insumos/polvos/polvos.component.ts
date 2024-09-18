import { Component, AfterViewInit, QueryList, ViewChildren } from '@angular/core';
import { DataService } from '../../../../utils/data.service';
import { DomSanitizer, SafeUrl } from '@angular/platform-browser';

@Component({
  selector: 'app-polvos',
  templateUrl: './polvos.component.html',
  styleUrls: ['./polvos.component.css']
})
export class PolvosComponent {

  constructor(
    private dataService: DataService,
    private sanitizer: DomSanitizer,
  ) { }

  insumosArray: any[] = [];
  extractedUrls: any;

  //Menu
  hidesChillOutMix: boolean = true;
  hidesChillOutJustFruit: boolean = true;
  hidesChillOutActive: boolean = true;
  hidesDavidRio: boolean = true;
  hidesSuperBlends: boolean = true;
  hidesTeaZone: boolean = true;
  hidesAiya: boolean = true;
  hidesDonGustavo: boolean = true;
  hidesMocafe: boolean = true;
  hidesCoolCap: boolean = true;
  hidesCappuccinee: boolean = true;
  hidesHollander: boolean = true;

  mostrarCuadricula: boolean = false;
  elementosVisibles: number = 0;

  polvosSuperBlends: any [] = [];
  polvosChillOutActive: any [] = [];

  // Polvos ChillOutMix
  polvosChillOutMix: any [] = [];
  paginaActualChillOutMix: number = 1;
  tamañoPaginaChillOutMix: number = 5;

  // Polvos ChillOut Just Fruit
  polvosChillOutJustFruit: any [] = [];
  paginaActualChillOutJustFruit: number = 1;
  tamañoPaginaChillOutJustFruit: number = 5;

  // Polvos Tea Zone
  polvosTeaZone: any [] = [];
  paginaActualTeaZone: number = 1;
  tamañoPaginaTeaZone: number = 5;

  // Polvos AIYA
  polvosAiya: any [] = [];
  paginaActualAiya: number = 1;
  tamañoPaginaAiya: number = 5;

  // Polvos Don Gustavo
  polvosDonGustavo: any [] = [];
  paginaActualDonGustavo: number = 1;
  tamañoPaginaDonGustavo: number = 5;

  // Polvos David Rio
  polvosDavidRio: any [] = [];
  paginaActualDavidRio: number = 1;
  tamañoPaginaDavidRio: number = 5;

  // Polvos Mocafe
  polvosMocafe: any [] = [];
  paginaActualMocafe: number = 1;
  tamañoPaginaMocafe: number = 5;

  // Polvos CoolCapp
  polvosCoolCap: any [] = [];
  paginaActualCoolCap: number = 1;
  tamañoPaginaCoolCap: number = 5;

  // Polvos Cappuccinee
  polvosCappucchinee: any [] = [];
  paginaActualCappuccine: number = 1;
  tamañoPaginaCappuccine: number = 5;

  // Polvos Hollander
  polvosHollander: any [] = [];
  paginaActualHollander: number = 1;
  tamañoPaginaHollander: number = 5;

  @ViewChildren('tarjeta')
  tarjetas!: QueryList<any>;

  ngAfterViewInit() {
    this.elementosVisibles = this.tarjetas.length;
  }

  // Obtener los elementos de la página actual para ChillOut Mix
  get elementosPaginaChillOutMix() {
    const inicio = (this.paginaActualChillOutMix - 1) * this.tamañoPaginaChillOutMix;
    const fin = inicio + this.tamañoPaginaChillOutMix;
    return this.polvosChillOutMix.slice(inicio, fin);
  }

  // Obtener las páginas para ChillOut Mix
  get paginasChillOutMix() {
    const totalPaginas = Math.ceil(this.polvosChillOutMix.length / this.tamañoPaginaChillOutMix);
    return Array(totalPaginas).fill(0).map((_, index) => index + 1);
  }

  // Cambiar página para Café Etrusca
  paginaAnteriorChillOutMix() {
    if (this.paginaActualChillOutMix > 1) {
      this.paginaActualChillOutMix--;
    }
  }

  paginaSiguienteChillOutMix() {
    if (this.paginaActualChillOutMix < this.paginasChillOutMix.length) {
      this.paginaActualChillOutMix++;
    }
  }

  // Obtener los elementos de la página actual para ChillOut Just Fruit
  get elementosPaginaChillOutJustFruit() {
    const inicio = (this.paginaActualChillOutJustFruit - 1) * this.tamañoPaginaChillOutJustFruit;
    const fin = inicio + this.tamañoPaginaChillOutJustFruit;
    return this.polvosChillOutJustFruit.slice(inicio, fin);
  }

  // Obtener las páginas para ChillOut Just Fruit
  get paginasChillOutJustFruit() {
    const totalPaginas = Math.ceil(this.polvosChillOutJustFruit.length / this.tamañoPaginaChillOutJustFruit);
    return Array(totalPaginas).fill(0).map((_, index) => index + 1);
  }

  // Cambiar página para ChillOutJustFruit
  paginaAnteriorChillOutJustFruit() {
    if (this.paginaActualChillOutJustFruit > 1) {
      this.paginaActualChillOutJustFruit--;
    }
  }

  paginaSiguienteChillOutJustFruit() {
    if (this.paginaActualChillOutJustFruit < this.paginasChillOutJustFruit.length) {
      this.paginaActualChillOutJustFruit++;
    }
  }

  // Obtener los elementos de la página actual para TeaZone
  get elementosPaginaTeaZone() {
    const inicio = (this.paginaActualTeaZone - 1) * this.tamañoPaginaTeaZone;
    const fin = inicio + this.tamañoPaginaTeaZone;
    return this.polvosTeaZone.slice(inicio, fin);
  }

  // Obtener las páginas para TeaZone
  get paginasTeaZone() {
    const totalPaginas = Math.ceil(this.polvosTeaZone.length / this.tamañoPaginaTeaZone);
    return Array(totalPaginas).fill(0).map((_, index) => index + 1);
  }

  // Cambiar página para TeaZone
  paginaAnteriorTeaZone() {
    if (this.paginaActualTeaZone > 1) {
      this.paginaActualTeaZone--;
    }
  }

  paginaSiguienteTeaZone() {
    if (this.paginaActualTeaZone < this.paginasTeaZone.length) {
      this.paginaActualTeaZone++;
    }
  }

  // Obtener los elementos de la página actual para Aiya
  get elementosPaginaAiya() {
    const inicio = (this.paginaActualAiya - 1) * this.tamañoPaginaAiya;
    const fin = inicio + this.tamañoPaginaAiya;
    return this.polvosAiya.slice(inicio, fin);
  }

  // Obtener las páginas para Aiya
  get paginasAiya() {
    const totalPaginas = Math.ceil(this.polvosAiya.length / this.tamañoPaginaAiya);
    return Array(totalPaginas).fill(0).map((_, index) => index + 1);
  }

  // Cambiar página para Aiya
  paginaAnteriorAiya() {
    if (this.paginaActualAiya > 1) {
      this.paginaActualAiya--;
    }
  }

  paginaSiguienteAiya() {
    if (this.paginaActualAiya < this.paginasAiya.length) {
      this.paginaActualAiya++;
    }
  }

  // Obtener los elementos de la página actual para Don Gustavo
  get elementosPaginaDonGustavo() {
    const inicio = (this.paginaActualDonGustavo - 1) * this.tamañoPaginaDonGustavo;
    const fin = inicio + this.tamañoPaginaDonGustavo;
    return this.polvosDonGustavo.slice(inicio, fin);
  }

  // Obtener las páginas para Don Gustavo
  get paginasDonGustavo() {
    const totalPaginas = Math.ceil(this.polvosDonGustavo.length / this.tamañoPaginaDonGustavo);
    return Array(totalPaginas).fill(0).map((_, index) => index + 1);
  }

  // Cambiar página para Don Gustavo
  paginaAnteriorDonGustavo() {
    if (this.paginaActualDonGustavo > 1) {
      this.paginaActualDonGustavo--;
    }
  }

  paginaSiguienteDonGustavo() {
    if (this.paginaActualDonGustavo < this.paginasDonGustavo.length) {
      this.paginaActualDonGustavo++;
    }
  }

  // Obtener los elementos de la página actual para David Rio
  get elementosPaginaDavidRio() {
    const inicio = (this.paginaActualDavidRio - 1) * this.tamañoPaginaDavidRio;
    const fin = inicio + this.tamañoPaginaDavidRio;
    return this.polvosDavidRio.slice(inicio, fin);
  }

  // Obtener las páginas para David Rio
  get paginasDavidRio() {
    const totalPaginas = Math.ceil(this.polvosDavidRio.length / this.tamañoPaginaDavidRio);
    return Array(totalPaginas).fill(0).map((_, index) => index + 1);
  }

  // Cambiar página para David Rio
  paginaAnteriorDavidRio() {
    if (this.paginaActualDavidRio > 1) {
      this.paginaActualDavidRio--;
    }
  }

  paginaSiguienteDavidRio() {
    if (this.paginaActualDavidRio < this.paginasDavidRio.length) {
      this.paginaActualDavidRio++;
    }
  }

  // Obtener los elementos de la página actual para Mocafe
  get elementosPaginaMocafe() {
    const inicio = (this.paginaActualMocafe - 1) * this.tamañoPaginaMocafe;
    const fin = inicio + this.tamañoPaginaMocafe;
    return this.polvosMocafe.slice(inicio, fin);
  }

  // Obtener las páginas para Mocafe
  get paginasMocafe() {
    const totalPaginas = Math.ceil(this.polvosMocafe.length / this.tamañoPaginaMocafe);
    return Array(totalPaginas).fill(0).map((_, index) => index + 1);
  }

  // Cambiar página para Mocafe
  paginaAnteriorMocafe() {
    if (this.paginaActualMocafe > 1) {
      this.paginaActualMocafe--;
    }
  }

  paginaSiguienteMocafe() {
    if (this.paginaActualMocafe < this.paginasMocafe.length) {
      this.paginaActualMocafe++;
    }
  }

  // Obtener los elementos de la página actual para CoolCapp
  get elementosPaginaCoolCapp() {
    const inicio = (this.paginaActualCoolCap - 1) * this.tamañoPaginaCoolCap;
    const fin = inicio + this.tamañoPaginaCoolCap;
    return this.polvosCoolCap.slice(inicio, fin);
  }

  // Obtener las páginas para CoolCapp
  get paginasCoolCapp() {
    const totalPaginas = Math.ceil(this.polvosCoolCap.length / this.tamañoPaginaCoolCap);
    return Array(totalPaginas).fill(0).map((_, index) => index + 1);
  }

  // Cambiar página para CoolCapp
  paginaAnteriorCoolCapp() {
    if (this.paginaActualCoolCap > 1) {
      this.paginaActualCoolCap--;
    }
  }

  paginaSiguienteCoolCapp() {
    if (this.paginaActualCoolCap < this.paginasCoolCapp.length) {
      this.paginaActualCoolCap++;
    }
  }

  // Obtener los elementos de la página actual para Cappuccinee
  get elementosPaginaCappuccinee() {
    const inicio = (this.paginaActualCappuccine - 1) * this.tamañoPaginaHollander;
    const fin = inicio + this.tamañoPaginaHollander;
    return this.polvosCappucchinee.slice(inicio, fin);
  }

  // Obtener las páginas para Cappuccinee
  get paginasCappuccinee() {
    const totalPaginas = Math.ceil(this.polvosCappucchinee.length / this.tamañoPaginaHollander);
    return Array(totalPaginas).fill(0).map((_, index) => index + 1);
  }

  // Cambiar página para Cappuccinee
  paginaAnteriorCappuccinee() {
    if (this.paginaActualCappuccine > 1) {
      this.paginaActualCappuccine--;
    }
  }

  paginaSiguienteCappuccinee() {
    if (this.paginaActualCappuccine < this.paginasCappuccinee.length) {
      this.paginaActualCappuccine++;
    }
  }

  // Obtener los elementos de la página actual para Hollander
  get elementosPaginaHollander() {
    const inicio = (this.paginaActualHollander - 1) * this.tamañoPaginaHollander;
    const fin = inicio + this.tamañoPaginaHollander;
    return this.polvosHollander.slice(inicio, fin);
  }

  // Obtener las páginas para Hollander
  get paginasHollander() {
    const totalPaginas = Math.ceil(this.polvosHollander.length / this.tamañoPaginaHollander);
    return Array(totalPaginas).fill(0).map((_, index) => index + 1);
  }

  // Cambiar página para Hollander
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
      console.log('Información de insumosArray', this.insumosArray);

      // Filtra los ChillOut Mix y crea un nuevo array
      this.polvosChillOutMix = this.insumosArray.filter(insumo =>
        this.contienePalabrasChillOutMix(insumo.name) &&
        insumo.urlArticleFirst && insumo.urlArticleFirst.trim() !== ''
      );

      // Filtra los ChillOut JustFruit y crea un nuevo array
      this.polvosChillOutJustFruit = this.insumosArray.filter(insumo =>
        this.contienePalabrasChillOutJustFruit(insumo.name) &&
        insumo.urlArticleFirst && insumo.urlArticleFirst.trim() !== ''
      );

      // Filtra los ChillOut Active y crea un nuevo array
      this.polvosChillOutActive = this.insumosArray.filter(insumo =>
        this.contienePalabrasChillOutActive(insumo.name) &&
        insumo.urlArticleFirst && insumo.urlArticleFirst.trim() !== ''
      );

      // Filtra los David Río y crea un nuevo array
      this.polvosDavidRio = this.insumosArray.filter(insumo =>
        this.contienePalabrasDavidRio(insumo.name) &&
        insumo.urlArticleFirst && insumo.urlArticleFirst.trim() !== ''
      );

      // Filtra los Super Blends crea un nuevo array
      this.polvosSuperBlends = this.insumosArray.filter(insumo =>
        this.contienePalabrasSuperBlends(insumo.name) &&
        insumo.urlArticleFirst && insumo.urlArticleFirst.trim() !== ''
      );

      // Filtra los Aiya crea un nuevo array
      this.polvosAiya = this.insumosArray.filter(insumo =>
        this.contienePalabrasAiya(insumo.name) &&
        insumo.urlArticleFirst && insumo.urlArticleFirst.trim() !== ''
      );

      // Filtra los Don Gustavo crea un nuevo array
      this.polvosDonGustavo = this.insumosArray.filter(insumo =>
        this.contienePalabrasDonGustavo(insumo.name) &&
        insumo.urlArticleFirst && insumo.urlArticleFirst.trim() !== ''
      );

      // Filtra los Mocafe crea un nuevo array
      this.polvosMocafe = this.insumosArray.filter(insumo =>
        this.contienePalabrasMocafe(insumo.name) &&
        insumo.urlArticleFirst && insumo.urlArticleFirst.trim() !== ''
      );

      // Filtra los CoolCapp crea un nuevo array
      this.polvosCoolCap = this.insumosArray.filter(insumo =>
        this.contienePalabrasCoolCapp(insumo.name) &&
        insumo.urlArticleFirst && insumo.urlArticleFirst.trim() !== ''
      );

      // Filtra los Cappuccine crea un nuevo array
      this.polvosCappucchinee = this.insumosArray.filter(insumo =>
        this.contienePalabrasCappuccine(insumo.name) &&
        insumo.urlArticleFirst && insumo.urlArticleFirst.trim() !== ''
      );

      // Filtra los Cappuccine crea un nuevo array
      this.polvosHollander = this.insumosArray.filter(insumo =>
        this.contienePalabrasHollander(insumo.name) &&
        insumo.urlArticleFirst && insumo.urlArticleFirst.trim() !== ''
      );
      
      // Filtra los Tea Zone crea un nuevo array
      this.polvosTeaZone = this.insumosArray.filter(insumo =>
        this.contienePalabrasTeaZone(insumo.name) &&
        insumo.urlArticleFirst && insumo.urlArticleFirst.trim() !== ''
      );

      console.log(this.polvosSuperBlends,);

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

  contienePalabrasChillOutMix(nombre: string): boolean {
    const palabrasClave = ['CHILLOUT', 'MIX'];

    // Palabras a excluir
    const palabrasExcluidas = ['FRUIT', 'JAM', 'TAPIOCA'];

    // Convierte el nombre a mayúsculas para hacer la coincidencia sin distinción de mayúsculas y minúsculas
    const nombreEnMayusculas = nombre.toUpperCase();

    // Verifica que todas las palabras clave estén presentes y que ninguna palabra excluida esté presente
    const cumpleCondicion = palabrasClave.every(palabra => nombreEnMayusculas.includes(palabra))
      && !palabrasExcluidas.some(excluida => nombreEnMayusculas.includes(excluida));

    //console.log(nombre, cumpleCondicion); // Verifica los resultados en la consola
    return cumpleCondicion;

    // Verifica que todas las palabras clave estén presentes y que ninguna palabra excluida esté presente
  }

  contienePalabrasChillOutJustFruit(nombre: string): boolean {
    const palabrasClave = ['CHILLOUT', 'JUST', 'FRUIT'];

    // Palabras a excluir
    const palabrasExcluidas = ['MIX', 'JAM', 'TAPIOCA'];

    // Convierte el nombre a mayúsculas para hacer la coincidencia sin distinción de mayúsculas y minúsculas
    const nombreEnMayusculas = nombre.toUpperCase();

    // Verifica que todas las palabras clave estén presentes y que ninguna palabra excluida esté presente
    const cumpleCondicion = palabrasClave.every(palabra => nombreEnMayusculas.includes(palabra))
      && !palabrasExcluidas.some(excluida => nombreEnMayusculas.includes(excluida));

    //console.log(nombre, cumpleCondicion); // Verifica los resultados en la consola
    return cumpleCondicion;

    // Verifica que todas las palabras clave estén presentes y que ninguna palabra excluida esté presente
  }

  contienePalabrasChillOutActive(nombre: string): boolean {
    const palabrasClave = ['CHILLOUT', 'ACTIVE',];

    // Palabras a excluir
    const palabrasExcluidas = ['MIX', 'JAM', 'TAPIOCA'];

    // Convierte el nombre a mayúsculas para hacer la coincidencia sin distinción de mayúsculas y minúsculas
    const nombreEnMayusculas = nombre.toUpperCase();

    // Verifica que todas las palabras clave estén presentes y que ninguna palabra excluida esté presente
    const cumpleCondicion = palabrasClave.every(palabra => nombreEnMayusculas.includes(palabra))
      && !palabrasExcluidas.some(excluida => nombreEnMayusculas.includes(excluida));

    //console.log(nombre, cumpleCondicion); // Verifica los resultados en la consola
    return cumpleCondicion;

    // Verifica que todas las palabras clave estén presentes y que ninguna palabra excluida esté presente
  }

  contienePalabrasDavidRio(nombre: string): boolean {
    const palabrasClave = ['DAVID', 'RIO',];

    // Palabras a excluir
    const palabrasExcluidas = ['SUPER', 'BLENDS', 'TAPIOCA'];

    // Convierte el nombre a mayúsculas para hacer la coincidencia sin distinción de mayúsculas y minúsculas
    const nombreEnMayusculas = nombre.toUpperCase();

    // Verifica que todas las palabras clave estén presentes y que ninguna palabra excluida esté presente
    const cumpleCondicion = palabrasClave.every(palabra => nombreEnMayusculas.includes(palabra))
      && !palabrasExcluidas.some(excluida => nombreEnMayusculas.includes(excluida));

    //console.log(nombre, cumpleCondicion); // Verifica los resultados en la consola
    return cumpleCondicion;

    // Verifica que todas las palabras clave estén presentes y que ninguna palabra excluida esté presente
  }

  contienePalabrasSuperBlends(nombre: string): boolean {
    const palabrasClave = ['SUPER', 'BLENDS',];

    // Palabras a excluir
    const palabrasExcluidas = ['CHILLOUT', 'TAPIOCA'];

    // Convierte el nombre a mayúsculas para hacer la coincidencia sin distinción de mayúsculas y minúsculas
    const nombreEnMayusculas = nombre.toUpperCase();

    // Verifica que todas las palabras clave estén presentes y que ninguna palabra excluida esté presente
    const cumpleCondicion = palabrasClave.every(palabra => nombreEnMayusculas.includes(palabra))
      && !palabrasExcluidas.some(excluida => nombreEnMayusculas.includes(excluida));

    //console.log(nombre, cumpleCondicion); // Verifica los resultados en la consola
    return cumpleCondicion;

    // Verifica que todas las palabras clave estén presentes y que ninguna palabra excluida esté presente
  }

  contienePalabrasAiya(nombre: string): boolean {
    const palabrasClave = ['AIYA',];

    // Palabras a excluir
    const palabrasExcluidas = ['CHILLOUT', 'DAVID', 'TAPIOCA'];

    // Convierte el nombre a mayúsculas para hacer la coincidencia sin distinción de mayúsculas y minúsculas
    const nombreEnMayusculas = nombre.toUpperCase();

    // Verifica que todas las palabras clave estén presentes y que ninguna palabra excluida esté presente
    const cumpleCondicion = palabrasClave.every(palabra => nombreEnMayusculas.includes(palabra))
      && !palabrasExcluidas.some(excluida => nombreEnMayusculas.includes(excluida));

    //console.log(nombre, cumpleCondicion); // Verifica los resultados en la consola
    return cumpleCondicion;

    // Verifica que todas las palabras clave estén presentes y que ninguna palabra excluida esté presente
  }

  contienePalabrasDonGustavo(nombre: string): boolean {
    const palabrasClave = ['DON', 'GUSTAVO',];

    // Palabras a excluir
    const palabrasExcluidas = ['CHILLOUT', 'DAVID', 'TAPIOCA'];

    // Convierte el nombre a mayúsculas para hacer la coincidencia sin distinción de mayúsculas y minúsculas
    const nombreEnMayusculas = nombre.toUpperCase();

    // Verifica que todas las palabras clave estén presentes y que ninguna palabra excluida esté presente
    const cumpleCondicion = palabrasClave.every(palabra => nombreEnMayusculas.includes(palabra))
      && !palabrasExcluidas.some(excluida => nombreEnMayusculas.includes(excluida));

    //console.log(nombre, cumpleCondicion); // Verifica los resultados en la consola
    return cumpleCondicion;

    // Verifica que todas las palabras clave estén presentes y que ninguna palabra excluida esté presente
  }

  contienePalabrasMocafe(nombre: string): boolean {
    const palabrasClave = ['MOCAFE',];

    // Palabras a excluir
    const palabrasExcluidas = ['CHILLOUT', 'DAVID', 'TAPIOCA'];

    // Convierte el nombre a mayúsculas para hacer la coincidencia sin distinción de mayúsculas y minúsculas
    const nombreEnMayusculas = nombre.toUpperCase();

    // Verifica que todas las palabras clave estén presentes y que ninguna palabra excluida esté presente
    const cumpleCondicion = palabrasClave.every(palabra => nombreEnMayusculas.includes(palabra))
      && !palabrasExcluidas.some(excluida => nombreEnMayusculas.includes(excluida));

    //console.log(nombre, cumpleCondicion); // Verifica los resultados en la consola
    return cumpleCondicion;

    // Verifica que todas las palabras clave estén presentes y que ninguna palabra excluida esté presente
  }

  contienePalabrasCoolCapp(nombre: string): boolean {
    const palabrasClave = ['COOL', 'CAPP',];

    // Palabras a excluir
    const palabrasExcluidas = ['CHILLOUT', 'DAVID', 'TAPIOCA'];

    // Convierte el nombre a mayúsculas para hacer la coincidencia sin distinción de mayúsculas y minúsculas
    const nombreEnMayusculas = nombre.toUpperCase();

    // Verifica que todas las palabras clave estén presentes y que ninguna palabra excluida esté presente
    const cumpleCondicion = palabrasClave.every(palabra => nombreEnMayusculas.includes(palabra))
      && !palabrasExcluidas.some(excluida => nombreEnMayusculas.includes(excluida));

    //console.log(nombre, cumpleCondicion); // Verifica los resultados en la consola
    return cumpleCondicion;

    // Verifica que todas las palabras clave estén presentes y que ninguna palabra excluida esté presente
  }

  contienePalabrasTeaZone(nombre: string): boolean {
    const palabrasClave = ['TEA', 'ZONE', 'POLVO'];

    // Palabras a excluir
    const palabrasExcluidas = ['CONCENTRADO', 'JELLY', 'PERLAS'];

    // Convierte el nombre a mayúsculas para hacer la coincidencia sin distinción de mayúsculas y minúsculas
    const nombreEnMayusculas = nombre.toUpperCase();

    // Verifica que todas las palabras clave estén presentes y que ninguna palabra excluida esté presente
    const cumpleCondicion = palabrasClave.every(palabra => nombreEnMayusculas.includes(palabra))
      && !palabrasExcluidas.some(excluida => nombreEnMayusculas.includes(excluida));

    //console.log(nombre, cumpleCondicion); // Verifica los resultados en la consola
    return cumpleCondicion;

    // Verifica que todas las palabras clave estén presentes y que ninguna palabra excluida esté presente
  }

  contienePalabrasCappuccine(nombre: string): boolean {
    const palabrasClave = ['CAPPUCCINE'];

    // Palabras a excluir
    const palabrasExcluidas = ['CHILLOUT', 'DAVID', 'TAPIOCA'];

    // Convierte el nombre a mayúsculas para hacer la coincidencia sin distinción de mayúsculas y minúsculas
    const nombreEnMayusculas = nombre.toUpperCase();

    // Verifica que todas las palabras clave estén presentes y que ninguna palabra excluida esté presente
    const cumpleCondicion = palabrasClave.every(palabra => nombreEnMayusculas.includes(palabra))
      && !palabrasExcluidas.some(excluida => nombreEnMayusculas.includes(excluida));

    //console.log(nombre, cumpleCondicion); // Verifica los resultados en la consola
    return cumpleCondicion;

    // Verifica que todas las palabras clave estén presentes y que ninguna palabra excluida esté presente
  }

  contienePalabrasHollander(nombre: string): boolean {
    const palabrasClave = ['HOLLANDER'];

    // Palabras a excluir
    const palabrasExcluidas = ['CHILLOUT', 'DAVID', 'TAPIOCA'];

    // Convierte el nombre a mayúsculas para hacer la coincidencia sin distinción de mayúsculas y minúsculas
    const nombreEnMayusculas = nombre.toUpperCase();

    // Verifica que todas las palabras clave estén presentes y que ninguna palabra excluida esté presente
    const cumpleCondicion = palabrasClave.every(palabra => nombreEnMayusculas.includes(palabra))
      && !palabrasExcluidas.some(excluida => nombreEnMayusculas.includes(excluida));

    //console.log(nombre, cumpleCondicion); // Verifica los resultados en la consola
    return cumpleCondicion;

    // Verifica que todas las palabras clave estén presentes y que ninguna palabra excluida esté presente
  }
}
