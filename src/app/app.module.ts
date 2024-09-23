import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common'; 

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { FooterComponent } from './components/footer/footer.component';
import { MenuComponent } from './components/menu/menu.component';
import { HomeComponent } from './pages/home/home.component';
import { ProductosYServiciosComponent } from './pages/productos-y-servicios/productos-y-servicios.component';
import { CafeComponent } from './pages/productos-y-servicios/cafe/cafe.component';
import { InsumosComponent } from './pages/productos-y-servicios/insumos/insumos.component';
import { AccesoriosComponent } from './pages/productos-y-servicios/accesorios/accesorios.component';
import { MaquinasComponent } from './pages/productos-y-servicios/maquinas/maquinas.component';

import { DataService } from './utils/data.service';

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

import { DrippersComponent } from './pages/productos-y-servicios/accesorios/drippers/drippers.component';
import { PrensasFrancesasComponent } from './pages/productos-y-servicios/accesorios/prensas-francesas/prensas-francesas.component';
import { JarrasEspumadorasComponent } from './pages/productos-y-servicios/accesorios/jarras-espumadoras/jarras-espumadoras.component';
import { TampersComponent } from './pages/productos-y-servicios/accesorios/tampers/tampers.component';
import { AccesorioMolinosComponent } from './pages/productos-y-servicios/accesorios/accesorio-molinos/accesorio-molinos.component';
import { CatacionComponent } from './pages/productos-y-servicios/accesorios/catacion/catacion.component';
import { VasosComponent } from './pages/productos-y-servicios/accesorios/vasos/vasos.component';
import { MetodosExtraccionComponent } from './pages/productos-y-servicios/accesorios/metodos-extraccion/metodos-extraccion.component';
import { LimpiezaComponent } from './pages/productos-y-servicios/accesorios/limpieza/limpieza.component';
import { SifonesComponent } from './pages/productos-y-servicios/accesorios/sifones/sifones.component';
import { JarrasServidorasComponent } from './pages/productos-y-servicios/accesorios/jarras-servidoras/jarras-servidoras.component';
import { BaristaChampComponent } from './pages/productos-y-servicios/cafe/barista-champ/barista-champ.component';
import { FiltrosCafeComponent } from './pages/productos-y-servicios/accesorios/filtros-cafe/filtros-cafe.component';

@NgModule({
  declarations: [
    AppComponent,
    FooterComponent,
    MenuComponent,
    HomeComponent,
    ProductosYServiciosComponent,
    CafeComponent,
    InsumosComponent,
    AccesoriosComponent,
    MaquinasComponent,
    JarabesComponent,
    SalsasComponent,
    PuresYConcentradosComponent,
    MolecularesComponent,
    TesComponent,
    TisanasComponent,
    PolvosComponent,
    MolinosComponent,
    LayoutProductoComponent,
    LicuadorasComponent,
    DrippersComponent,
    PrensasFrancesasComponent,
    JarrasEspumadorasComponent,
    TampersComponent,
    AccesorioMolinosComponent,
    CatacionComponent,
    VasosComponent,
    MetodosExtraccionComponent,
    LimpiezaComponent,
    SifonesComponent,
    JarrasServidorasComponent,
    BaristaChampComponent,
    FiltrosCafeComponent,
    CafeterasComponent,

  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
    CommonModule,
  ],
  providers: [ DataService],
  bootstrap: [AppComponent]
})
export class AppModule { }
