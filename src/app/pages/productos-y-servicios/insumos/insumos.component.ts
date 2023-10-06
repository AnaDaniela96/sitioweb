import { Component, ElementRef, OnInit } from '@angular/core';
import { DataService } from '../../../utils/data.service';
import { DomSanitizer, SafeUrl } from '@angular/platform-browser';

@Component({
  selector: 'app-insumos',
  templateUrl: './insumos.component.html',
  styleUrls: ['./insumos.component.css']
})
export class InsumosComponent implements OnInit {

  constructor(
    private dataService: DataService,
    private sanitizer: DomSanitizer,
    private elementRef: ElementRef,
  ) { }


  toggleIcon() {
    const chevronIcon = this.elementRef.nativeElement.querySelector('.chevronIcon');
    if (chevronIcon.classList.contains('fa-chevron-down')) {
      chevronIcon.classList.remove('fa-chevron-down');
      chevronIcon.classList.add('fa-chevron-right');
    } else {
      chevronIcon.classList.remove('fa-chevron-right');
      chevronIcon.classList.add('fa-chevron-down');
    }
  }


  insumosArray: any[] = [];
  extractedUrls: any;

  //Manipulación de filtros por categoría
  showJarabes: boolean = false;
  showJarabesTorani: boolean = false;
  showJarabesChillOut: boolean = false;

  showSalsas: boolean = false;
  showSalsaChillOut: boolean = false;
  showSalsasTorani: boolean = false;

  mostrarPuresYConcentrados: boolean = false;
  mostrarMoleculares: boolean = false;
  mostrarTisanas: boolean = false;
  mostrarTes: boolean = false;
  mostrarPolvos: boolean = false;

 
  //Manipulación de menú
  toggleShowAllJarabes() {
    this.showJarabes = !this.showJarabes; // Invertir el valor
    this.showJarabesChillOut = !this.showJarabesChillOut;
    this.showJarabesTorani = !this.showJarabesTorani;
  }

  //Manipulación de menú
  toggleShowAllSalsas() {
    this.showSalsas = !this.showSalsas; // Invertir el valor
    this.showSalsaChillOut  = !this.showSalsaChillOut;
    this.showSalsasTorani = !this.showSalsasTorani;
  }

  ngOnInit(): void {
    this.dataService.getInsumos().then((insumosArray: any[]) => {
      this.insumosArray = insumosArray;
      console.log('Información de insumosArray', this.insumosArray);

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

}