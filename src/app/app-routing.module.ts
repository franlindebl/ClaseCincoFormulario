import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ListadoUsuariosComponent } from './components/listado-usuarios/listado-usuarios.component';
import { AltaUsuarioComponent } from './components/alta-usuario/alta-usuario.component';


const routes: Routes = [
  { path: 'listado', component: ListadoUsuariosComponent },
  { path: 'alta', component: AltaUsuarioComponent},
  { path: '', redirectTo: '/listado', pathMatch: 'full' },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
