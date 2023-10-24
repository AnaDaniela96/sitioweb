import { Component } from '@angular/core';
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
  
  //Purés y concentrados
  chillOutFruitConcentrados: any[] = [];
  chillOutJamConcentrados: any[] = [];
  pureToraniRealSmoothieMix: any[] = [];
  pureToraniPureeBlend: any[] = [];
  concentradoTeaZone: any[] = [];

  //manipulación del menú
  hideschillOutFruit: boolean = true;
  hideschillOutJam: boolean = true;
  hidesToraniRealSmoothieMix: boolean = false;
  hidesToraniPureeBlend: boolean = false;
  hidesTeaZone: boolean = false;

  ngOnInit(): void {
    this.dataService.getInsumos().then((insumosArray: any[]) => {
      this.insumosArray = insumosArray;
      console.log('Información de insumosArray', this.insumosArray);

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
