import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Router, RouterModule,Routes } from '@angular/router';
import {IndexComponent} from './componente/index/index.component'
import { Pagina404Component } from './componente/pagina404/pagina404.component';
import { EducacionComponent } from './componente/educacion/educacion.component';


const routes: Routes = [
  {path:"",component:IndexComponent},
  {path:"experiencia", component:EducacionComponent},
  {path:"**",component:Pagina404Component}
]
@NgModule({
  declarations: [],
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
