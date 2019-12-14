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
  public zoom: number;


  constructor(private service: DenunciaService,
              private mapsAPILoader: MapsAPILoader,
              private ngZone: NgZone) { }


  @ViewChild('searchElementRef', {static: true}) searchElementRef: ElementRef;

  ngOnInit() {
    this.novaDenuncia = new Denuncia();
    this.searchControl = new FormControl();

    // set current position
    this.setCurrentPosition();

    // load Places Autocomplete
    this.mapsAPILoader.load().then(() => {
      const autocomplete = new google.maps.places.Autocomplete(this.searchElementRef.nativeElement, {
        types: ['address']
      });
      autocomplete.addListener('place_changed', () => {
        this.ngZone.run(() => {
          // get the place result
          const place: google.maps.places.PlaceResult = autocomplete.getPlace();

          // verify result
          if (place.geometry === undefined || place.geometry === null) {
            return;
          }

          // set latitude, longitude and zoom
          this.lat = place.geometry.location.lat();
          this.lng = place.geometry.location.lng();
          this.zoom = 12;
        });
      });
    });
  }

  addMarker(lat: number, lng: number) {
    this.markers.pop();
    this.markers.push({ lat, lng, alpha: 0.4 });
  }

  max(coordType: 'lat' | 'lng'): number {
    return Math.max(...this.markers.map(marker => marker[coordType]));
  }

  min(coordType: 'lat' | 'lng'): number {
    return Math.min(...this.markers.map(marker => marker[coordType]));
  }

  selectMarker(event) {
    console.log(this.markers);
    this.selectedMarker = {
      lat: event.latitude,
      lng: event.longitude
    };
  }
  // Get Current Location Coordinates
  private setCurrentPosition() {
    if ('geolocation' in navigator) {
      navigator.geolocation.getCurrentPosition((position) => {
        this.lat = position.coords.latitude;
        this.lng = position.coords.longitude;
        this.zoom = 12;
      });
    }
  }
  salvar() {
    console.log(this.novaDenuncia.tipo_violencia);
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
