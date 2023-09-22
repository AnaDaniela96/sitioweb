import { Component, OnInit } from '@angular/core';
import { DataService } from '../../../utils/data.service';
import { DomSanitizer, SafeUrl } from '@angular/platform-browser';

@Component({
  selector: 'app-accesorios',
  templateUrl: './accesorios.component.html',
  styleUrls: ['./accesorios.component.css']
})
export class AccesoriosComponent implements OnInit {
  accesoriosArray: any[] = [];
  extractedUrls: any;

  //Manipulación de filtros por categoría
  categorias = {
    metodoGoteo: false,
    prensaFrancesa: false,
    jarrasEspumadoras: false,
    tampers: false,
    molinos: false,
    catacion: false,
    vasos: false,
    cafeteria: false,
    metodosExtraccion: false,
    tesYteteras: false,
  };

  subcategorias = {
    metodoGoteo: {
      filtros: false,
      drippers: false,
    },

    cafeteria: {
      especieros: false,
      tazasVidrio: false,
      bagaceras: false,
      sifones: false,
      elementosAuxiliares: false,
    },

    metodosExtraccion: {
      filtros: false,
      complementosMetodos: false,
      limpieza: false,
      kitsParaPruebas: false,
      jarrasServidoras: false,
    }

  };

  //Método de goteo
  drippers: any[] = [];

  constructor(
    private dataService: DataService,
    private sanitizer: DomSanitizer,

  ) { }

  ngOnInit(): void {
    this.dataService.getAccesorios().then((accesoriosArray: any[]) => {
      this.accesoriosArray = accesoriosArray;
      console.log('Información de accesoriosArray', this.accesoriosArray);

      //Filtra los drippers y crea un nuevo array.
      this.drippers = this.accesoriosArray.filter(accesorio =>
        this.contienePalabrasDrippers(accesorio.name) &&
        accesorio.urlArticleFirst && accesorio.urlArticleFirst.trim() !== ''
      );
      
      console.log(this.drippers);

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

  //Mostrar accesorios
  contienePalabrasDrippers(nombre: string): boolean {
    const palabrasClave = ['DRIPPER',];
    return palabrasClave.every(palabra => nombre.toUpperCase().includes(palabra));
  }
}

