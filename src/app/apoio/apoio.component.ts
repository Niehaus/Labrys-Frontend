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

  constructor(private service: ApoioService) { }

  ngOnInit() {
    this.modalVoluntario = new Voluntario();
    this.service.getVoluntarios().subscribe(voluntarios => this.voluntarios = voluntarios);
  }
  
    salvar() {
      if (this.acao == 0) {
        this.service.adicionar(this.modalVoluntario).subscribe(res => {
          this.modalVoluntario.idcadastro_voluntario = res.insertId;
          this.voluntarios.push(this.modalVoluntario);
          this.fecharModal();
        });
      } else if (this.acao == 1) {
        this.service.editar(this.modalVoluntario).subscribe(res => {
          let viagemIdx = this.voluntarios.findIndex(v => v.idcadastro_voluntario == this.modalVoluntario.idcadastro_voluntario);
          this.voluntarios[viagemIdx] = this.modalVoluntario;
          this.fecharModal();
        });
      }      
    }

    adicionar() {

    }

    fecharModal() {

    }

    editar() {

    }
}
  export class Voluntario{
    idcadastro_voluntario: number;
    nome: string;
    tipo_da_ajuda: "";
    telefone: string;
    descr_funcionamento: string;
    twitter_user: "";
    fb_link = "";
    wpp_num = "";

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
