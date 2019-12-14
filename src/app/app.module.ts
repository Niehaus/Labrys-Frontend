import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ClarityModule } from '@clr/angular';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { HomeComponent } from './home/home.component';
import { DenunciaComponent } from './denuncia/denuncia.component';
import { MapaAtualComponent } from './mapa-atual/mapa-atual.component';
import { RelatosComponent } from './relatos/relatos.component';
import { ApoioComponent } from './apoio/apoio.component';
import { StaffComponent } from './staff/staff.component';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms';
import { AgmCoreModule } from '@agm/core';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    DenunciaComponent,
    MapaAtualComponent,
    RelatosComponent,
    ApoioComponent,
    StaffComponent
  ],
  imports: [
    BrowserModule,
    AgmCoreModule.forRoot({
      apiKey: 'AIzaSyCFFuTAvQD8HKsujiyQo27nCUfvts9cgjA',
      libraries: ['places', 'geometry']
    }),
    AppRoutingModule,
    ClarityModule,
    BrowserAnimationsModule,
    HttpClientModule,
    FormsModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
