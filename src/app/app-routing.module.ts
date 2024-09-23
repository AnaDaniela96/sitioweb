import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { HomeComponent } from './pages/home/home.component';

import { CafeComponent } from './pages/productos-y-servicios/cafe/cafe.component';
import { InsumosComponent } from './pages/productos-y-servicios/insumos/insumos.component';
import { AccesoriosComponent } from './pages/productos-y-servicios/accesorios/accesorios.component';
import { MaquinasComponent } from './pages/productos-y-servicios/maquinas/maquinas.component';
import { JarabesComponent } from './pages/productos-y-servicios/insumos/jarabes/jarabes.component';
import { SalsasComponent } from './pages/productos-y-servicios/insumos/salsas/salsas.component';
import { PuresYConcentradosComponent } from './pages/productos-y-servicios/insumos/pures-y-concentrados/pures-y-concentrados.component';
import { MolecularesComponent } from './pages/productos-y-servicios/insumos/moleculares/moleculares.component';
import { TesComponent } from './pages/productos-y-servicios/insumos/tes/tes.component';
import { TisanasComponent } from './pages/productos-y-servicios/insumos/tisanas/tisanas.component';
import { PolvosComponent } from './pages/productos-y-servicios/insumos/polvos/polvos.component';
import { MolinosComponent } from './pages/productos-y-servicios/maquinas/molinos/molinos.component';
import { LayoutProductoComponent } from './pages/productos-y-servicios/insumos/layout-producto/layout-producto.component';
import { LicuadorasComponent } from './pages/productos-y-servicios/maquinas/licuadoras/licuadoras.component';
import { CafeterasComponent } from './pages/productos-y-servicios/maquinas/cafeteras/cafeteras.component';
import { CafePremiumComponent } from './pages/productos-y-servicios/cafe/cafe-premium/cafe-premium.component';
import { CafeVerdeComponent } from './pages/productos-y-servicios/cafe/cafe-verde/cafe-verde.component';
import { BaristaChampComponent } from './pages/productos-y-servicios/cafe/barista-champ/barista-champ.component';
import { DrippersComponent } from './pages/productos-y-servicios/accesorios/drippers/drippers.component';
import { PrensasFrancesasComponent } from './pages/productos-y-servicios/accesorios/prensas-francesas/prensas-francesas.component';
import { JarrasEspumadorasComponent } from './pages/productos-y-servicios/accesorios/jarras-espumadoras/jarras-espumadoras.component';
import { TampersComponent } from './pages/productos-y-servicios/accesorios/tampers/tampers.component';
import { AccesorioMolinosComponent } from './pages/productos-y-servicios/accesorios/accesorio-molinos/accesorio-molinos.component';
import { CatacionComponent } from './pages/productos-y-servicios/accesorios/catacion/catacion.component';
import { VasosComponent } from './pages/productos-y-servicios/accesorios/vasos/vasos.component';
import { MetodosExtraccionComponent } from './pages/productos-y-servicios/accesorios/metodos-extraccion/metodos-extraccion.component';
import { SifonesComponent } from './pages/productos-y-servicios/accesorios/sifones/sifones.component';
import { JarrasServidorasComponent } from './pages/productos-y-servicios/accesorios/jarras-servidoras/jarras-servidoras.component';
import { LimpiezaComponent } from './pages/productos-y-servicios/accesorios/limpieza/limpieza.component';
import { FiltrosCafeComponent } from './pages/productos-y-servicios/accesorios/filtros-cafe/filtros-cafe.component';


const routes: Routes = [
  { path: '', component: HomeComponent },

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
  { path: 'accesorios-para-poner-una-cafeteria/drippers', component: DrippersComponent },
  { path: 'accesorios-para-poner-una-cafeteria/prensas-francesas', component: PrensasFrancesasComponent },
  { path: 'accesorios-para-poner-una-cafeteria/jarras-espumadoras', component: JarrasEspumadorasComponent },
  { path: 'accesorios-para-poner-una-cafeteria/jarras-servidoras', component: JarrasServidorasComponent },
  { path: 'accesorios-para-poner-una-cafeteria/tampers', component: TampersComponent },
  { path: 'accesorios-para-poner-una-cafeteria/molinos', component: AccesorioMolinosComponent },
  { path: 'accesorios-para-poner-una-cafeteria/catacion', component: CatacionComponent },
  { path: 'accesorios-para-poner-una-cafeteria/vasos', component: VasosComponent },
  { path: 'accesorios-para-poner-una-cafeteria/sifon', component: SifonesComponent },
  { path: 'accesorios-para-poner-una-cafeteria/metodos-extraccion', component: MetodosExtraccionComponent },
  { path: 'accesorios-para-poner-una-cafeteria/limpieza', component: LimpiezaComponent },
  { path: 'accesorios-para-poner-una-cafeteria/filtros-cafe', component: FiltrosCafeComponent },

  { path: 'maquinaria-y-equipo-para-cafeterias', component: MaquinasComponent },
  { path: 'maquinaria-y-equipo-para-cafeterias-molinos', component: MolinosComponent },
  { path: 'maquinaria-y-equipo-para-cafeterias-licuadoras', component: LicuadorasComponent },
  { path: 'maquinaria-y-equipo-para-cafeterias-maquinas-cafe', component: CafeterasComponent },
    
  

  //Rutas dinámicas:
  { path: ':keySap', component: LayoutProductoComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
