import { Component } from '@angular/core';
import * as L from 'leaflet';

@Component({
  selector: 'app-donde-encontrarnos',
  templateUrl: './donde-encontrarnos.component.html',
  styleUrls: ['./donde-encontrarnos.component.css']
})
export class DondeEncontrarnosComponent {
  private map: any;
  ngOnInit() {
    this.initMap();
    this.addCustomMarker();
  }
  private initMap() {
    this.map = L.map('map').setView([26.8748005, -109.5415344], 5);
    L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png').addTo(this.map);
  }
  private addCustomMarker() {
    // Configurar el icono personalizado
    const customIcon = L.icon({
      iconUrl: 'https://cafeetrusca.com/img/LOCATION-ETRUSCA.svg',
      iconSize: [42, 42]
    });

    // Coordenadas donde deseas colocar el marcador
    const sucursales = [
      {
        lat: 19.4923666,
        lng: -99.1578552,
        nombre: 'Café Etrusca CEDIS Vallejo',
        direccion: 'Pte. 134 413, Industrial Vallejo, Azcapotzalco, 02300 Ciudad de México, CDMX',
        email : "contacto@cafeetrusca.com",
        telefono : "55 41 66 8777",
        horarios: ' L-V 09:00-18:00 HRS SABADO 09:00-13:00 HRS',
        ciudad: "Ciudad de México",
        estado : "CDMX"
    
      },
      {
        lat: 19.4257134,
        lng: -99.16132894907378,
        nombre: 'Sucursal Zona Rosa',
        direccion: 'Liverpool #91, Colonia Juárez, CDMX',
        horarios: ' L-V 09:00-18:00 HRS SABADO 09:00-13:00 HRS',
        email : "zonarosa@cafeetrusca.com",
        telefono : "(01-55) 5533 9402 / 04 / 05 / 06",
        ciudad: "Ciudad de México",
        estado : "CDMX"
      },
      {
        lat: 19.399054,
        lng: -99.134663,
        nombre: 'Sucursal Viaducto',
        direccion: 'Miguel Ángel #2-A, Colonia Moderna, CDMX',
        horarios: ' L-V 09:00-18:00 HRS SABADO 09:00-13:00 HRS',
        email : "viaducto@cafeetrusca.com",
        telefono : "(01-55) 5579 9981 / 5579 9251",
        ciudad: "Ciudad de México",
        estado : "CDMX"
      },
      {
        lat: 19.25494,
        lng: -99.6149,
        nombre: 'Sucursal Toluca',
        direccion: 'Calle Pedro Ascencio #529 Edificio 2 Local 1, Barrio de Santa Cruz, Metepec, Estado de México',
        horarios: ' L-V 09:00-18:00 HRS SABADO 09:00-13:00 HRS',
        email : "toluca@cafeetrusca.com",
        telefono : "(01 722) 238 2566 / (01 722) 238 2567",
        ciudad: "Toluca",
        estado: "Toluca"
      },
      {
        lat: 32.506225,
        lng: -116.979203,
        nombre: 'Sucursal Tijuana',
        direccion: 'Plaza Ximena, Local 5, Boulevard Díaz Ordaz #13601, Col. López Lucio',
        horarios: 'L-V 09:00-18:00 HRS SABADO 09:00-13:00 HRS',
        telefono : "(664) 681 6600 / 11 ",
        email : "tijuana@cafeetrusca.com",
        ciudad: "Tijuana",
        estado: "Baja California"
      },
      {
        lat: 20.588084,
        lng: -100.403696,
        nombre: 'Sucursal Querétaro',
        direccion: 'Tecnológico Sur #10, Colonia Niños Héroes',
        horarios: 'L-V 09:00-18:00 HRS SABADO 09:00-13:00 HRS',
        email : "queretaro@cafeetrusca.com",
        telefono : "(442) 234 5077 / 7152 / 3562 ",
        ciudad: "Querétaro",
        estado: "Querétaro"
      },
      {
        lat: 19.05133,
        lng: -98.226499,
        nombre: 'Sucursal Puebla',
        direccion: 'Boulevard Atlixco #1520, Col. La Paz, Local 1',
        horarios: 'L-V 09:00-18:00 HRS SABADO 09:00-13:00 HRS',
        email : "puebla@cafeetrusca.com",
        telefono : "(222) 230 5300 / 5896",
        ciudad: "Puebla",
        estado: "Puebla"
      },
      {
        lat: 25.661205,
        lng: -100.399708,
        nombre: 'Sucursal Monterrey',
        direccion: 'Centro comercial Los Mezquites, Av. Vasconcelos #501, Interior 1 Poniente, esquina con Zaragoza, Col. Centro, Nuevo León',
        horarios: 'L-V 09:00-18:00 HRS SABADO 09:00-13:00 HRS',
        email : "monterrey@cafeetrusca.com",
        telefono : "(81) 8338 1383 / 1857",
        ciudad: "Monterrey",
        estado: "Nuevo León"
      },
      {
        lat: 21.099884,
        lng: -101.67006,
        nombre: 'Sucursal León',
        direccion: 'Local E, Plaza San Rafael, Boulevard Juan José Torres Landa, Oriente #1005, Col. Puerta de San Rafael, Ciudad de León, Guanajuato',
        horarios: 'L-V 09:00-18:00 HRS SABADO 09:00-13:00 HRS',
        telefono : "(477) 212 3798 / 3800 / 962 221",
        email : "leon@cafeetrusca.com",
        ciudad: "León",
        estado: "Guanajuato"
      },
      {
        lat: 20.6755319,
        lng: -103.3674422,
        nombre: 'Sucursal Guadalajara',
        direccion: 'Pedro Moreno #1494, Colonia Americana, Guadalajara, Jalisco',
        horarios: 'L-V 09:00-18:00 HRS SABADO 09:00-13:00 HRS',
        email : "guadalajara@cafeetrusca.com",
        telefono : "(01-55) 5579 9981 / 5579 9251",
        ciudad: "Guadalajara",
        estado: "Jalisco"
      },
      {
        lat: 19.492441,
        lng: -99.155717,
        nombre: 'Centro de Tostión Etrusca Vallejo',
        direccion: 'Av. Poniente 134 #413, Bodega B2, entrada por un lado de las vías del tren, Industrial Vallejo, Azcapotzalco, Ciudad de México, CDMX',
        horarios: 'L-V 09:00-18:00 HRS SABADO 09:00-13:00 HRS',
        telefono : "(01-55) 5579 9860 / (01-55) 5590 5407 / (01-55)",
        email : "contacto@cafeetrusca.com",
        ciudad: "Ciudad de México",
        estado: "CDMX"
      },
       {
        lat: 19.530488,
        lng: -96.93447800000001,
        nombre: 'Sucursal Xalapa',
        direccion: 'Plaza del Teatro, Local 5 Avenida Ignacio de la llave #35, Col. Guadalupe Rodríguez',
        horarios: 'L-V 09:00-18:00 HRS SABADO 09:00-13:00 HRS',
        telefono : "(228) 812 0130 / 0660 ",
        email : "xalapa@cafeetrusca.com",
        ciudad: "Xalapa",
        estado: "Xalapa"
      }
        // Agrega más sucursales aquí...
      ];
    
    // Agregar el marcador al mapa con el icono personalizado
    sucursales.forEach((sucursal) => {
      L.marker([sucursal.lat, sucursal.lng], { icon: customIcon }).addTo(this.map);
    }); 
  }
}
