import { Component, AfterViewInit, QueryList, ViewChildren } from '@angular/core';
import { DataService } from '../../../../utils/data.service';
import { DomSanitizer, SafeUrl } from '@angular/platform-browser';

@Component({
  selector: 'app-prensas-francesas',
  templateUrl: './prensas-francesas.component.html',
  styleUrls: ['./prensas-francesas.component.css']
})
export class PrensasFrancesasComponent {
  constructor(
    private dataService: DataService,
    private sanitizer: DomSanitizer,
  ) { }

  accesoriosArray: any[] = [];
  extractedUrls: any;

  // Menu
  hidesLaFenice: boolean = true;
  hidesHario: boolean = true;

  mostrarCuadricula: boolean = false;
  elementosVisibles: number = 0;

  // Datos para La Fenice
  prensaFrancesaLaFenice: any[] = [];
  paginaActualLaFenice: number = 1;
  tamañoPaginaLaFenice: number = 5;

  // Datos para Hario
  prensaFrancesaHario: any[] = [];
  paginaActualHario: number = 1;
  tamañoPaginaHario: number = 5;

  @ViewChildren('tarjeta')
  tarjetas!: QueryList<any>;

  ngAfterViewInit() {
    this.elementosVisibles = this.tarjetas.length;
  }

  // Obtener los elementos de la página actual para La Fenice
  get elementosPaginaLaFenice() {
    const inicio = (this.paginaActualLaFenice - 1) * this.tamañoPaginaLaFenice;
    const fin = inicio + this.tamañoPaginaLaFenice;
    return this.prensaFrancesaLaFenice.slice(inicio, fin);
  }

  // Obtener las páginas para La Fenice
  get paginasLaFenice() {
    const totalPaginas = Math.ceil(this.prensaFrancesaLaFenice.length / this.tamañoPaginaLaFenice);
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

   // Obtener los elementos de la página actual para Hario
   get elementosPaginaHario() {
    const inicio = (this.paginaActualLaFenice - 1) * this.tamañoPaginaHario;
    const fin = inicio + this.tamañoPaginaHario;
    return this.prensaFrancesaHario.slice(inicio, fin);
  }

  // Obtener las páginas para Hario
  get paginasHario() {
    const totalPaginas = Math.ceil(this.prensaFrancesaHario.length / this.tamañoPaginaHario);
    return Array(totalPaginas).fill(0).map((_, index) => index + 1);
  }

  // Cambiar página para Hario
  paginaAnteriorHario() {
    if (this.paginaActualHario > 1) {
      this.paginaActualHario--;
    }
  }

  paginaSiguienteHario() {
    if (this.paginaActualHario < this.paginasHario.length) {
      this.paginaActualHario++;
    }
  }

  ngOnInit(): void {
    this.dataService.getAccesorios().then((accesoriosArray: any[]) => {
      this.accesoriosArray = accesoriosArray;
      //console.log('Información de accesoriosArray', this.accesoriosArray);

      //Filtrar prensa francesa La Fenice
      this.prensaFrancesaLaFenice = this.accesoriosArray.filter(maquina =>
        this.contienePalabraPrensaFrancesaLaFenice(maquina.name)
        &&
        maquina.urlArticleFirst && maquina.urlArticleFirst.trim() !== ''
      );

      //Filtrar prensa francesa Hario
      this.prensaFrancesaHario = this.accesoriosArray.filter(maquina =>
        this.contienePalabraPrensaFrancesaHario(maquina.name)
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

  contienePalabraPrensaFrancesaLaFenice(nombre: string): boolean {
    const palabrasClave = ['PRENSA', 'FRANCESA'];
    const palabrasExcluidas = ['PAPEL'];

    const nombreEnMayusculas = nombre.toUpperCase();

    const cumpleCondicion = palabrasClave.every(palabra => nombre.toUpperCase().includes(palabra))
      && !palabrasExcluidas.some(excluida => nombreEnMayusculas.includes(excluida));;
    //console.log(nombre, cumpleCondicion); // Verifica los resultados en la consola
    return cumpleCondicion;
  }


  contienePalabraPrensaFrancesaHario(nombre: string): boolean {
    const palabrasClave = ['PRENSA', 'FRANCESA'];
    const palabrasExcluidas = ['PAPEL'];

    const nombreEnMayusculas = nombre.toUpperCase();

    const cumpleCondicion = palabrasClave.every(palabra => nombre.toUpperCase().includes(palabra))
      && !palabrasExcluidas.some(excluida => nombreEnMayusculas.includes(excluida));;
    //console.log(nombre, cumpleCondicion); // Verifica los resultados en la consola
    return cumpleCondicion;
  }
}
