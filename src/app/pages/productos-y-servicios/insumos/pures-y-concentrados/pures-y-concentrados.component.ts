import { Component, AfterViewInit, QueryList, ViewChildren } from '@angular/core';
import { DataService } from '../../../../utils/data.service';
import { DomSanitizer, SafeUrl } from '@angular/platform-browser';

@Component({
  selector: 'app-pures-y-concentrados',
  templateUrl: './pures-y-concentrados.component.html',
  styleUrls: ['./pures-y-concentrados.component.css']
})
export class PuresYConcentradosComponent {

  constructor(
    private dataService: DataService,
    private sanitizer: DomSanitizer,
  ) { }

  insumosArray: any[] = [];
  extractedUrls: any;

  //Menu
  hideschillOutFruit: boolean = true;
  hideschillOutJam: boolean = true;
  hidesToraniRealSmoothieMix: boolean = true;
  hidesToraniPureeBlend: boolean = true;
  hidesTeaZone: boolean = true;

  mostrarCuadricula: boolean = false;
  elementosVisibles: number = 0;

  //ChillOutFruit
  chillOutFruitConcentrados: any[] = [];
  paginaActualChillOutFruit: number = 1;
  tamañoPaginaChillOutFruit: number = 5;

  //ChillOutFruit
  chillOutJamConcentrados: any[] = [];
  paginaActualChillOutJam: number = 1;
  tamañoPaginaChillOutJam: number = 5;

  // Torani Real Smoothie Mix
  pureToraniRealSmoothieMix: any[] = [];
  paginaActualToraniRealSmoothie: number = 1;
  tamañoPaginaToraniRealSmoothie: number = 5;

  // Torani Pureé blend
  pureToraniPureeBlend: any[] = [];
  paginaActualToraniPureeBlend: number = 1;
  tamañoPaginaToraniPureeBlend: number = 5;

  // Tea Zone Concentrado
  concentradoTeaZone: any[] = [];
  paginaActualTeaZoneConcentrado: number = 1;
  tamañoPaginaTeaZoneConcentrado: number = 5;

  @ViewChildren('tarjeta')
  tarjetas!: QueryList<any>;

  ngAfterViewInit() {
    this.elementosVisibles = this.tarjetas.length;
  }

  // Obtener los elementos de la página actual para chillOutFruit
  get elementosPaginaChillOutFruitConcentrados() {
    const inicio = (this.paginaActualChillOutFruit - 1) * this.tamañoPaginaChillOutFruit;
    const fin = inicio + this.tamañoPaginaChillOutFruit;
    return this.chillOutFruitConcentrados.slice(inicio, fin);
  }

  // Obtener las páginas para chillOutFruit
  get paginasChillOutFruitConcentrados() {
    const totalPaginas = Math.ceil(this.chillOutFruitConcentrados.length / this.tamañoPaginaChillOutFruit);
    return Array(totalPaginas).fill(0).map((_, index) => index + 1);
  }

  // Cambiar página para chillOutFruit
  paginaAnteriorChillOutFruit() {
    if (this.paginaActualChillOutFruit > 1) {
      this.paginaActualChillOutFruit--;
    }
  }

  paginaSiguienteChillOutFruit() {
    if (this.paginaActualChillOutFruit < this.paginasChillOutFruitConcentrados.length) {
      this.paginaActualChillOutFruit++;
    }
  }

  // Obtener los elementos de la página actual para chillOutJam
  get elementosPaginaChillOutJam() {
    const inicio = (this.paginaActualChillOutJam - 1) * this.tamañoPaginaChillOutJam;
    const fin = inicio + this.tamañoPaginaChillOutJam;
    return this.chillOutJamConcentrados.slice(inicio, fin);
  }

  // Obtener las páginas para chillOutJam
  get paginasChillOutJam() {
    const totalPaginas = Math.ceil(this.chillOutJamConcentrados.length / this.tamañoPaginaChillOutJam);
    return Array(totalPaginas).fill(0).map((_, index) => index + 1);
  }

  // Cambiar página para chillOutJam
  paginaAnteriorchillOutJam() {
    if (this.paginaActualChillOutJam > 1) {
      this.paginaActualChillOutJam--;
    }
  }

  paginaSiguientechillOutJam() {
    if (this.paginaActualChillOutJam < this.paginasChillOutJam.length) {
      this.paginaActualChillOutJam++;
    }
  }

  // Obtener los elementos de la página actual para Torani Real Smoothie Mix
  get elementosPaginaToraniRealSmoothie() {
    const inicio = (this.paginaActualToraniRealSmoothie - 1) * this.tamañoPaginaToraniRealSmoothie;
    const fin = inicio + this.tamañoPaginaToraniRealSmoothie;
    return this.pureToraniRealSmoothieMix.slice(inicio, fin);
  }

