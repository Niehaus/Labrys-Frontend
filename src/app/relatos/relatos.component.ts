import { Component, OnInit } from '@angular/core';
import { RelatosService } from '../relatos.service';

@Component({
  selector: 'app-relatos',
  templateUrl: './relatos.component.html',
  styleUrls: ['./relatos.component.css']
})
export class RelatosComponent implements OnInit {

  private depoimentos = new Array<Relato>();
  private modalRelato: Relato;

  private basic: boolean;

  constructor(private service: RelatosService) { }

  ngOnInit() {
    this.modalRelato = new Relato();
    this.service.getRelatos().subscribe(depoimentos => this.depoimentos = depoimentos);
  }

  salvar() {
    this.service.adicionar(this.modalRelato).subscribe(res => {
      this.modalRelato.iddepoimentos = res.insertId;
      this.depoimentos.push(this.modalRelato);
      this.fecharModal();
    });
  }
  
  adicionar() {
    this.modalRelato = new Relato();
    this.basic = true;
  }

  fecharModal() {
    this.modalRelato = new Relato();
    this.basic = false;
  }

  cancelar() {
    this.modalRelato = new Relato();
    this.basic = false;
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