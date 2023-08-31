import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { HomeComponent } from './pages/home/home.component';
import { PoliticasDeNavegacionComponent } from './pages/politicas-de-navegacion/politicas-de-navegacion.component';
import { AvisoDePrivacidadComponent } from './pages/politicas-de-navegacion/aviso-de-privacidad/aviso-de-privacidad.component';
import { QuienesSomosComponent } from './pages/quienes-somos/quienes-somos.component';
import { CapacitacionComponent } from './pages/capacitacion/capacitacion.component';
import { ProductosYServiciosComponent } from './pages/productos-y-servicios/productos-y-servicios.component';
import { CafeComponent } from './pages/productos-y-servicios/cafe/cafe.component';
import { InsumosComponent } from './pages/productos-y-servicios/insumos/insumos.component';
import { AccesoriosComponent } from './pages/productos-y-servicios/accesorios/accesorios.component';
import { MaquinasComponent } from './pages/productos-y-servicios/maquinas/maquinas.component';

const routes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'quienes-somos', component: QuienesSomosComponent },
  {
    path: 'politicas-de-navegacion', component: PoliticasDeNavegacionComponent,
    children: [
      {
        path: 'aviso-de-privacidad', component: AvisoDePrivacidadComponent,
      }
    ]
  },
  { path: 'cursos-para-baristas-y-talleres-para-cafeterias', component: CapacitacionComponent },
  {
    path: 'productos-y-servicios', component: ProductosYServiciosComponent,
    children: [
      { path: 'cafe-de-especialidad', component: CafeComponent },
      { path: 'insumos-para-cafeterias', component: InsumosComponent },
      { path: 'accesorios-para-poner-una-cafeteria', component: AccesoriosComponent },
      { path: 'maquinaria-y-equipo-para-cafeterias', component: MaquinasComponent},
    ]
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
