import { Component, AfterViewInit, QueryList, ViewChildren } from '@angular/core';
import { DataService } from '../../../../utils/data.service';
import { DomSanitizer, SafeUrl } from '@angular/platform-browser';

@Component({
  selector: 'app-accesorio-molinos',
  templateUrl: './accesorio-molinos.component.html',
  styleUrls: ['./accesorio-molinos.component.css']
})
export class AccesorioMolinosComponent {
  constructor(
    private dataService: DataService,
    private sanitizer: DomSanitizer,
  ) { }

  accesoriosArray: any[] = [];
  extractedUrls: any;

  // Menu
  hidesLaFenice: boolean = true;
  hidesHario: boolean = true;
  hidesComandante: boolean = true;
  hidesKalita: boolean = true;
  hidesPietro: boolean = true;

  mostrarCuadricula: boolean = false;
  elementosVisibles: number = 0;

  // Datos para La Fenice
  molinosLaFenice: any[] = [];
  paginaActualLaFenice: number = 1;
  tamañoPaginaLaFenice: number = 5;

  // Datos para Hario
  molinosHario: any[] = [];
  paginaActualHario: number = 1;
  tamañoPaginaHario: number = 5;

  // Datos para Comandante
  molinosComandante: any[] = [];
  paginaActualComandante: number = 1;
  tamañoPaginaComandante: number = 5;

  // Datos para Kalita
  molinosKalita: any[] = [];
  paginaActualKalita: number = 1;
  tamañoPaginaKalita: number = 5;

  // Datos para Pietro
  molinosPietro: any[] = [];
  paginaActualPietro: number = 1;
  tamañoPaginaPietro: number = 5;

  @ViewChildren('tarjeta')
  tarjetas!: QueryList<any>;

  ngAfterViewInit() {
    this.elementosVisibles = this.tarjetas.length;
  }

  // Obtener los elementos de la página actual para La Fenice
  get elementosPaginaLaFenice() {
    const inicio = (this.paginaActualLaFenice - 1) * this.tamañoPaginaLaFenice;
    const fin = inicio + this.tamañoPaginaLaFenice;
    return this.molinosLaFenice.slice(inicio, fin);
  }

  // Obtener las páginas para La Fenice
  get paginasLaFenice() {
    const totalPaginas = Math.ceil(this.molinosLaFenice.length / this.tamañoPaginaLaFenice);
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
    return this.molinosHario.slice(inicio, fin);
  }

