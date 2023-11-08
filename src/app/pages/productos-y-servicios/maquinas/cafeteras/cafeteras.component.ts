import { Component } from '@angular/core';
import { DataService } from 'src/app/utils/data.service';
import { DomSanitizer, SafeUrl } from '@angular/platform-browser';

@Component({
  selector: 'app-cafeteras',
  templateUrl: './cafeteras.component.html',
  styleUrls: ['./cafeteras.component.css']
})
export class CafeterasComponent {

  constructor(
    private dataService: DataService,
    private sanitizer: DomSanitizer,
  ) { }

  maquinasArray: any[] = [];
  extractedUrls: any;

  cafeteras: any[] = [];

  ngOnInit(): void {
    this.dataService.getMaquinaria().then((maquinasArray: any[]) => {
      this.maquinasArray = maquinasArray;
      //console.log(this.maquinasArray);

      //Filtrar las licuadoras
      this.cafeteras = this.maquinasArray.filter(maquina =>
        this.contienePalabraCafetera(maquina.name) &&
        maquina.urlArticleFirst && maquina.urlArticleFirst.trim() !== ''
      );

      console.log(this.cafeteras);

    }).catch((error: any) => {
      console.error('Error al obtener datos de insumo', error);
    })
  }

  //Limpia las url de las imagenes del producto
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

  contienePalabraCafetera(nombre: string): boolean {
    const palabrasClave = ['CAFETERA'];
    const cumpleCondicion = palabrasClave.every(palabra => nombre.toUpperCase().includes(palabra));
    console.log(nombre, cumpleCondicion); // Verifica los resultados en la consola
    return cumpleCondicion;
  }

}
