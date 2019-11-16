import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Voluntario } from './apoio/apoio.component';

@Injectable({
  providedIn: 'root'
})

export class ApoioService {

  constructor(private http: HttpClient) { }

  getVoluntarios(): Observable<Voluntario[]> {
    return this.http.get<Voluntario[]>('http://localhost:3000/cadastro');
  }

  adicionar(voluntario: Voluntario): Observable<any> {
    return this.http.post("http://localhost:3000/cadastro", voluntario);
  }

  editar(voluntario: Voluntario): Observable<any> {
    return this.http.put("http://localhost:3000/cadastro/" + voluntario.idcadastro_voluntario, voluntario);
  }

}
