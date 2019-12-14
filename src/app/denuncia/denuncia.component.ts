import { Component, OnInit, ViewChild, ElementRef, NgZone } from '@angular/core';
import {DenunciaService} from '../denuncia.service';
import { MapsAPILoader, MouseEvent } from '@agm/core';
import { AgmCoreModule } from '@agm/core';
import {debug} from 'util';
import {FormControl} from '@angular/forms';

@Component({
  selector: 'app-denuncia',
  templateUrl: './denuncia.component.html',
  styleUrls: ['./denuncia.component.css']
})
export class DenunciaComponent implements OnInit {

  // AIzaSyCFFuTAvQD8HKsujiyQo27nCUfvts9cgjA   API
  private selectedMarker: { lng: number; lat: number };

  private novaDenuncia: Denuncia;

  lat = -21.1312539;
  lng = -44.2535548;
  markers = [];

  public searchControl: FormControl;


  constructor(private service: DenunciaService,
              private mapsAPILoader: MapsAPILoader,
              private ngZone: NgZone) { }

  ngOnInit() {
    this.novaDenuncia = new Denuncia();
  }

  addMarker(lat: number, lng: number) {
    this.markers.pop();
    this.markers.push({ lat, lng, alpha: 0.4 });
    this.novaDenuncia.latitude = this.markers[0].lat;
    this.novaDenuncia.longitude = this.markers[0].lng;
  }

  max(coordType: 'lat' | 'lng'): number {
    return Math.max(...this.markers.map(marker => marker[coordType]));
  }

  min(coordType: 'lat' | 'lng'): number {
    return Math.min(...this.markers.map(marker => marker[coordType]));
  }

  selectMarker(event) {
    this.selectedMarker = {
      lat: event.latitude,
      lng: event.longitude
    };
  }

  salvar() {
    this.service.postDenuncia(this.novaDenuncia).subscribe(res => {
      this.novaDenuncia = new Denuncia();
      this.markers.pop();
    });
  }
}

export class Denuncia {
  iddenuncia: number;
  nome_local: string;
  tipo_violencia: string;
  depoimento: string;
  latitude: number;
  longitude: number;

  constructor() {
    this.iddenuncia = 0;
    this.nome_local = '';
    this.tipo_violencia = '';
    this.latitude = 0;
    this.longitude = 0;
  }
}

// TODO: arrumar marker drag pra mudar a latitude
// TODO: tentar arrumar geolocation
