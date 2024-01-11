import { Component } from '@angular/core';
import { DataService } from '../../../../utils/data.service';
import { DomSanitizer, SafeUrl } from '@angular/platform-browser';

@Component({
  selector: 'app-moleculares',
  templateUrl: './moleculares.component.html',
  styleUrls: ['./moleculares.component.css']
})
export class MolecularesComponent {

  constructor(
    private dataService: DataService,
    private sanitizer: DomSanitizer,
  ) { }

  insumosArray: any[] = [];
  extractedUrls: any;

  //Moleculares
  chillOutPearls: any[] = [];
  teaZonePerlas: any[] = [];
  chillOutJelly: any[] = [];
  teaZoneJelly: any[] = [];
  chillOutTapioca: any[] = [];
  teaZoneTapioca: any[] = [];

  //Menu
hideChillOutPearls: boolean = true;
hidesTeaZonePerlas: boolean = true;
hidesChillOutJelly: boolean = true;
hidesTeaZoneJelly: boolean = true;
hidesChillOutTapioca: boolean = true;
hidesTeaZoneTapioca: boolean = true;

  ngOnInit(): void {
    this.dataService.getInsumos().then((insumosArray: any[]) => {
      this.insumosArray = insumosArray;
      console.log('Información de insumosArray', this.insumosArray);

      // Filtra los chillOut Pearls y crea un nuevo array
      this.chillOutPearls = this.insumosArray.filter(insumo =>
        this.contienePalabrasChillOutPearls(insumo.name) &&
        insumo.urlArticleFirst && insumo.urlArticleFirst.trim() !== ''
      );

      // Filtra los TeaZone Perlas crea un nuevo array
      this.teaZonePerlas = this.insumosArray.filter(insumo =>
        this.contienePalabrasTeaZonePerlas(insumo.name) &&
        insumo.urlArticleFirst && insumo.urlArticleFirst.trim() !== ''
      );

      // Filtra los Jellys ChillOut y crea un nuevo array
      this.chillOutJelly = this.insumosArray.filter(insumo =>
        this.contienePalabrasChillOutJelly(insumo.name) &&
        insumo.urlArticleFirst && insumo.urlArticleFirst.trim() !== ''
      );

      // Filtra los Jellys Tea Zone y crea un nuevo array
      this.teaZoneJelly = this.insumosArray.filter(insumo =>
        this.contienePalabrasTeaZoneJelly(insumo.name) &&
        insumo.urlArticleFirst && insumo.urlArticleFirst.trim() !== ''
      );

      // Filtra las Tapiocas Chillout y crea un nuevo array
      this.chillOutTapioca = this.insumosArray.filter(insumo =>
        this.contienePalabrasChillOutTapioca(insumo.name) &&
        insumo.urlArticleFirst && insumo.urlArticleFirst.trim() !== ''
      );

      // Filtra las Tapiocas Chillout y crea un nuevo array
      this.teaZoneTapioca = this.insumosArray.filter(insumo =>
        this.contienePalabrasTeaZoneTapioca(insumo.name) &&
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

  contienePalabrasChillOutPearls(nombre: string): boolean {
    const palabrasClave = ['CHILLOUT', 'PEARL',];

    // Palabras a excluir
    const palabrasExcluidas = ['JAM', 'JARABE', 'TAPIOCA'];

    // Convierte el nombre a mayúsculas para hacer la coincidencia sin distinción de mayúsculas y minúsculas
    const nombreEnMayusculas = nombre.toUpperCase();

    // Verifica que todas las palabras clave estén presentes y que ninguna palabra excluida esté presente
    const cumpleCondicion = palabrasClave.every(palabra => nombreEnMayusculas.includes(palabra))
      && !palabrasExcluidas.some(excluida => nombreEnMayusculas.includes(excluida));

    //console.log(nombre, cumpleCondicion); // Verifica los resultados en la consola
    return cumpleCondicion;
  }

  contienePalabrasTeaZonePerlas(nombre: string): boolean {
    const palabrasClave = ['TEA', 'ZONE', 'PERLAS'];

    // Palabras a excluir
    const palabrasExcluidas = ['CONCENTRADO', 'TAPIOCA',];

    // Convierte el nombre a mayúsculas para hacer la coincidencia sin distinción de mayúsculas y minúsculas
    const nombreEnMayusculas = nombre.toUpperCase();

    // Verifica que todas las palabras clave estén presentes y que ninguna palabra excluida esté presente
    const cumpleCondicion = palabrasClave.every(palabra => nombreEnMayusculas.includes(palabra))
      && !palabrasExcluidas.some(excluida => nombreEnMayusculas.includes(excluida));

    //console.log(nombre, cumpleCondicion); // Verifica los resultados en la consola
    return cumpleCondicion;
  }

  contienePalabrasChillOutJelly(nombre: string): boolean {
    const palabrasClave = ['CHILLOUT', 'JELLY'];

    // Palabras a excluir
    const palabrasExcluidas = ['CONCENTRADO', 'TAPIOCA', 'JARABE'];

    // Convierte el nombre a mayúsculas para hacer la coincidencia sin distinción de mayúsculas y minúsculas
    const nombreEnMayusculas = nombre.toUpperCase();

    // Verifica que todas las palabras clave estén presentes y que ninguna palabra excluida esté presente
    const cumpleCondicion = palabrasClave.every(palabra => nombreEnMayusculas.includes(palabra))
      && !palabrasExcluidas.some(excluida => nombreEnMayusculas.includes(excluida));

    //console.log(nombre, cumpleCondicion); // Verifica los resultados en la consola
    return cumpleCondicion;
  }

  contienePalabrasTeaZoneJelly(nombre: string): boolean {
    const palabrasClave = ['TEA', 'ZONE', 'JELLY'];

    // Palabras a excluir
    const palabrasExcluidas = ['PERLAS', 'CONCENTRADO',];

    // Convierte el nombre a mayúsculas para hacer la coincidencia sin distinción de mayúsculas y minúsculas
    const nombreEnMayusculas = nombre.toUpperCase();

    // Verifica que todas las palabras clave estén presentes y que ninguna palabra excluida esté presente
    const cumpleCondicion = palabrasClave.every(palabra => nombreEnMayusculas.includes(palabra))
      && !palabrasExcluidas.some(excluida => nombreEnMayusculas.includes(excluida));

    //console.log(nombre, cumpleCondicion); // Verifica los resultados en la consola
    return cumpleCondicion;
  }

  contienePalabrasChillOutTapioca(nombre: string): boolean {
    const palabrasClave = ['TAPIOCA',];

    // Palabras a excluir
    const palabrasExcluidas = ['JELLY', 'TEA', 'ZONE'];

    // Convierte el nombre a mayúsculas para hacer la coincidencia sin distinción de mayúsculas y minúsculas
    const nombreEnMayusculas = nombre.toUpperCase();

    // Verifica que todas las palabras clave estén presentes y que ninguna palabra excluida esté presente
    const cumpleCondicion = palabrasClave.every(palabra => nombreEnMayusculas.includes(palabra))
      && !palabrasExcluidas.some(excluida => nombreEnMayusculas.includes(excluida));

    //console.log(nombre, cumpleCondicion); // Verifica los resultados en la consola
    return cumpleCondicion;
  }

  contienePalabrasTeaZoneTapioca(nombre: string): boolean {
    const palabrasClave = ['TAPIOCA', 'ZONE', 'TEA',];

    // Palabras a excluir
    const palabrasExcluidas = ['CHILOUT', 'CHILLOUT',];

    // Convierte el nombre a mayúsculas para hacer la coincidencia sin distinción de mayúsculas y minúsculas
    const nombreEnMayusculas = nombre.toUpperCase();

    // Verifica que todas las palabras clave estén presentes y que ninguna palabra excluida esté presente
    const cumpleCondicion = palabrasClave.every(palabra => nombreEnMayusculas.includes(palabra))
      && !palabrasExcluidas.some(excluida => nombreEnMayusculas.includes(excluida));

    //console.log(nombre, cumpleCondicion); // Verifica los resultados en la consola
    return cumpleCondicion;
  }

}
