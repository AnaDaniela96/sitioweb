import { Component } from '@angular/core';
import * as L from 'leaflet';

@Component({
  selector: 'app-donde-encontrarnos',
  templateUrl: './donde-encontrarnos.component.html',
  styleUrls: ['./donde-encontrarnos.component.css']
})
export class DondeEncontrarnosComponent {
  private map: any;
  private unicaSucursalMarker : any;
  private ciudadSelect: any;
  private sucursalSelect : any;
 
  private sucursales: any[] = []; // Define the sucursales array at the class level

  ngOnInit() {
    this.sucursales = [
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
    this.initMap();
    this.changeSucursal();
    this.addCustomMarker();
   
  }
  private initMap() {
    this.map = L.map('map').setView([26.8748005, -109.5415344], 5);
    L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png').addTo(this.map);
  }
  private addCustomMarker() {
    // Configurar el icono personalizado
   // Crear los iconos personalizados
   const customIcon = L.icon({
      iconUrl: 'https://cafeetrusca.com/img/LOCATION-ETRUSCA.svg',
      iconSize: [42, 42], // Cambia el tamaño del ícono si es necesario
    });

    const markerIconUrl = 'https://cafeetrusca.com/img/LOCATION-ETRUSCA.svg'; // Reemplaza con la URL de la imagen del marcador
    const markerIcon = L.icon({
      iconUrl: markerIconUrl,
      iconSize: [42, 42], // Cambia el tamaño del ícono del marcador si es necesario
    });

    // Agregar marcadores para cada sucursal con ambos íconos personalizados
    this.sucursales.forEach((sucursal) => {
      const popupContent =
        '<b>' + sucursal.nombre + '</b><br>' + sucursal.direccion + '<br>' + sucursal.horarios;

      const marker = L.marker([sucursal.lat, sucursal.lng], { icon: customIcon }).addTo(this.map);
      marker.bindPopup(popupContent);

      const logoMarker = L.marker([sucursal.lat, sucursal.lng], { icon: markerIcon, zIndexOffset: -1 }).addTo(this.map);

      // Si solo hay una sucursal, guardamos la referencia al marcador de esa sucursal
      if (this.sucursales.length === 1) {
        this.unicaSucursalMarker = marker;
      }
    });
  }

  private changeSucursal() {
    this.sucursalSelect = document.getElementById('sucursalSelect');
    this.ciudadSelect = document.getElementById('ciudadSelect');

    this.ciudadSelect.addEventListener('change', () => {
      const selectedCiudad = this.ciudadSelect.value;

      const sucursalesFiltradas = this.sucursales.filter((sucursal) => {
        return sucursal.ciudad === selectedCiudad;
      });

      const sucursalesOptions = sucursalesFiltradas.map((sucursal) => {
        return `<option value="${sucursal.nombre}">${sucursal.nombre}</option>`;
      });
      this.sucursalSelect.addEventListener('change', () => {
        const selectedSucursal = this.sucursalSelect.value; // Obtener la sucursal seleccionada
      
        // Filtrar las sucursales según la sucursal seleccionada
        const sucursalSeleccionada = this.sucursales.find((sucursal) => {
          return sucursal.nombre === selectedSucursal;
        });
      
        // Si encontramos la sucursal seleccionada en el arreglo de sucursales
        if (sucursalSeleccionada) {
          // Obtenemos las coordenadas de la sucursal seleccionada
          const latitud = sucursalSeleccionada.lat;
          const longitud = sucursalSeleccionada.lng;
      
          // Centramos la vista del mapa en las coordenadas de la sucursal seleccionada
          this.map.setView([latitud, longitud], 15); // Puedes ajustar el nivel de zoom (último parámetro) según tus necesidades
  
          // You can call your actualizarInformacionSucursal function here if you have defined it.
          // actualizarInformacionSucursal(sucursalSeleccionada);
        }
      });
      this.sucursalSelect.innerHTML = sucursalesOptions.join('');

      const ciudadesCoordenadas: { [key: string]: [number, number] } = {
        'Ciudad de México': [19.4326, -99.1332],
        //'Zapopan': [20.6769, -103.3482],
        'Guadalajara': [20.6597, -103.3496],
        'Monterrey': [25.6866, -100.3161],
        'Puebla': [19.0414, -98.2063],
        'Querétaro': [20.5881, -100.3880],
        'Tijuana': [32.5149, -117.0382],
        'León': [21.1606, -101.7116],
        'Toluca': [19.2826, -99.6557],
      };

      const coordenadas = ciudadesCoordenadas[selectedCiudad];
      console.log(selectedCiudad);
      console.log(coordenadas);

      if (coordenadas) {
        this.map.setView(coordenadas, 12);
        // Actualiza la información de la sucursal
        this.actualizarInformacionSucursal(sucursalesFiltradas[0]);
      } else {
        this.map.setView([26.8748005, -109.5415344], 5);
        const sucursalesFiltradasDefault = this.sucursales.filter((sucursal) => {
          return sucursal.nombre === 'Café Etrusca CEDIS Vallejo';
        });
        // Actualiza la información de la sucursal predeterminada
        this.actualizarInformacionSucursal(sucursalesFiltradasDefault[0]);
      }

      if (sucursalesFiltradas.length === 1) {
        const unicaSucursal = sucursalesFiltradas[0];
        const latitud = unicaSucursal.lat;
        const longitud = unicaSucursal.lng;
        this.actualizarInformacionSucursal(unicaSucursal);
        this.map.setView([latitud, longitud], 15);
        // Abre el globo (popup) automáticamente para esa sucursal si solo hay una
        if (unicaSucursal.length === 1 && this.unicaSucursalMarker) {
          this.unicaSucursalMarker.openPopup();
        }
      }
    });
  }
  private actualizarInformacionSucursal(sucursal: any) {
    try {
      console.log(sucursal);
      // Aquí puedes realizar la lógica para actualizar la información de la sucursal
      // Por ejemplo, puedes cambiar el horario, dirección, teléfono, etc., según la selección
  
      // Ejemplo: Actualizar el horario
      const horarios = document.querySelector('.horario');
      if (horarios) {
        horarios.textContent = sucursal.horarios;
      }
  
      // Ejemplo: Actualizar la dirección
      const direccion = document.querySelector('.direccion');
      if (direccion) {
        direccion.textContent = sucursal.direccion;
      }
  
      // Selecciona el elemento con la clase "email" utilizando querySelector
      const email = document.querySelector('.email');
      if (email) {
        // Limpia el contenido del elemento padre
        email.innerHTML = '';
        // Crea un enlace (<a>) con el correo electrónico y asigna su href
        const emailEnlace = document.createElement('a');
        emailEnlace.href = 'mailto:' + sucursal.email;
        emailEnlace.textContent = sucursal.email;
        // Agrega el enlace al elemento con la clase "email"
        email.appendChild(emailEnlace);
      }
  
      // Selecciona el elemento con la clase "telefono" utilizando querySelector
      const telefono = document.querySelector('.telefono');
      if (telefono) {
        // Limpia el contenido del elemento padre
        telefono.innerHTML = '';
        // Crea un enlace (<a>) con el número de teléfono y asigna su href
        const telefonoEnlace = document.createElement('a');
        telefonoEnlace.href = 'tel:' + sucursal.telefono;
        telefonoEnlace.textContent = sucursal.telefono;
        // Agrega el enlace al elemento con la clase "telefono"
        telefono.appendChild(telefonoEnlace);
      }
    } catch (error) {
      console.error('Error al actualizar información de la sucursal:', error);
    }
  }
}
