import { Component, OnInit } from '@angular/core';
import {DenunciaService} from '../denuncia.service';

@Component({
  selector: 'app-denuncia',
  templateUrl: './denuncia.component.html',
  styleUrls: ['./denuncia.component.css']
})
export class DenunciaComponent implements OnInit {

  constructor(private service: DenunciaService) { }

  novaDenuncia: Denuncia;

  ngOnInit() {
  }

  salvar() {

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