  // Obtener las páginas para Torani Real Smoothie Mix
  get paginasToraniRealSmoothie() {
    const totalPaginas = Math.ceil(this.pureToraniRealSmoothieMix.length / this.tamañoPaginaToraniRealSmoothie);
    return Array(totalPaginas).fill(0).map((_, index) => index + 1);
  }

  // Cambiar página para Torani Real Smoothie Mix
  paginaAnteriorToraniRealSmoothie() {
    if (this.paginaActualToraniRealSmoothie > 1) {
      this.paginaActualToraniRealSmoothie--;
    }
  }

  paginaSiguienteToraniRealSmoothie() {
    if (this.paginaActualToraniRealSmoothie < this.paginasToraniRealSmoothie.length) {
      this.paginaActualToraniRealSmoothie++;
    }
  }

  // Obtener los elementos de la página actual para Torani Pureé blend
  get elementosPaginaToraniPureeBlend() {
    const inicio = (this.paginaActualToraniPureeBlend - 1) * this.tamañoPaginaToraniPureeBlend;
    const fin = inicio + this.tamañoPaginaToraniPureeBlend;
    return this.pureToraniPureeBlend.slice(inicio, fin);
  }

  // Obtener las páginas para Torani Pureé blend
  get paginasToraniPureeBlend() {
    const totalPaginas = Math.ceil(this.pureToraniPureeBlend.length / this.tamañoPaginaToraniPureeBlend);
    return Array(totalPaginas).fill(0).map((_, index) => index + 1);
  }

  // Cambiar página para Torani Pureé blend
  paginaAnteriorToraniPureeBlend() {
    if (this.paginaActualToraniPureeBlend > 1) {
      this.paginaActualToraniPureeBlend--;
    }
  }

  paginaSiguienteToraniPureeBlend() {
    if (this.paginaActualToraniPureeBlend < this.paginasToraniPureeBlend.length) {
      this.paginaActualToraniPureeBlend++;
    }
  }

  // Obtener los elementos de la página actual para Tea Zone Concentrado
  get elementosPaginaTeaZoneConcentrado() {
    const inicio = (this.paginaActualTeaZoneConcentrado - 1) * this.tamañoPaginaTeaZoneConcentrado;
    const fin = inicio + this.tamañoPaginaToraniPureeBlend;
    return this.concentradoTeaZone.slice(inicio, fin);
  }

  // Obtener las páginas para Tea Zone Concentrado
  get paginasTeaZoneConcentrado() {
    const totalPaginas = Math.ceil(this.concentradoTeaZone.length / this.tamañoPaginaTeaZoneConcentrado);
    return Array(totalPaginas).fill(0).map((_, index) => index + 1);
  }

  // Cambiar página para Tea Zone Concentrado
  paginaAnteriorTeaZoneConcentrado() {
    if (this.paginaActualTeaZoneConcentrado > 1) {
      this.paginaActualTeaZoneConcentrado--;
    }
  }

  paginaSiguienteTeaZoneConcentrado() {
    if (this.paginaActualTeaZoneConcentrado < this.paginasTeaZoneConcentrado.length) {
      this.paginaActualTeaZoneConcentrado++;
    }
  }


