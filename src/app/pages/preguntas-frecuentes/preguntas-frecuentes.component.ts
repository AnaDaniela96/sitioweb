import { Component, Renderer2, ElementRef } from '@angular/core';

@Component({
  selector: 'app-preguntas-frecuentes',
  templateUrl: './preguntas-frecuentes.component.html',
  styleUrls: ['./preguntas-frecuentes.component.css']
})
export class PreguntasFrecuentesComponent {
  faqItems: any[] = [
    {
      question: 'Pregunta 1: ¿Qué es Lorem Ipsum?',
      answer: 'Respuesta 1: Lorem Ipsum es simplemente el texto de relleno de las imprentas y archivos de texto. Lorem Ipsum ha sido el texto de relleno estándar de la industria desde el año 1500.'
    },
    {
      question: 'Pregunta 2: ¿Por qué se usa Lorem Ipsum?',
      answer: 'Respuesta 2: Se usa para llenar espacios en diseños, para maquetación en presentaciones visuales y gráficas.'
    },
    // Agrega más preguntas y respuestas aquí
  ];

  constructor(private renderer: Renderer2, private el: ElementRef) { }

  toggleAnswer(index: number) {
    const collapseId = `collapse${index}`;
    const collapseElement = this.el.nativeElement.querySelector(`#${collapseId}`);
    if (collapseElement.classList.contains('show')) {
      this.renderer.removeClass(collapseElement, 'show');
    } else {
      this.renderer.addClass(collapseElement, 'show');
    }
  }
}