  // Obtener las páginas para Hario
  get paginasHario() {
    const totalPaginas = Math.ceil(this.molinosHario.length / this.tamañoPaginaHario);
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

  // Obtener los elementos de la página actual para Comandante
  get elementosPaginaComandante() {
    const inicio = (this.paginaActualComandante - 1) * this.tamañoPaginaComandante;
    const fin = inicio + this.tamañoPaginaComandante;
    return this.molinosComandante.slice(inicio, fin);
  }

  // Obtener las páginas para Comandante
  get paginasComandante() {
    const totalPaginas = Math.ceil(this.molinosComandante.length / this.tamañoPaginaComandante);
    return Array(totalPaginas).fill(0).map((_, index) => index + 1);
  }

  // Cambiar página para Comandante
  paginaAnteriorComandante() {
    if (this.paginaActualComandante > 1) {
      this.paginaActualComandante--;
    }
  }

  paginaSiguienteComandante() {
    if (this.paginaActualComandante < this.paginasComandante.length) {
      this.paginaActualComandante++;
    }
  }

  // Obtener los elementos de la página actual para Kalita
  get elementosPaginaKalita() {
    const inicio = (this.paginaActualKalita - 1) * this.tamañoPaginaKalita;
    const fin = inicio + this.tamañoPaginaKalita;
    return this.molinosKalita.slice(inicio, fin);
  }

  // Obtener las páginas para Kalita
  get paginasKalita() {
    const totalPaginas = Math.ceil(this.molinosKalita.length / this.tamañoPaginaKalita);
    return Array(totalPaginas).fill(0).map((_, index) => index + 1);
  }

  // Cambiar página para Kalita
  paginaAnteriorKalita() {
    if (this.paginaActualKalita > 1) {
      this.paginaActualKalita--;
    }
  }

  paginaSiguienteKalita() {
    if (this.paginaActualKalita < this.paginasKalita.length) {
      this.paginaActualKalita++;
    }
  }

  // Obtener los elementos de la página actual para Pietro
  get elementosPaginaPietro() {
    const inicio = (this.paginaActualPietro - 1) * this.tamañoPaginaPietro;
    const fin = inicio + this.tamañoPaginaKalita;
    return this.molinosPietro.slice(inicio, fin);
  }

  // Obtener las páginas para Pietro
  get paginasPietro() {
    const totalPaginas = Math.ceil(this.molinosPietro.length / this.tamañoPaginaPietro);
    return Array(totalPaginas).fill(0).map((_, index) => index + 1);
  }

  // Cambiar página para Pietro
  paginaAnteriorPietro() {
    if (this.paginaActualPietro > 1) {
      this.paginaActualPietro--;
    }
  }

  paginaSiguientePietro() {
    if (this.paginaActualPietro < this.paginasPietro.length) {
      this.paginaActualPietro++;
    }
  }

  ngOnInit(): void {
    this.dataService.getAccesorios().then((accesoriosArray: any[]) => {
      this.accesoriosArray = accesoriosArray;
      //console.log('Información de accesoriosArray', this.accesoriosArray);

      //Filtrar molinos La Fenice
      this.molinosLaFenice = this.accesoriosArray.filter(maquina =>
        this.contienePalabraMolinosLaFenice(maquina.name)
        &&
        maquina.urlArticleFirst && maquina.urlArticleFirst.trim() !== ''
      );

      //Filtrar molinos Hario
      this.molinosHario = this.accesoriosArray.filter(maquina =>
        this.contienePalabraMolinosHario(maquina.name)
        &&
        maquina.urlArticleFirst && maquina.urlArticleFirst.trim() !== ''
      );

      //Filtrar molinos Comandante
      this.molinosComandante = this.accesoriosArray.filter(maquina =>
        this.contienePalabraMolinosComandante(maquina.name)
        &&
        maquina.urlArticleFirst && maquina.urlArticleFirst.trim() !== ''
      );

      //Filtrar molinos Kalita
      this.molinosKalita = this.accesoriosArray.filter(maquina =>
        this.contienePalabraMolinosKalita(maquina.name)
        &&
        maquina.urlArticleFirst && maquina.urlArticleFirst.trim() !== ''
      );

      //Filtrar molinos Pietro
      this.molinosPietro = this.accesoriosArray.filter(maquina =>
        this.contienePalabraMolinosPietro(maquina.name)
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

  contienePalabraMolinosLaFenice(nombre: string): boolean {
    const palabrasClave = ['MOLINO', 'FENICE'];
    const palabrasExcluidas = ['CEPILLO'];

    const nombreEnMayusculas = nombre.toUpperCase();

    const cumpleCondicion = palabrasClave.every(palabra => nombre.toUpperCase().includes(palabra))
      && !palabrasExcluidas.some(excluida => nombreEnMayusculas.includes(excluida));;
    //console.log(nombre, cumpleCondicion); // Verifica los resultados en la consola
    return cumpleCondicion;
  }


  contienePalabraMolinosHario(nombre: string): boolean {
    const palabrasClave = ['MOLINO', 'HARIO'];
    const palabrasExcluidas = ['PAPEL'];

    const nombreEnMayusculas = nombre.toUpperCase();

    const cumpleCondicion = palabrasClave.every(palabra => nombre.toUpperCase().includes(palabra))
      && !palabrasExcluidas.some(excluida => nombreEnMayusculas.includes(excluida));;
    //console.log(nombre, cumpleCondicion); // Verifica los resultados en la consola
    return cumpleCondicion;
  }

  contienePalabraMolinosComandante(nombre: string): boolean {
    const palabrasClave = ['MOLINO', 'COMANDANTE'];
    const palabrasExcluidas = ['PAPEL'];

    const nombreEnMayusculas = nombre.toUpperCase();

    const cumpleCondicion = palabrasClave.every(palabra => nombre.toUpperCase().includes(palabra))
      && !palabrasExcluidas.some(excluida => nombreEnMayusculas.includes(excluida));;
    //console.log(nombre, cumpleCondicion); // Verifica los resultados en la consola
    return cumpleCondicion;
  }

  contienePalabraMolinosKalita(nombre: string): boolean {
    const palabrasClave = ['MOLINO', 'KALITA'];
    const palabrasExcluidas = ['PAPEL'];

    const nombreEnMayusculas = nombre.toUpperCase();

    const cumpleCondicion = palabrasClave.every(palabra => nombre.toUpperCase().includes(palabra))
      && !palabrasExcluidas.some(excluida => nombreEnMayusculas.includes(excluida));;
    //console.log(nombre, cumpleCondicion); // Verifica los resultados en la consola
    return cumpleCondicion;
  }

  contienePalabraMolinosPietro(nombre: string): boolean {
    const palabrasClave = ['MOLINO', 'PIETRO'];
    const palabrasExcluidas = ['PAPEL'];

    const nombreEnMayusculas = nombre.toUpperCase();

    const cumpleCondicion = palabrasClave.every(palabra => nombre.toUpperCase().includes(palabra))
      && !palabrasExcluidas.some(excluida => nombreEnMayusculas.includes(excluida));;
    //console.log(nombre, cumpleCondicion); // Verifica los resultados en la consola
    return cumpleCondicion;
  }
}
