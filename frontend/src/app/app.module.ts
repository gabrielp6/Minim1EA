import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { PrincipalComponent } from './principal/principal.component';
import { DatosFarmacovigilanciasComponent } from './datos-farmacovigilancias/datos-farmacovigilancias.component';
import { NuevofarmacovigilanciaComponent } from './nuevofarmacovigilancia/nuevofarmacovigilancia.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { NuevousuarioComponent } from './nuevousuario/nuevousuario.component';
import { ModificarUsuarioComponent } from './modificar-usuario/modificar-usuario.component';
import { DatosUsuariosComponent } from './datos-usuarios/datos-usuarios.component';

@NgModule({
  declarations: [
    AppComponent,
    PrincipalComponent,
    DatosFarmacovigilanciasComponent,
    NuevofarmacovigilanciaComponent,
    NuevousuarioComponent,
    ModificarUsuarioComponent,
    DatosUsuariosComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
