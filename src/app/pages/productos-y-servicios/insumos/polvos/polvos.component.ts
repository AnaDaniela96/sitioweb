import { Component } from '@angular/core';
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

   //Polvos
   polvosChillOutMix: any[] = [];
   polvosChillOutJustFruit: any[] = [];
   polvosChillOutActive: any[] = [];
   polvosDavidRio: any[] = [];
   polvosSuperBlends: any[] = [];
   polvosTeaZone: any[] = [];
   polvosAiya:  any[] = [];
   polvosDonGustavo:  any[] = [];
   polvosMocafe:  any[] = [];
   polvosCoolCap:  any[] = [];

  hidesChillOutMix : boolean = true;
  hidesChillOutJustFruit : boolean = true;
  hidesChillOutActive : boolean = true;
  hidesDavidRio : boolean = true;
  hidesSuperBlends : boolean = true;
  hidesTeaZone: boolean = false;
  hidesAiya : boolean = false;
  hidesDonGustavo : boolean = false;   
  hidesMocafe : boolean = false;
  hidesCoolCap : boolean = false;

   ngOnInit(): void {
    this.dataService.getInsumos().then((insumosArray: any[]) => {
      this.insumosArray = insumosArray;
      console.log('Información de insumosArray', this.insumosArray);

      // Filtra los ChillOut Mix y crea un nuevo array
      this.polvosChillOutMix = this.insumosArray.filter(insumo =>
        this.contienePalabrasChillOutMix(insumo.name) &&
        insumo.urlArticleFirst && insumo.urlArticleFirst.trim() !== ''
      );

      // Filtra los ChillOut Mix y crea un nuevo array
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

       // Filtra los Mocafe crea un nuevo array
       this.polvosCoolCap = this.insumosArray.filter(insumo =>
        this.contienePalabrasCoolCapp(insumo.name) &&
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
}
