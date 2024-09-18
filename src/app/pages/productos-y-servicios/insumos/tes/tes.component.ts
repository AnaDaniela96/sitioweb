import { Component, AfterViewInit, QueryList, ViewChildren } from '@angular/core';
import { DataService } from '../../../../utils/data.service';
import { DomSanitizer, SafeUrl } from '@angular/platform-browser';

@Component({
  selector: 'app-tes',
  templateUrl: './tes.component.html',
  styleUrls: ['./tes.component.css']
})
export class TesComponent {

  constructor(
    private dataService: DataService,
    private sanitizer: DomSanitizer,
  ) { }

  insumosArray: any[] = [];
  extractedUrls: any;

  //Menu
  hidesTeEurote: boolean = true;
  hidesTeStash: boolean = true;

  //Tes 
  // teEurote: any[] = [];
  // teStash: any[] = [];

  mostrarCuadricula: boolean = false;
  elementosVisibles: number = 0;

   // Datos para Eurote
  teEurote: any[] = [];
  paginaActualEuroTe: number = 1;
  tamañoPaginaEuroTe: number = 5;

  // Datos para STASH
  teStash: any[] = [];
  paginaActualStash: number = 1;
  tamañoPaginaStash: number = 5;

  @ViewChildren('tarjeta')
  tarjetas!: QueryList<any>;

  ngAfterViewInit() {
    this.elementosVisibles = this.tarjetas.length;
  }

    // Obtener los elementos de la página actual para EuroTe
  get elementosPaginaTeEuroTe() {
    const inicio = (this.paginaActualEuroTe - 1) * this.tamañoPaginaEuroTe;
    const fin = inicio + this.tamañoPaginaEuroTe;
    return this.teEurote.slice(inicio, fin);
  }

  // Obtener las páginas para Café Etrusca
  get paginasEuroTe() {
    const totalPaginas = Math.ceil(this.teEurote.length / this.tamañoPaginaEuroTe);
    return Array(totalPaginas).fill(0).map((_, index) => index + 1);
  }

  // Cambiar página para para EuroTe
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

  // Obtener los elementos de la página actual para STASH
  get elementosPaginaStash() {
    const inicio = (this.paginaActualStash - 1) * this.tamañoPaginaStash;
    const fin = inicio + this.tamañoPaginaStash;
    return this.teStash.slice(inicio, fin);
  }

  // Obtener las páginas para EuroTe
  get paginasStash() {
    const totalPaginas = Math.ceil(this.teStash.length / this.tamañoPaginaStash);
    return Array(totalPaginas).fill(0).map((_, index) => index + 1);
  }

  // Cambiar página para EuroTe
  paginaAnteriorStash() {
    if (this.paginaActualStash > 1) {
      this.paginaActualStash--;
    }
  }

  paginaSiguienteStash() {
    if (this.paginaActualStash < this.paginasStash.length) {
      this.paginaActualStash++;
    }
  }



  ngOnInit(): void {
    this.dataService.getInsumos().then((insumosArray: any[]) => {
      this.insumosArray = insumosArray;
      //console.log('Información de insumosArray', this.insumosArray);

      // Filtra los Tes EuroTe y crea un nuevo array
      this.teEurote = this.insumosArray.filter(insumo =>
        this.contienePalabrasTeEuroTe(insumo.name) &&
        insumo.urlArticleFirst && insumo.urlArticleFirst.trim() !== ''
      );

      // Filtra los Te Stash y crea un nuevo array
      this.teStash = this.insumosArray.filter(insumo =>
        this.contienePalabrasTeStash(insumo.name) &&
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

  contienePalabrasTeEuroTe(nombre: string): boolean {
    const palabrasClave = ['TE', 'EUROTÉ'];

    // Palabras a excluir
    const palabrasExcluidas = ['TISANA', 'STASH',];

    // Convierte el nombre a mayúsculas para hacer la coincidencia sin distinción de mayúsculas y minúsculas
    const nombreEnMayusculas = nombre.toUpperCase();

    // Verifica que todas las palabras clave estén presentes y que ninguna palabra excluida esté presente
    const cumpleCondicion = palabrasClave.every(palabra => nombreEnMayusculas.includes(palabra))
      && !palabrasExcluidas.some(excluida => nombreEnMayusculas.includes(excluida));

    //console.log(nombre, cumpleCondicion); // Verifica los resultados en la consola
    return cumpleCondicion;

    // Verifica que todas las palabras clave estén presentes y que ninguna palabra excluida esté presente
  }

  contienePalabrasTeStash(nombre: string): boolean {
    const palabrasClave = ['STASH', 'PREMIUM'];

    // Palabras a excluir
    const palabrasExcluidas = ['TISANA', 'EUROTE', 'DESCAFEINADO'];

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
