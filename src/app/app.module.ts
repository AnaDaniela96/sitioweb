import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { FooterComponent } from './components/footer/footer.component';
import { MenuComponent } from './components/menu/menu.component';
import { HomeComponent } from './pages/home/home.component';
import { QuienesSomosComponent } from './pages/quienes-somos/quienes-somos.component';
import { PoliticasDeNavegacionComponent } from './pages/politicas-de-navegacion/politicas-de-navegacion.component';
import { AvisoDePrivacidadComponent } from './pages/politicas-de-navegacion/aviso-de-privacidad/aviso-de-privacidad.component';
import { CapacitacionComponent } from './pages/capacitacion/capacitacion.component';
import { ProductosYServiciosComponent } from './pages/productos-y-servicios/productos-y-servicios.component';
import { CafeComponent } from './pages/productos-y-servicios/cafe/cafe.component';
import { InsumosComponent } from './pages/productos-y-servicios/insumos/insumos.component';
import { AccesoriosComponent } from './pages/productos-y-servicios/accesorios/accesorios.component';
import { MaquinasComponent } from './pages/productos-y-servicios/maquinas/maquinas.component';

@NgModule({
  declarations: [
    AppComponent,
    FooterComponent,
    MenuComponent,
    HomeComponent,
    QuienesSomosComponent,
    PoliticasDeNavegacionComponent,
    AvisoDePrivacidadComponent,
    CapacitacionComponent,
    ProductosYServiciosComponent,
    CafeComponent,
    InsumosComponent,
    AccesoriosComponent,
    MaquinasComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
