import { Component, OnInit } from '@angular/core';
import { RelatosService } from '../relatos.service';

@Component({
  selector: 'app-relatos',
  templateUrl: './relatos.component.html',
  styleUrls: ['./relatos.component.css']
})
export class RelatosComponent implements OnInit {

  private depoimentos = new Array<Relato>();

  constructor(private service: RelatosService) { }

  ngOnInit() {
    this.service.getRelatos().subscribe(depoimentos => this.depoimentos = depoimentos);
  }

}

export class Relato {
  iddepoimentos: number;
  depoimento: string;
  apelido: string;
  idade: number;

  constructor(){
    this.iddepoimentos = 0;
    this.depoimento = "";
    this.apelido = "";
    this.idade = 0;
  }
}