  ngOnInit(): void {
    this.dataService.getInsumos().then((insumosArray: any[]) => {
      this.insumosArray = insumosArray;
      console.log('Información de insumosArray', this.insumosArray);

      //Filtra los concentrados ChillOut Fruit y crea un nuevo array.
      this.chillOutFruitConcentrados = this.insumosArray.filter(insumo =>
        this.contienePalabrasChillOutFruit(insumo.name) &&
        insumo.urlArticleFirst && insumo.urlArticleFirst.trim() !== '' ||
        this.contienePalabrasChillOutSalsa(insumo.name) &&
        insumo.urlArticleFirst && insumo.urlArticleFirst.trim() !== ''
      );

      //Filtra los concentrados ChillOut Jam y crea un nuevo array.
      this.chillOutJamConcentrados = this.insumosArray.filter(insumo =>
        this.contienePalabrasChillOutJam(insumo.name) &&
        insumo.urlArticleFirst && insumo.urlArticleFirst.trim() !== ''
      );

      //Filtra los concentrados Torani Real Smoothie Blend y crea un nuevo array.
      this.pureToraniRealSmoothieMix = this.insumosArray.filter(insumo =>
        this.contienePalabrasToraniSmoothieConcentrado(insumo.name) &&
        insumo.urlArticleFirst && insumo.urlArticleFirst.trim() !== ''
      );

      // Filtra los pures Torani Puree Blend y crea un nuevo array.
      this.pureToraniPureeBlend = this.insumosArray.filter(insumo =>
        this.contienePalabrasToraniPureeBlendConcentrado(insumo.name) &&
        insumo.urlArticleFirst && insumo.urlArticleFirst.trim() !== ''
      );

      // Filtra los concentrados TeaZone y crea un nuevo array
      this.concentradoTeaZone = this.insumosArray.filter(insumo =>
        this.contienePalabrasTeaZonePures(insumo.name) &&
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

  contienePalabrasChillOutFruit(nombre: string): boolean {
    const palabrasClave = ['CHILLOUT', 'FRUIT', 'CONCENTRADO'];

    // Palabras a excluir
    const palabrasExcluidas = ['ACTIVE'];

    // Convierte el nombre a mayúsculas para hacer la coincidencia sin distinción de mayúsculas y minúsculas
    const nombreEnMayusculas = nombre.toUpperCase();

    // Verifica que todas las palabras clave estén presentes y que ninguna palabra excluida esté presente
    const cumpleCondicion = palabrasClave.every(palabra => nombreEnMayusculas.includes(palabra))
      && !palabrasExcluidas.some(excluida => nombreEnMayusculas.includes(excluida));

    //console.log(nombre, cumpleCondicion); // Verifica los resultados en la consola
    return cumpleCondicion;
  }


  contienePalabrasChillOutSalsa(nombre: string): boolean {
    const palabrasClave = ['CHILLOUT', 'CHAMOY'];

    // Convierte el nombre a mayúsculas para hacer la coincidencia sin distinción de mayúsculas y minúsculas
    const nombreEnMayusculas = nombre.toUpperCase();

    // Verifica que todas las palabras clave estén presentes y que ninguna palabra excluida esté presente
    const cumpleCondicion = palabrasClave.every(palabra => nombreEnMayusculas.includes(palabra));

    //console.log(nombre, cumpleCondicion); // Verifica los resultados en la consola
    return cumpleCondicion;
  }


  contienePalabrasChillOutJam(nombre: string): boolean {
    const palabrasClave = ['CHILLOUT', 'JAM'];

    // Palabras a excluir
    const palabrasExcluidas = ['ACTIVE'];

    // Convierte el nombre a mayúsculas para hacer la coincidencia sin distinción de mayúsculas y minúsculas
    const nombreEnMayusculas = nombre.toUpperCase();

    // Verifica que todas las palabras clave estén presentes y que ninguna palabra excluida esté presente
    const cumpleCondicion = palabrasClave.every(palabra => nombreEnMayusculas.includes(palabra))
      && !palabrasExcluidas.some(excluida => nombreEnMayusculas.includes(excluida));

    //console.log(nombre, cumpleCondicion); // Verifica los resultados en la consola
    return cumpleCondicion;
  }

  contienePalabrasToraniSmoothieConcentrado(nombre: string): boolean {
    const palabrasClave = ['TORANI', 'REAL', 'SMOOTHIE'];

    // Palabras a excluir
    const palabrasExcluidas = ['JARABE', 'BLEND'];

    // Convierte el nombre a mayúsculas para hacer la coincidencia sin distinción de mayúsculas y minúsculas
    const nombreEnMayusculas = nombre.toUpperCase();

    // Verifica que todas las palabras clave estén presentes y que ninguna palabra excluida esté presente
    const cumpleCondicion = palabrasClave.every(palabra => nombreEnMayusculas.includes(palabra))
      && !palabrasExcluidas.some(excluida => nombreEnMayusculas.includes(excluida));

    //console.log(nombre, cumpleCondicion); // Verifica los resultados en la consola
    return cumpleCondicion;
  }

  contienePalabrasToraniPureeBlendConcentrado(nombre: string): boolean {
    const palabrasClave = ['TORANI', 'PURE', 'BLEND'];

    // Palabras a excluir
    const palabrasExcluidas = ['SMOOTHIE', 'JARABE'];

    // Convierte el nombre a mayúsculas para hacer la coincidencia sin distinción de mayúsculas y minúsculas
    const nombreEnMayusculas = nombre.toUpperCase();

    // Verifica que todas las palabras clave estén presentes y que ninguna palabra excluida esté presente
    const cumpleCondicion = palabrasClave.every(palabra => nombreEnMayusculas.includes(palabra))
      && !palabrasExcluidas.some(excluida => nombreEnMayusculas.includes(excluida));

    //console.log(nombre, cumpleCondicion); // Verifica los resultados en la consola
    return cumpleCondicion;
  }

  contienePalabrasTeaZonePures(nombre: string): boolean {
    const palabrasClave = ['TEA', 'ZONE', 'CONCENTRADO'];

    // Convierte el nombre a mayúsculas para hacer la coincidencia sin distinción de mayúsculas y minúsculas
    const nombreEnMayusculas = nombre.toUpperCase();

    // Verifica que todas las palabras clave estén presentes y que ninguna palabra excluida esté presente
    const cumpleCondicion = palabrasClave.every(palabra => nombreEnMayusculas.includes(palabra));

    //console.log(nombre, cumpleCondicion); // Verifica los resultados en la consola
    return cumpleCondicion;
  }

}
