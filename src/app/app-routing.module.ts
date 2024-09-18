import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { HomeComponent } from './pages/home/home.component';
import { PoliticasDeNavegacionComponent } from './pages/politicas-de-navegacion/politicas-de-navegacion.component';
import { AvisoDePrivacidadComponent } from './pages/politicas-de-navegacion/aviso-de-privacidad/aviso-de-privacidad.component';
import { QuienesSomosComponent } from './pages/quienes-somos/quienes-somos.component';
import { CapacitacionComponent } from './pages/capacitacion/capacitacion.component';
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
import { SalsasComponent } from './pages/productos-y-servicios/insumos/salsas/salsas.component';
import { PuresYConcentradosComponent } from './pages/productos-y-servicios/insumos/pures-y-concentrados/pures-y-concentrados.component';
import { MolecularesComponent } from './pages/productos-y-servicios/insumos/moleculares/moleculares.component';
import { TesComponent } from './pages/productos-y-servicios/insumos/tes/tes.component';
import { TisanasComponent } from './pages/productos-y-servicios/insumos/tisanas/tisanas.component';
import { PolvosComponent } from './pages/productos-y-servicios/insumos/polvos/polvos.component';
import { PreguntasFrecuentesComponent } from './pages/preguntas-frecuentes/preguntas-frecuentes.component';
import { MolinosComponent } from './pages/productos-y-servicios/maquinas/molinos/molinos.component';
import { LayoutProductoComponent } from './pages/productos-y-servicios/insumos/layout-producto/layout-producto.component';
import { LicuadorasComponent } from './pages/productos-y-servicios/maquinas/licuadoras/licuadoras.component';
import { CafeterasComponent } from './pages/productos-y-servicios/maquinas/cafeteras/cafeteras.component';
import { CafePremiumComponent } from './pages/productos-y-servicios/cafe/cafe-premium/cafe-premium.component';
import { CafeVerdeComponent } from './pages/productos-y-servicios/cafe/cafe-verde/cafe-verde.component';
import { BaristaChampComponent } from './pages/productos-y-servicios/cafe/barista-champ/barista-champ.component';
import { ProductosPedecederosComponent } from './pages/politicas-de-navegacion/productos-pedecederos/productos-pedecederos.component';
import { PedidosForaneosExpoCafeComponent } from './pages/politicas-de-navegacion/pedidos-foraneos-expo-cafe/pedidos-foraneos-expo-cafe.component';
import { BlogComponent } from './pages/blog/blog.component';
import { RecetarioComponent } from './pages/recetario/recetario.component';


const routes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'quienes-somos', component: QuienesSomosComponent },
  {
    path: 'politicas-de-navegacion', component: PoliticasDeNavegacionComponent,
    children: [
      { path: 'aviso-de-privacidad', component: AvisoDePrivacidadComponent },
      { path: 'politicas-externas-cursos-talleres', component: PoliticasCursosTalleresComponent },
      { path: 'terminos-y-condiciones', component: TerminosYCondicionesComponent },
      { path: 'politicas-productos-pedecederos', component: ProductosPedecederosComponent },
      { path: 'entrega-pedidos-expo-cafe', component: PedidosForaneosExpoCafeComponent },
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

  { path: 'insumos-para-cafeterias', component: InsumosComponent },
  { path: 'insumos-para-cafeterias-polvos', component: PolvosComponent },
  { path: 'insumos-para-cafeterias-jarabes', component: JarabesComponent },
  { path: 'insumos-para-cafeterias-salsas', component: SalsasComponent },
  { path: 'insumos-para-cafeterias-pures-y-concentrados', component: PuresYConcentradosComponent },
  { path: 'insumos-para-cafeterias-bubble-tea', component: MolecularesComponent },
  { path: 'insumos-para-cafeterias-tes', component: TesComponent },
  { path: 'insumos-para-cafeterias-tisanas', component: TisanasComponent },

  { path: 'cafe-de-especialidad', component: CafeComponent },
  { path: 'cafe-premium', component: CafePremiumComponent },
  { path: 'cafe-verde', component: CafeVerdeComponent },
  { path: 'barista-champ', component: BaristaChampComponent },
    
  { path: 'accesorios-para-poner-una-cafeteria', component: AccesoriosComponent },

  
  { path: 'maquinaria-y-equipo-para-cafeterias', component: MaquinasComponent },
  { path: 'maquinaria-y-equipo-para-cafeterias-molinos', component: MolinosComponent },
  { path: 'maquinaria-y-equipo-para-cafeterias-licuadoras', component: LicuadorasComponent },
  { path: 'maquinaria-y-equipo-para-cafeterias-maquinas-cafe', component: CafeterasComponent },
    
  { path: 'donde-encontrarnos', component: DondeEncontrarnosComponent },
  { path: 'preguntas-frecuentes', component: PreguntasFrecuentesComponent },
  { path: 'blog', component: BlogComponent },
  { path: 'recetario', component: RecetarioComponent },

  //Rutas dinámicas:
  { path: ':keySap', component: LayoutProductoComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
