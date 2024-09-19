import { Component, AfterViewInit, QueryList, ViewChildren } from '@angular/core';
import { DataService } from '../../../../utils/data.service';
import { DomSanitizer, SafeUrl } from '@angular/platform-browser';

@Component({
  selector: 'app-licuadoras',
  templateUrl: './licuadoras.component.html',
  styleUrls: ['./licuadoras.component.css']
})

export class LicuadorasComponent {
  constructor(
    private dataService: DataService,
    private sanitizer: DomSanitizer,
  ) { }

  maquinasArray: any[] = [];
  extractedUrls: any;

  // Menu 
  hidesHamiltonBeach: boolean = true;
  hidesVitamix: boolean = true;
  hidesBlendtec: boolean = true;

  mostrarCuadricula: boolean = false;
  elementosVisibles: number = 0;

 // Datos para licuadoras hamilton beach
  licuadorasHamiltonBeach: any[] = [];
  paginaActualHamiltonBeach: number = 1;
  tamañoPaginaHamiltonBeach: number = 5;

  // Datos para licuadoras Vitamix
  licuadorasVitamix: any[] = [];
  paginaActualVitamix: number = 1;
  tamañoPaginaVitamix: number = 5;

  // Datos para licuadoras Blendtec
  licuadorasBlendtec: any[] = [];
  paginaActualBlendtec: number = 1;
  tamañoPaginaBlendtec: number = 5;

  @ViewChildren('tarjeta')
  tarjetas!: QueryList<any>;

  ngAfterViewInit() {
    this.elementosVisibles = this.tarjetas.length;
  }

  // Obtener los elementos de la página actual para hamilton beach
  get elementosPaginaHamiltonBeach() {
    const inicio = (this.paginaActualHamiltonBeach - 1) * this.tamañoPaginaHamiltonBeach;
    const fin = inicio + this.tamañoPaginaHamiltonBeach;
    return this.licuadorasHamiltonBeach.slice(inicio, fin);
  }

  // Obtener las páginas para hamilton beach
  get paginasHamiltonBeach() {
    const totalPaginas = Math.ceil(this.licuadorasHamiltonBeach.length / this.tamañoPaginaHamiltonBeach);
    return Array(totalPaginas).fill(0).map((_, index) => index + 1);
  }

  // Cambiar página para hamilton beach
  paginaAnteriorHamiltonBeach() {
    if (this.paginaActualHamiltonBeach > 1) {
      this.paginaActualHamiltonBeach--;
    }
  }

  paginaSiguienteHamiltonBeach() {
    if (this.paginaActualHamiltonBeach < this.paginasHamiltonBeach.length) {
      this.paginaActualHamiltonBeach++;
    }
  }

  // Obtener los elementos de la página actual para Vitamix
  get elementosPaginaVitamix() {
    const inicio = (this.paginaActualVitamix - 1) * this.tamañoPaginaVitamix;
    const fin = inicio + this.tamañoPaginaVitamix;
    return this.licuadorasVitamix.slice(inicio, fin);
  }

  // Obtener las páginas para Vitamix
  get paginasVitamix() {
    const totalPaginas = Math.ceil(this.licuadorasVitamix.length / this.tamañoPaginaVitamix);
    return Array(totalPaginas).fill(0).map((_, index) => index + 1);
  }

  // Cambiar página para Vitamix
  paginaAnteriorVitamix() {
    if (this.paginaActualVitamix > 1) {
      this.paginaActualVitamix--;
    }
  }

  paginaSiguienteVitamix() {
    if (this.paginaActualVitamix < this.paginasVitamix.length) {
      this.paginaActualVitamix++;
    }
  }

  // Obtener los elementos de la página actual para Blendtec
  get elementosPaginaBlendtec() {
    const inicio = (this.paginaActualBlendtec - 1) * this.tamañoPaginaBlendtec;
    const fin = inicio + this.tamañoPaginaBlendtec;
    return this.licuadorasBlendtec.slice(inicio, fin);
  }

  // Obtener las páginas para Blendtec
  get paginasBlendtec() {
    const totalPaginas = Math.ceil(this.licuadorasBlendtec.length / this.tamañoPaginaBlendtec);
    return Array(totalPaginas).fill(0).map((_, index) => index + 1);
  }

  // Cambiar página para Blendtec
  paginaAnteriorBlendtec() {
    if (this.paginaActualBlendtec > 1) {
      this.paginaActualBlendtec--;
    }
  }

  paginaSiguienteBlendtec() {
    if (this.paginaActualBlendtec < this.paginasBlendtec.length) {
      this.paginaActualBlendtec++;
    }
  }

  ngOnInit(): void {
    this.dataService.getMaquinaria().then((maquinasArray: any[]) => {
      this.maquinasArray = maquinasArray;
      //console.log(this.maquinasArray);

      //Filtrar las licuadoras Hamilton Beach
      this.licuadorasHamiltonBeach = this.maquinasArray.filter(maquina =>
        this.contienePalabraHamiltonBeach(maquina.name) &&
        maquina.urlArticleFirst && maquina.urlArticleFirst.trim() !== ''
      );

      //Filtrar las licuadoras Vitamix
      this.licuadorasVitamix = this.maquinasArray.filter(maquina =>
        this.contienePalabraVitamix(maquina.name) &&
        maquina.urlArticleFirst && maquina.urlArticleFirst.trim() !== ''
      );

      //Filtrar las licuadoras Blendtec
      this.licuadorasBlendtec = this.maquinasArray.filter(maquina =>
        this.contienePalabraBlendtec(maquina.name) &&
        maquina.urlArticleFirst && maquina.urlArticleFirst.trim() !== ''
      );

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

  contienePalabraHamiltonBeach(nombre: string): boolean {
    const palabrasClave = ['LICUADORA', 'HAMILTON', 'BEACH'];
    const cumpleCondicion = palabrasClave.every(palabra => nombre.toUpperCase().includes(palabra));
    console.log(nombre, cumpleCondicion); // Verifica los resultados en la consola
    return cumpleCondicion;
  }

  contienePalabraVitamix(nombre: string): boolean {
    const palabrasClave = ['LICUADORA', 'VITAMIX'];
    const cumpleCondicion = palabrasClave.every(palabra => nombre.toUpperCase().includes(palabra));
    console.log(nombre, cumpleCondicion); // Verifica los resultados en la consola
    return cumpleCondicion;
  }

  contienePalabraBlendtec(nombre: string): boolean {
    const palabrasClave = ['LICUADORA', 'BLENDTEC'];
    const cumpleCondicion = palabrasClave.every(palabra => nombre.toUpperCase().includes(palabra));
    console.log(nombre, cumpleCondicion); // Verifica los resultados en la consola
    return cumpleCondicion;
  }


}
