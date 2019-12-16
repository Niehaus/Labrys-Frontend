import { Component, OnInit } from '@angular/core';
import { RelatosService } from '../relatos.service';

@Component({
  selector: 'app-relatos',
  templateUrl: './relatos.component.html',
  styleUrls: ['./relatos.component.css']
})
export class RelatosComponent implements OnInit {

  constructor(private service: RelatosService) { }

  private depoimentos: Array<Depoimento>;
  modalRelato: Relato;

  private basic: boolean;
  private basic2: boolean;

  ngOnInit() {
    this.modalRelato = new Relato();
    this.depoimentos = new Array<Depoimento>();
    this.service.getRelatos().subscribe(relatos => {
      relatos.forEach(relato => {
        const depoimento = new Depoimento();
        depoimento.relato = relato;
        this.service.getComentarios(relato.iddepoimentos).subscribe(comentarios => {
          depoimento.comentarios = comentarios;
          this.depoimentos.push(depoimento);
        });
      });
    });
  }

  salvar() {
    this.service.adicionar(this.modalRelato).subscribe(res => {
      this.modalRelato.iddepoimentos = res.insertId;
      console.log(this.modalRelato.iddepoimentos);
      // this.depoimentos.push(this.modalRelato);
      location.reload();
      this.fecharModal();
    });
  }

  comentar(iddepo: number) {
    this.depoimentos.forEach(depoimento => {
      if (depoimento.relato.iddepoimentos === iddepo) {
        depoimento.modalComentario.depoimento_associado = iddepo;
        this.service.adicionarComentario(depoimento.modalComentario).subscribe(res => {
          depoimento.modalComentario = new Comentario();
          location.reload();
        });
      }
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

  constructor() {
    this.iddepoimentos = 0;
    this.depoimento = '';
    this.apelido = '';
    this.idade = 0;
  }
}

export class Comentario {
  idcomentarios: number;
  comentario: string;
  nickname: string;
  idade: number;
  depoimento_associado: number;

  constructor() {
    this.idcomentarios = 0;
    this.comentario = '';
    this.nickname = '';
    this.idade = null;
    this.depoimento_associado = 0;
  }

}

export class Depoimento {

  relato: Relato;
  comentarios: Array<Comentario>;

  modalComentario: Comentario;

  constructor() {
    this.comentarios = new Array<Comentario>();
    this.modalComentario = new Comentario();
  }

}
