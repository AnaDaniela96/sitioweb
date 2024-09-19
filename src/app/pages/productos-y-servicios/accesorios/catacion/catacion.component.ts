import { Component, AfterViewInit, QueryList, ViewChildren } from '@angular/core';
import { DataService } from '../../../../utils/data.service';
import { DomSanitizer, SafeUrl } from '@angular/platform-browser';

@Component({
  selector: 'app-catacion',
  templateUrl: './catacion.component.html',
  styleUrls: ['./catacion.component.css']
})
export class CatacionComponent {

  constructor(
    private dataService: DataService,
    private sanitizer: DomSanitizer,
  ) { }

  accesoriosArray: any[] = [];
  extractedUrls: any;

  // Menu
  hidesLaFenice: boolean = true;
  hidesBaristaSpace: boolean = true;

  mostrarCuadricula: boolean = false;
  elementosVisibles: number = 0;

  // Datos para La Fenice
  catacionLaFenice: any[] = [];
  paginaActualLaFenice: number = 1;
  tamañoPaginaLaFenice: number = 5;

  // Datos para Barista Space
  catacionBaristaSpace: any[] = [];
  paginaActualBaristaSpace: number = 1;
  tamañoPaginaBaristaSpace: number = 5;

  @ViewChildren('tarjeta')
  tarjetas!: QueryList<any>;

  ngAfterViewInit() {
    this.elementosVisibles = this.tarjetas.length;
  }

   // Obtener los elementos de la página actual para La Fenice
   get elementosPaginaLaFenice() {
    const inicio = (this.paginaActualLaFenice - 1) * this.tamañoPaginaLaFenice;
    const fin = inicio + this.tamañoPaginaLaFenice;
    return this.catacionLaFenice.slice(inicio, fin);
  }

  // Obtener las páginas para La Fenice
  get paginasLaFenice() {
    const totalPaginas = Math.ceil(this.catacionLaFenice.length / this.tamañoPaginaLaFenice);
    return Array(totalPaginas).fill(0).map((_, index) => index + 1);
  }

  // Cambiar página para La Fenice
  paginaAnteriorLaFenice() {
    if (this.paginaActualLaFenice > 1) {
      this.paginaActualLaFenice--;
    }
  }

  paginaSiguienteLaFenice() {
    if (this.paginaActualLaFenice < this.paginasLaFenice.length) {
      this.paginaActualLaFenice++;
    }
  }

  // Obtener los elementos de la página actual para Barista Space
  get elementosPaginaBaristaSpace() {
    const inicio = (this.paginaActualBaristaSpace - 1) * this.tamañoPaginaBaristaSpace;
    const fin = inicio + this.tamañoPaginaBaristaSpace;
    return this.catacionBaristaSpace.slice(inicio, fin);
  }

  // Obtener las páginas para Barista Space
  get paginasBaristaSpace() {
    const totalPaginas = Math.ceil(this.catacionBaristaSpace.length / this.tamañoPaginaBaristaSpace);
    return Array(totalPaginas).fill(0).map((_, index) => index + 1);
  }

  // Cambiar página para Barista Space
  paginaAnteriorBaristaSpace() {
    if (this.paginaActualBaristaSpace > 1) {
      this.paginaActualBaristaSpace--;
    }
  }

  paginaSiguienteBaristaSpace() {
    if (this.paginaActualBaristaSpace < this.paginasBaristaSpace.length) {
      this.paginaActualBaristaSpace++;
    }
  }

  ngOnInit(): void {
    this.dataService.getAccesorios().then((accesoriosArray: any[]) => {
      this.accesoriosArray = accesoriosArray;
      //console.log('Información de accesoriosArray', this.accesoriosArray);

      //Filtrar catacion La Fenice
      this.catacionLaFenice = this.accesoriosArray.filter(maquina =>
        this.contienePalabraCatacionLaFenice(maquina.name)
        &&
        maquina.urlArticleFirst && maquina.urlArticleFirst.trim() !== ''
      );

      //Filtrar catacion Barista Space
      this.catacionBaristaSpace = this.accesoriosArray.filter(maquina =>
        this.contienePalabraCatacionBaristaSpace(maquina.name)
        &&
        maquina.urlArticleFirst && maquina.urlArticleFirst.trim() !== ''
      );

      //console.log(this.accesoriosArray);

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

  contienePalabraCatacionLaFenice(nombre: string): boolean {
    const palabrasClave = ['CUCHARA', 'FENICE'];
    const palabrasExcluidas = ['PAPEL'];

    const nombreEnMayusculas = nombre.toUpperCase();

    const cumpleCondicion = palabrasClave.every(palabra => nombre.toUpperCase().includes(palabra))
      && !palabrasExcluidas.some(excluida => nombreEnMayusculas.includes(excluida));;
    //console.log(nombre, cumpleCondicion); // Verifica los resultados en la consola
    return cumpleCondicion;
  }

  contienePalabraCatacionBaristaSpace(nombre: string): boolean {
    const palabrasClave = ['CUCHARA', 'BARISTA', 'SPACE'];
    const palabrasExcluidas = ['PAPEL'];

    const nombreEnMayusculas = nombre.toUpperCase();

    const cumpleCondicion = palabrasClave.every(palabra => nombre.toUpperCase().includes(palabra))
      && !palabrasExcluidas.some(excluida => nombreEnMayusculas.includes(excluida));;
    //console.log(nombre, cumpleCondicion); // Verifica los resultados en la consola
    return cumpleCondicion;
  }
}
