import { Component, OnInit, NgZone } from '@angular/core';
import {MapaAtualService} from '../mapa-atual.service';
import { MapsAPILoader, MouseEvent } from '@agm/core';
import {Voluntario} from '../apoio/apoio.component';
import {Denuncia} from '../denuncia/denuncia.component';

@Component({
  selector: 'app-mapa-atual',
  templateUrl: './mapa-atual.component.html',
  styleUrls: ['./mapa-atual.component.css']
})
export class MapaAtualComponent implements OnInit {

  lat = -21.1312539;
  lng = -44.2535548;

  private denunciado = new Array<Denuncias>();
  private Denuncia = new Denuncias();

  markers = [
    { lat: -21.126634, lng: -44.249250, alpha: 1 },
    { lat: -21.127405, lng: -44.245433, alpha: 1 },
    { lat: -21.137502, lng: -44.261103, alpha: 1 },
    { lat: -21.127707, lng: -44.253256, alpha: 1 },
    { lat: -21.137702, lng: -44.261103, alpha: 1 },
    { lat: -21.131026, lng: -44.254290, alpha: 1 },
    { lat: -21.125513, lng: -44.246867, alpha: 1 }
    ];

  private selectedMarker: {nome_local: any; tipo_violencia: any; lng: any; lat: any };


  constructor(private service: MapaAtualService) { }

  ngOnInit() {
    this.markersIniciais();
    this.service.getDenuncia().subscribe(res => {
        res.forEach(denuncia => {
          this.denunciado.push(denuncia);
        });
    });
  }



  selectMarker(event) {
    this.denunciado.forEach(denuncia => {
      console.log(denuncia.latitude);
      console.log(event.latitude);
      if (denuncia.latitude === event.latitude) {
        this.selectedMarker = {
          nome_local: denuncia.nome_local,
          tipo_violencia: denuncia.tipo_violencia,
          lat: event.latitude,
          lng: event.longitude
        };
      }
    });
  }

  markersIniciais() {
    this.Denuncia.nome_local = 'Em frente a Fábrica';
    this.Denuncia.tipo_violencia = 'Violência Simbólica - Xingamentos';
    this.Denuncia.latitude = this.markers[0].lat;
    this.Denuncia.longitude = this.markers[0].lng;
    this.denunciado.push(this.Denuncia);

    this.Denuncia = new Denuncias();

    this.Denuncia.nome_local = 'Divina Gula';
    this.Denuncia.tipo_violencia = 'Violência Simbólica – Assédio Psicológico e Verbal';
    this.Denuncia.latitude = this.markers[1].lat;
    this.Denuncia.longitude = this.markers[1].lng;
    this.denunciado.push(this.Denuncia);

    this.Denuncia = new Denuncias();

    this.Denuncia.nome_local = 'Avenida Tiradentes';
    this.Denuncia.tipo_violencia = 'Violência Física - Sexual';
    this.Denuncia.latitude = this.markers[2].lat;
    this.Denuncia.longitude = this.markers[2].lng;
    this.denunciado.push(this.Denuncia);

    this.Denuncia = new Denuncias();

    this.Denuncia.nome_local = 'República Aldeia';
    this.Denuncia.tipo_violencia = 'Violência Simbólica – Assedio Psicológico';
    this.Denuncia.latitude = this.markers[3].lat;
    this.Denuncia.longitude = this.markers[3].lng;
    this.denunciado.push(this.Denuncia);

    this.Denuncia = new Denuncias();

    this.Denuncia.nome_local = 'Avenida Tiradentes';
    this.Denuncia.tipo_violencia = 'Violência Simbólica –  Xingamento - Violência Física – Agressão Física';
    this.Denuncia.latitude = this.markers[4].lat;
    this.Denuncia.longitude = this.markers[4].lng;
    this.denunciado.push(this.Denuncia);

    this.Denuncia = new Denuncias();

    this.Denuncia.nome_local = 'Esquina da Araújo';
    this.Denuncia.tipo_violencia = 'Violência Simbólica – Ameaça';
    this.Denuncia.latitude = this.markers[5].lat;
    this.Denuncia.longitude = this.markers[5].lng;
    this.denunciado.push(this.Denuncia);

    this.Denuncia = new Denuncias();

    this.Denuncia.nome_local = 'R. Ver. Eli Araújo';
    this.Denuncia.tipo_violencia = 'Violência Simbólica – Ameaça';
    this.Denuncia.latitude = this.markers[6].lat;
    this.Denuncia.longitude = this.markers[6].lng;
    this.denunciado.push(this.Denuncia);

  }

}

export class Denuncias {
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
