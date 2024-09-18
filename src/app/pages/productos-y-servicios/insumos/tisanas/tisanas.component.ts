import { Component, AfterViewInit, QueryList, ViewChildren } from '@angular/core';
import { DataService } from '../../../../utils/data.service';
import { DomSanitizer, SafeUrl } from '@angular/platform-browser';

@Component({
  selector: 'app-tisanas',
  templateUrl: './tisanas.component.html',
  styleUrls: ['./tisanas.component.css']
})
export class TisanasComponent {

  constructor(
    private dataService: DataService,
    private sanitizer: DomSanitizer,
  ) { }

  insumosArray: any[] = [];
  extractedUrls: any;

  //Menu
  hidesTisanasCafeEtrusca: boolean = true;
  hidesTisanasEuroTe: boolean = true;

  mostrarCuadricula: boolean = false;
  elementosVisibles: number = 0;

   // Datos para Café Etrusca
  tisanasFrutalesCafeEtrusca: any[] = [];
  paginaActualCafeEtrusca: number = 1;
  tamañoPaginaCafeEtrusca: number = 5;

  // Datos para EuroTe
  tisanasFrutalesEuroTe: any[] = [];
  paginaActualEuroTe: number = 1;
  tamañoPaginaEuroTe: number = 5;


  @ViewChildren('tarjeta')
  tarjetas!: QueryList<any>;

  ngAfterViewInit() {
    this.elementosVisibles = this.tarjetas.length;
  }

  // Obtener los elementos de la página actual para Café Etrusca
  get elementosPaginaCafeEtrusca() {
    const inicio = (this.paginaActualCafeEtrusca - 1) * this.tamañoPaginaCafeEtrusca;
    const fin = inicio + this.tamañoPaginaCafeEtrusca;
    return this.tisanasFrutalesCafeEtrusca.slice(inicio, fin);
  }

  // Obtener las páginas para Café Etrusca
  get paginasCafeEtrusca() {
    const totalPaginas = Math.ceil(this.tisanasFrutalesCafeEtrusca.length / this.tamañoPaginaCafeEtrusca);
    return Array(totalPaginas).fill(0).map((_, index) => index + 1);
  }

  // Cambiar página para Café Etrusca
  paginaAnteriorCafeEtrusca() {
    if (this.paginaActualCafeEtrusca > 1) {
      this.paginaActualCafeEtrusca--;
    }
  }

  paginaSiguienteCafeEtrusca() {
    if (this.paginaActualCafeEtrusca < this.paginasCafeEtrusca.length) {
      this.paginaActualCafeEtrusca++;
    }
  }

  // Obtener los elementos de la página actual para EuroTe
  get elementosPaginaEuroTe() {
    const inicio = (this.paginaActualEuroTe - 1) * this.tamañoPaginaEuroTe;
    const fin = inicio + this.tamañoPaginaEuroTe;
    return this.tisanasFrutalesEuroTe.slice(inicio, fin);
  }

  // Obtener las páginas para EuroTe
  get paginasEuroTe() {
    const totalPaginas = Math.ceil(this.tisanasFrutalesEuroTe.length / this.tamañoPaginaEuroTe);
    return Array(totalPaginas).fill(0).map((_, index) => index + 1);
  }

  // Cambiar página para EuroTe
  paginaAnteriorEuroTe() {
    if (this.paginaActualEuroTe > 1) {
      this.paginaActualEuroTe--;
    }
  }

  paginaSiguienteEuroTe() {
    if (this.paginaActualEuroTe < this.paginasEuroTe.length) {
      this.paginaActualEuroTe++;
    }
  }
  
  ngOnInit(): void {
    this.dataService.getInsumos().then((insumosArray: any[]) => {
      this.insumosArray = insumosArray;
      //console.log('Información de insumosArray', this.insumosArray);

      // Filtra las Tisanas Café Etrusca y crea un nuevo array
      this.tisanasFrutalesCafeEtrusca = this.insumosArray.filter(insumo =>
        this.contienePalabrasTisanaFrutalesCafeEtrusca(insumo.name) &&
        insumo.urlArticleFirst && insumo.urlArticleFirst.trim() !== ''
      );

      // Filtra las Tisanas EuroTe y crea un nuevo array
      this.tisanasFrutalesEuroTe = this.insumosArray.filter(insumo =>
        this.contienePalabrasTisanaFrutalesEuroTe(insumo.name) &&
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

  contienePalabrasTisanaFrutalesCafeEtrusca(nombre: string): boolean {
    const palabrasClave = ['TISANA', 'FRUTAL'];

    // Palabras a excluir
    const palabrasExcluidas = ['EUROTÉ', 'STASH',];

    // Convierte el nombre a mayúsculas para hacer la coincidencia sin distinción de mayúsculas y minúsculas
    const nombreEnMayusculas = nombre.toUpperCase();

    // Verifica que todas las palabras clave estén presentes y que ninguna palabra excluida esté presente
    const cumpleCondicion = palabrasClave.every(palabra => nombreEnMayusculas.includes(palabra))
      && !palabrasExcluidas.some(excluida => nombreEnMayusculas.includes(excluida));

    //console.log(nombre, cumpleCondicion); // Verifica los resultados en la consola
    return cumpleCondicion;
  }

  contienePalabrasTisanaFrutalesEuroTe(nombre: string): boolean {
    const palabrasClave = ['TISANA', 'EUROTÉ'];

    // Palabras a excluir
    const palabrasExcluidas = ['CAFE ETRUSCA', 'STASH',];

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
