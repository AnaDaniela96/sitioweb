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

  //Array filtrado

  //Jarabes
  jarabesTorani: any [] = [];

  constructor(
    private dataService: DataService,
    private sanitizer: DomSanitizer,

  ) { }

  ngOnInit(): void {
    this.dataService.getInsumos().then((insumosArray: any[]) => {
      this.insumosArray = insumosArray;
      //console.log('Información de insumosArray', this.insumosArray);

      // Filtra los Jarabes Torani Clásicos que cumplan la condición y crea un nuevo array.
      this.jarabesTorani = this.insumosArray.filter(insumo =>
        this.contienePalabrasToraniClasicoJarabe(insumo.name)
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

}
