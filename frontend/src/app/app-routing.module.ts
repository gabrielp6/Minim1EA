import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { NuevofarmacovigilanciaComponent } from './nuevofarmacovigilancia/nuevofarmacovigilancia.component';
import { PrincipalComponent } from './principal/principal.component';
import { NuevousuarioComponent } from './nuevousuario/nuevousuario.component';
import { ModificarUsuarioComponent } from './modificar-usuario/modificar-usuario.component';


const routes: Routes = [
  { path: '', pathMatch: 'full', redirectTo: '/principal' },
  { path: 'principal', component: PrincipalComponent},
  { path: 'nuevofarmacovigilancia', component: NuevofarmacovigilanciaComponent},
  { path: 'nuevousuario', component: NuevousuarioComponent},
  { path: 'modificarusuario/:id', component: ModificarUsuarioComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
