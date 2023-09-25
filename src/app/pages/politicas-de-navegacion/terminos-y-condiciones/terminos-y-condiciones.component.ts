import { Component } from '@angular/core';

@Component({
  selector: 'app-terminos-y-condiciones',
  templateUrl: './terminos-y-condiciones.component.html',
  styleUrls: ['./terminos-y-condiciones.component.css']
})
export class TerminosYCondicionesComponent {
  showSpanishContent = true; // Mostrar contenido en español por defecto
  showEnglishContent = false; // Ocultar contenido en inglés por defecto

  changeLanguage(language: string) {
    if (language === 'english') {
      this.showSpanishContent = false;
      this.showEnglishContent = true;
    } else if (language === 'spanish'){
      this.showSpanishContent = true;
      this.showEnglishContent = false;
    }
  }
}
