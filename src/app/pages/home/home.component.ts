import { Component, OnInit, Renderer2, ElementRef } from '@angular/core';
import * as AOS from 'aos'; 

interface CarouselItem {
  imageSrc: string;
}

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['home.component.css'],
  styles: ['h1 { font-weight: normal; color : red !important; }']
})
export class HomeComponent implements OnInit {

  ngOnInit() {
    AOS.init();
    this.updateCarousel();
  }

  carouselItems: CarouselItem[] = [
    { imageSrc: '../../../assets/catalogos/catalogo-cafe-etrusca-2023-2024.webp' },
    { imageSrc: '../../../assets/catalogos/portada-recetario-etrusca-2021-thumbnails.webp' },
    { imageSrc: '../../../assets/catalogos/CATALOGO_BARISTA CHAMP 2023-min-01.png' },
    { imageSrc: '../../../assets/catalogos/boletin-etrusca-nov-dic-2023.webp' },
    { imageSrc: '../../../assets/catalogos/portada-tallerescursos-oct-dic.webp' },
    { imageSrc: '../../../assets/catalogos/catalogo-cafe-etrusca-2023-2024.webp' },
    { imageSrc: 'https://i1.sndcdn.com/artworks-000064920701-xrez5z-t500x500.jpg' },
  ];

  selectedIndex = 3; // Índice inicial seleccionado

  getItemClasses(index: number): string {
    if (index === this.selectedIndex) {
      return 'selected';
    } else if (index === this.selectedIndex - 1) {
      return 'prev';
    } else if (index === this.selectedIndex - 2) {
      return 'prevLeftSecond';
    } else if (index === this.selectedIndex + 1) {
      return 'next';
    } else if (index === this.selectedIndex + 2) {
      return 'nextRightSecond';
    } else if (index < this.selectedIndex - 2) {
      return 'hideLeft';
    } else if (index > this.selectedIndex + 2) {
      return 'hideRight';
    } else {
      return '';
    }
  }

  updateCarousel() {
    this.carouselItems.forEach((item, index) => {
      const element = document.getElementById(`carousel-item-${index}`);
      if (element) {
        element.className = this.getItemClasses(index);
      }
    });
  }

  moveToSelected(element: HTMLElement | string): void {
    // Lógica para moverse a la imagen seleccionada
    // Actualizar this.selectedIndex según sea necesario
    this.updateCarousel();
  }

  onKeydown(event: KeyboardEvent): void {
    // Lógica para manejar eventos de teclado
    // Llamar a moveToSelected según sea necesario
  }

  onClickPrev(): void {
    // Lógica para manejar clic en "Prev"
    // Llamar a moveToSelected según sea necesario
  }

  onClickNext(): void {
    // Lógica para manejar clic en "Next"
    // Llamar a moveToSelected según sea necesario
  }                                           
}
