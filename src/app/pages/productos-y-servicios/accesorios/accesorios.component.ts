import { Component } from '@angular/core';

@Component({
  selector: 'app-accesorios',
  templateUrl: './accesorios.component.html',
  styleUrls: ['./accesorios.component.css']
})
export class AccesoriosComponent {
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
    // prensaFrancesa: {
    //   vidrioMadera: false,
    //   subcategoria2: false
    // }
    // Puedes agregar más subcategorías según tus necesidades
  };
}
