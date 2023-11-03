import { Component } from '@angular/core';
import { recetasAPI } from 'src/app/utils/recetas.service';

@Component({
  selector: 'app-recetario',
  templateUrl: './recetario.component.html',
  styleUrls: ['./recetario.component.css']
})

export class RecetarioComponent {

  constructor(
    private dataService: recetasAPI,
  ) { }

  recetasArray: any[] = [];

  ngOnInit(): void {
    this.dataService.getRecetas().then((recetasArray: any[]) => {
      this.recetasArray = recetasArray;
      //console.log('Información de RECETAS', this.recetasArray);
      // Escuchar eventos de cambio de ruta
    }).catch((error: any) => {
      console.error('Error al obtener datos de insumo', error);
    })
  }
}
