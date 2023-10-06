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
import { ArteLatteComponent } from './pages/capacitacion/arte-latte/arte-latte.component';
import { FormacionEmprendedoresComponent } from './pages/capacitacion/formacion-emprendedores/formacion-emprendedores.component';
import { ExperienciaSensorialComponent } from './pages/capacitacion/experiencia-sensorial/experiencia-sensorial.component';
import { MixologiaMocteleriaComponent } from './pages/capacitacion/mixologia-mocteleria/mixologia-mocteleria.component';
import { TostadoComponent } from './pages/capacitacion/tostado/tostado.component';
import { FormacionParaBaristasComponent } from './pages/capacitacion/formacion-para-baristas/formacion-para-baristas.component';
import { BubleTeaIcedCoffeeComponent } from './pages/capacitacion/bubble-tea-iced-coffee/bubble-tea-iced-coffee.component';
import { BrewBarComponent } from './pages/capacitacion/brew-bar-coldBrew/brew-bar.component';
import { DondeEncontrarnosComponent } from './pages/donde-encontrarnos/donde-encontrarnos.component';
import { PoliticasCursosTalleresComponent } from './pages/politicas-de-navegacion/politicas-cursos-talleres/politicas-cursos-talleres.component';
import { TerminosYCondicionesComponent } from './pages/politicas-de-navegacion/terminos-y-condiciones/terminos-y-condiciones.component';
import { JarabesComponent } from './pages/productos-y-servicios/insumos/jarabes/jarabes.component';

const routes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'quienes-somos', component: QuienesSomosComponent },
  {
    path: 'politicas-de-navegacion', component: PoliticasDeNavegacionComponent,
    children: [
      { path: 'aviso-de-privacidad', component: AvisoDePrivacidadComponent },
      { path: 'politicas-externas-cursos-talleres', component: PoliticasCursosTalleresComponent },
      { path: 'terminos-y-condiciones', component: TerminosYCondicionesComponent },
    ]
  },
  { path: 'cursos-para-baristas-y-talleres-para-cafeterias', component: CapacitacionComponent },
  { path: 'taller-de-arte-latte-nivel-basico', component: ArteLatteComponent },
  { path: 'emprendiendo-mi-negocio-de-barra-de-cafe-y-cafeteria', component: FormacionEmprendedoresComponent },
  { path: 'taller-experiencia-sensorial', component: ExperienciaSensorialComponent },
  { path: 'taller-de-mixologia-con-cafe-sin-alcohol', component: MixologiaMocteleriaComponent },
  { path: 'taller-basico-de-tostado-de-cafe', component: TostadoComponent },
  { path: 'taller-basico-para-baristas', component: FormacionParaBaristasComponent },
  { path: 'taller-de-bubble-tea-&-iced-coffee', component: BubleTeaIcedCoffeeComponent },
  { path: 'taller-de-brew-bar', component: BrewBarComponent },
  {
    path: 'productos-y-servicios', component: ProductosYServiciosComponent,
    children: [
      { path: 'cafe-de-especialidad', component: CafeComponent },
      {
        path: 'insumos-para-cafeterias', component: InsumosComponent,

        children: [
          { path: 'jarabes', component: JarabesComponent },
        ]
      },
      { path: 'accesorios-para-poner-una-cafeteria', component: AccesoriosComponent },
      { path: 'maquinaria-y-equipo-para-cafeterias', component: MaquinasComponent },
    ]
  },
  { path: 'donde-encontranos', component: DondeEncontrarnosComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
