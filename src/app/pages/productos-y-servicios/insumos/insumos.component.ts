import { Component, OnInit } from '@angular/core';
import { DataService } from 'src/app/utils/data.service';
import { DomSanitizer, SafeUrl } from '@angular/platform-browser';

@Component({
  selector: 'app-insumos',
  templateUrl: './insumos.component.html',
  styleUrls: ['./insumos.component.css']
})
export class InsumosComponent implements OnInit {
  insumosArray: any[] = [];
  extractedUrls: any;

  //Manipulación de filtros por categoría
  mostrarJarabes: boolean = false;
  mostrarSalsas: boolean = false;

  //Jarabes
  jarabesChillOut: any[] = [];
  jarabesToraniClasico: any[] = [];
  jarabesPuremadeTorani: any[] = [];
  jarabesZeroSugar: any[] = [];
  jarabesSugarFree: any[] = [];

  //Salsas
  salsasTorani: any[] = [];
  salsasChillOut: any[] = [];

  //Purés y concentrados
  chillOutFruitConcentrados: any[] = [];
  chillOutJamConcentrados: any[] = [];
  pureToraniRealSmoothieMix: any[] = [];
 

  constructor(
    private dataService: DataService,
    private sanitizer: DomSanitizer,

  ) { }

  ngOnInit(): void {
    this.dataService.getInsumos().then((insumosArray: any[]) => {
      this.insumosArray = insumosArray;
      console.log('Información de insumosArray', this.insumosArray);

      //Filtra los Jarabes Chillout y crea un nuevo array.
      this.jarabesChillOut = this.insumosArray.filter(insumo =>
        this.contienePalabrasChillOutJarabe(insumo.name) &&
        insumo.urlArticleFirst && insumo.urlArticleFirst.trim() !== ''
      );

      //Filtra los Jarabes Clásico Torani y crea un nuevo array.
      this.jarabesToraniClasico = this.insumosArray.filter(insumo =>
        this.contienePalabrasToraniClasicoJarabe(insumo.name) &&
        insumo.urlArticleFirst && insumo.urlArticleFirst.trim() !== ''
      );

      //Filtra los Jarabes Puremade Torani y crea un nuevo array.
      this.jarabesPuremadeTorani = this.insumosArray.filter(insumo =>
        this.contienePalabrasToraniPuramadeJarabe(insumo.name) &&
        insumo.urlArticleFirst && insumo.urlArticleFirst.trim() !== ''
      );

      //Filtra los Jarabes Zugar free y crea un nuevo array.
      this.jarabesZeroSugar = this.insumosArray.filter(insumo =>
        this.contienePalabrasToraniZeroSugar(insumo.name) &&
        insumo.urlArticleFirst && insumo.urlArticleFirst.trim() !== ''
      );

      //Filtra los Jarabes Zero Sugar y crea un nuevo array.
      this.jarabesSugarFree = this.insumosArray.filter(insumo =>
        this.contienePalabrasToraniSugarFree(insumo.name) &&
        insumo.urlArticleFirst && insumo.urlArticleFirst.trim() !== ''
      );

      //Filtra las salsas Torani y crea un nuevo array.
      this.salsasTorani = this.insumosArray.filter(insumo =>
        this.contienePalabrasToraniSalsa(insumo.name) &&
        insumo.urlArticleFirst && insumo.urlArticleFirst.trim() !== ''
      );

      //Filtra las salsas ChillOut y crea un nuevo array.
      this.salsasChillOut = this.insumosArray.filter(insumo =>
        this.contienePalabrasChillOutSalsa(insumo.name) &&
        insumo.urlArticleFirst && insumo.urlArticleFirst.trim() !== ''
      );

      //Filtra los concentrados ChillOut Fruit y crea un nuevo array.
      this.chillOutFruitConcentrados = this.insumosArray.filter(insumo =>
        this.contienePalabrasChillOutFruit(insumo.name) &&
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

      console.log(this.pureToraniRealSmoothieMix);

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

  //Mostrar Jarabes 
  contienePalabrasChillOutJarabe(nombre: string): boolean {
    const palabrasClave = ['JARABE', 'AGAVE', 'CHILLOUT'];
    return palabrasClave.every(palabra => nombre.toUpperCase().includes(palabra));
  }

  contienePalabrasToraniClasicoJarabe(nombre: string): boolean {
    const palabrasClave = ['TORANI', 'CLASICO', 'JARABE'];
    const cumpleCondicion = palabrasClave.every(palabra => nombre.toUpperCase().includes(palabra));
    //console.log(nombre, cumpleCondicion); // Verifica los resultados en la consola
    return cumpleCondicion;
  }

  contienePalabrasToraniPuramadeJarabe(nombre: string): boolean {
    const palabrasClave = ['TORANI', 'PUREMADE', 'JARABE'];

    // Palabras a excluir
    const palabrasExcluidas = ['ZERO', 'SUGAR'];

    // Convierte el nombre a mayúsculas para hacer la coincidencia sin distinción de mayúsculas y minúsculas
    const nombreEnMayusculas = nombre.toUpperCase();

    // Verifica que todas las palabras clave estén presentes y que ninguna palabra excluida esté presente
    const cumpleCondicion = palabrasClave.every(palabra => nombreEnMayusculas.includes(palabra))
      && !palabrasExcluidas.some(excluida => nombreEnMayusculas.includes(excluida));

    //console.log(nombre, cumpleCondicion); // Verifica los resultados en la consola
    return cumpleCondicion;
  }

  contienePalabrasToraniZeroSugar(nombre: string): boolean {
    const palabrasClave = ['TORANI', 'ZERO', 'SUGAR', 'JARABE'];

    // Convierte el nombre a mayúsculas para hacer la coincidencia sin distinción de mayúsculas y minúsculas
    const nombreEnMayusculas = nombre.toUpperCase();

    // Verifica que todas las palabras clave estén presentes y que ninguna palabra excluida esté presente
    const cumpleCondicion = palabrasClave.every(palabra => nombreEnMayusculas.includes(palabra));

    //console.log(nombre, cumpleCondicion); // Verifica los resultados en la consola
    return cumpleCondicion;
  }

  contienePalabrasToraniSugarFree(nombre: string): boolean {
    const palabrasClave = ['TORANI', 'FREE', 'SUGAR', 'JARABE'];

    // Convierte el nombre a mayúsculas para hacer la coincidencia sin distinción de mayúsculas y minúsculas
    const nombreEnMayusculas = nombre.toUpperCase();

    // Verifica que todas las palabras clave estén presentes y que ninguna palabra excluida esté presente
    const cumpleCondicion = palabrasClave.every(palabra => nombreEnMayusculas.includes(palabra));

    //console.log(nombre, cumpleCondicion); // Verifica los resultados en la consola
    return cumpleCondicion;
  }

  contienePalabrasToraniSalsa(nombre: string): boolean {
    const palabrasClave = ['TORANI', 'SALSA'];

    // Convierte el nombre a mayúsculas para hacer la coincidencia sin distinción de mayúsculas y minúsculas
    const nombreEnMayusculas = nombre.toUpperCase();

    // Verifica que todas las palabras clave estén presentes y que ninguna palabra excluida esté presente
    const cumpleCondicion = palabrasClave.every(palabra => nombreEnMayusculas.includes(palabra));

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

  contienePalabrasChillOutFruit(nombre: string): boolean {
    const palabrasClave = ['CHILLOUT', 'FRUIT', 'CONCENTRADO'];

    // Palabras a excluir
    const palabrasExcluidas = ['CHAMOY'];

    // Convierte el nombre a mayúsculas para hacer la coincidencia sin distinción de mayúsculas y minúsculas
    const nombreEnMayusculas = nombre.toUpperCase();

    // Verifica que todas las palabras clave estén presentes y que ninguna palabra excluida esté presente
    const cumpleCondicion = palabrasClave.every(palabra => nombreEnMayusculas.includes(palabra))
      && !palabrasExcluidas.some(excluida => nombreEnMayusculas.includes(excluida));

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
}
