import { Component, OnInit } from '@angular/core';
import { ApoioService } from '../apoio.service';

@Component({
  selector: 'app-apoio',
  templateUrl: './apoio.component.html',
  styleUrls: ['./apoio.component.css']
})
export class ApoioComponent implements OnInit {

  private modalVoluntario: Voluntario;
  private voluntarios = new Array<Voluntario>();

  private basic: boolean;
  private acao: number;

  private Cadastro = {  };

  constructor(private service: ApoioService) { }

  ngOnInit() {
    this.modalVoluntario = new Voluntario();
    this.service.getVoluntarios().subscribe(voluntarios => this.voluntarios = voluntarios);
  }
  
  salvar() {
    this.Cadastro = {
      User: {
        nome: this.modalVoluntario.nome,
        telefone: this.modalVoluntario.telefone
      },
      Ajuda: {
        tipo_da_ajuda: this.modalVoluntario.tipo_da_ajuda,
        descr_funcionamento: this.modalVoluntario.descr_funcionamento,
      },
      RedeSocial: {
        twitter_user: this.modalVoluntario.twitter_user,
        fb_link: this.modalVoluntario.fb_link,
        wpp_num: this.modalVoluntario.wpp_num,
      }
    };
    this.service.adicionar(this.Cadastro).subscribe(res => {
      this.modalVoluntario.idcadastro_voluntario = res.insertId;
      this.voluntarios.push(this.modalVoluntario);
      this.fecharModal();
    }); 
  }

  adicionar() {
    this.modalVoluntario = new Voluntario();
    this.basic = true;
  }

  fecharModal() {
    this.modalVoluntario = new Voluntario();
    this.basic = false;
  }

  cancelar() {
    this.modalVoluntario = new Voluntario();
    this.basic = false;
  }
}

  export class Voluntario {
    idcadastro_voluntario: number;
    nome: string;
    tipo_da_ajuda: string;
    telefone: string;
    descr_funcionamento: string;
    twitter_user: string;
    fb_link: string;
    wpp_num: string;

  constructor(){
    this.idcadastro_voluntario = 0;
    this.nome = "";
    this.tipo_da_ajuda = "";
    this.telefone = "";
    this.descr_funcionamento = "";
    this.twitter_user = "";
    this.fb_link = "";
    this.wpp_num = "";
  }
}