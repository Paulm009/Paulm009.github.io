import { ModulesComponent } from './modules/modules.component';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { VistaDatosComponent } from './modules/vista-datos/vista-datos.component';
import { VistaInicioComponent } from './modules/vista-inicio/vista-inicio.component';
const routes: Routes = [
  {
    path:'',
    component:VistaInicioComponent
  },

  {
   
    path:'datos',
    component:VistaDatosComponent
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
