import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms';

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
import { ArteLatteComponent } from './pages/capacitacion/arte-latte/arte-latte.component';
import { DataService } from './utils/data.service';
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
    MaquinasComponent,
    ArteLatteComponent,
    FormacionEmprendedoresComponent,
    ExperienciaSensorialComponent,
    MixologiaMocteleriaComponent,
    TostadoComponent,
    FormacionParaBaristasComponent,
    BubleTeaIcedCoffeeComponent,
    BrewBarComponent,
    DondeEncontrarnosComponent,
    PoliticasCursosTalleresComponent,
    TerminosYCondicionesComponent,
    JarabesComponent,
    SalsasComponent,
    PuresYConcentradosComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
  ],
  providers: [ DataService],
  bootstrap: [AppComponent]
})
export class AppModule { }
