import { Component, AfterViewInit, QueryList, ViewChildren } from '@angular/core';
import { DataService } from '../../../../utils/data.service';
import { DomSanitizer, SafeUrl } from '@angular/platform-browser';

@Component({
  selector: 'app-cafeteras',
  templateUrl: './cafeteras.component.html',
  styleUrls: ['./cafeteras.component.css']
})
export class CafeterasComponent {

  constructor(
    private dataService: DataService,
    private sanitizer: DomSanitizer,
  ) { }

  maquinasArray: any[] = [];
  extractedUrls: any;

  // Menu 
  hidesReneka: boolean = true;
  hidesMelitta: boolean = true;

  mostrarCuadricula: boolean = false;
  elementosVisibles: number = 0;

  // Datos para maquinas RENEKA
  cafeterasReneka: any[] = [];
  paginaActualReneka: number = 1;
  tamañoPaginaReneka: number = 2;

  // Datos para maquinas Melitta
  cafeterasMelitta: any[] = [];
  paginaActualMelitta: number = 1;
  tamañoPaginaMelitta: number = 2;

  @ViewChildren('tarjeta')
  tarjetas!: QueryList<any>;

  ngAfterViewInit() {
    this.elementosVisibles = this.tarjetas.length;
  }

  // Obtener los elementos de la página actual para Reneka
  get elementosPaginaReneka() {
    const inicio = (this.paginaActualReneka - 1) * this.tamañoPaginaReneka;
    const fin = inicio + this.tamañoPaginaReneka;
    return this.cafeterasReneka.slice(inicio, fin);
  }

  // Obtener las páginas para Reneka
  get paginasReneka() {
    const totalPaginas = Math.ceil(this.cafeterasReneka.length / this.tamañoPaginaReneka);
    return Array(totalPaginas).fill(0).map((_, index) => index + 1);
  }

  // Cambiar página para Reneka
  paginaAnteriorReneka() {
    if (this.paginaActualReneka > 1) {
      this.paginaActualReneka--;
    }
  }

  paginaSiguienteReneka() {
    if (this.paginaActualReneka < this.paginasReneka.length) {
      this.paginaActualReneka++;
    }
  }

  // Obtener los elementos de la página actual para Melitta
  get elementosPaginaMelitta() {
    const inicio = (this.paginaActualMelitta - 1) * this.tamañoPaginaMelitta;
    const fin = inicio + this.tamañoPaginaMelitta;
    return this.cafeterasMelitta.slice(inicio, fin);
  }

  // Obtener las páginas para Melittaa
  get paginasMelitta() {
    const totalPaginas = Math.ceil(this.cafeterasMelitta.length / this.tamañoPaginaMelitta);
    return Array(totalPaginas).fill(0).map((_, index) => index + 1);
  }

  // Cambiar página para Melitta
  paginaAnteriorMelitta() {
    if (this.paginaActualMelitta > 1) {
      this.paginaActualMelitta--;
    }
  }

  paginaSiguienteMelitta() {
    if (this.paginaActualMelitta < this.paginasMelitta.length) {
      this.paginaActualMelitta++;
    }
  }

  ngOnInit(): void {
    this.dataService.getMaquinaria().then((maquinasArray: any[]) => {
      this.maquinasArray = maquinasArray;
      console.log(this.maquinasArray);

      //Filtrar las cafeteras Reneka
      this.cafeterasReneka = this.maquinasArray.filter(maquina =>
        this.contienePalabraCafeteraReneka(maquina.name)
        &&
        maquina.urlArticleFirst && maquina.urlArticleFirst.trim() !== ''
      );

      //Filtrar las cafeteras Melitta
      this.cafeterasMelitta = this.maquinasArray.filter(maquina =>
        this.contienePalabraCafeteraMelitta(maquina.name)
        &&
        maquina.urlArticleFirst && maquina.urlArticleFirst.trim() !== ''
      );

      //console.log(this.cafeterasReneka);

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

  contienePalabraCafeteraReneka(nombre: string): boolean {
    const palabrasClave = ['CAFETERA', 'RENEKA'];
    const cumpleCondicion = palabrasClave.every(palabra => nombre.toUpperCase().includes(palabra));
    //console.log(nombre, cumpleCondicion); // Verifica los resultados en la consola
    return cumpleCondicion;
  }

  contienePalabraCafeteraMelitta(nombre: string): boolean {
    const palabrasClave = ['CAFETERA', 'MELITTA'];
    const cumpleCondicion = palabrasClave.every(palabra => nombre.toUpperCase().includes(palabra));
    //console.log(nombre, cumpleCondicion); // Verifica los resultados en la consola
    return cumpleCondicion;
  }

}
