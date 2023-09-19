import { Component } from '@angular/core';


@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.css']
})
export class FooterComponent {
  // Define el número de teléfono de WhatsApp y el mensaje
  phoneNumber = '5541668777'; // Coloca tu número de teléfono de WhatsApp aquí
  message = 'Hola, ¿en qué puedo ayudarte?';

  // Función para abrir WhatsApp
  openWhatsApp() {
    const url = `https://wa.me/${this.phoneNumber}?text=${encodeURIComponent(this.message)}`;
    window.open(url, '_blank');
  }

}
