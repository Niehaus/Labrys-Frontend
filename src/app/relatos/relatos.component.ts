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

  private comentarios = new Array<Comentario>();
  private basic: boolean;

  constructor(private service: RelatosService) { }

  ngOnInit() {
    this.modalRelato = new Relato();
    this.service.getRelatos().subscribe(depoimentos => this.depoimentos = depoimentos);
    this.service.getComentarios().subscribe(comentarios => this.comentarios = comentarios);
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

export class Comentario {
  idcomentario: number;
  comentario: string;
  nickname: string;
  idade: number;
  depoimento_associado: number;
  
  constructor(){
    this.idcomentario = 0;
    this.comentario = "";
    this.nickname = "";
    this.idade = 0;
    this.depoimento_associado = 0;
  }
  
}