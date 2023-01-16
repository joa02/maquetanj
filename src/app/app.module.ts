import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { EncabezadoComponent } from './componente/encabezado/encabezado.component';
import { AboutComponent } from './componente/about/about.component';
import { ConocimentoyproyectoComponent } from './componente/conocimentoyproyecto/conocimentoyproyecto.component';
import { PieDePaginaComponent } from './componente/pie-de-pagina/pie-de-pagina.component';
import { ModalComponent } from './componente/modal/modal.component';
import {HttpClientModule} from '@angular/common/http';
import { PortfolioService } from 'src/app/servicios/portfolio.service';
import { AppRoutingModule } from './app-routing.module';
import { Pagina404Component } from './componente/pagina404/pagina404.component';
import { IndexComponent } from './componente/index/index.component';
import { DashboardComponent } from './componente/dashboard/dashboard.component';
import { EducacionComponent } from './componente/educacion/educacion.component';
import { BarnavComponent } from './componente/barnav/barnav.component';

@NgModule({
  declarations: [
    AppComponent,
    EncabezadoComponent,
    AboutComponent,
    ConocimentoyproyectoComponent,
    PieDePaginaComponent,
    ModalComponent,
    Pagina404Component,
    IndexComponent,
    DashboardComponent,
    EducacionComponent,
    BarnavComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
