import { NgModule } from "@angular/core";
import { BrowserModule } from "@angular/platform-browser";
import { FormsModule, ReactiveFormsModule } from "@angular/forms";

import { AppRoutingModule } from "./app-routing.module";
import { AppComponent } from "./app.component";
import { HeaderComponent } from "./modules/header/header.component";
import { FooterComponent } from "./modules/footer/footer.component";

import { ModulesComponent } from "./modules/modules.component";
import { VistaInicioComponent } from './modules/vista-inicio/vista-inicio.component';
import { VistaDatosComponent } from './modules/vista-datos/vista-datos.component';


@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    FooterComponent,
    
    ModulesComponent,
          VistaInicioComponent,
          VistaDatosComponent,
  
  ],
  imports: [BrowserModule, AppRoutingModule, FormsModule, ReactiveFormsModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
