import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { DenunciaComponent } from './denuncia/denuncia.component';
import { MapaAtualComponent } from './mapa-atual/mapa-atual.component';
import { StaffComponent } from './staff/staff.component';
import { ApoioComponent } from './apoio/apoio.component';
import { RelatosComponent } from './relatos/relatos.component';


const routes: Routes = [
  {path: '', redirectTo: 'home', pathMatch: 'full'},
  {path: 'home', component: HomeComponent},
  {path: 'denuncia', component: DenunciaComponent},
  {path: 'mapa-atual', component: MapaAtualComponent},
  {path: 'relatos', component: RelatosComponent},
  {path: 'apoio', component: ApoioComponent},
  {path: 'staff', component: StaffComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
