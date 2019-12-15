import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Observable} from 'rxjs';
import {Denuncias} from './mapa-atual/mapa-atual.component';

@Injectable({
  providedIn: 'root'
})
export class MapaAtualService {

  constructor(private http: HttpClient) { }

  getDenuncia(): Observable<Denuncias[]> {
    return this.http.get<Denuncias[]>('http://localhost:3000/denuncias');
  }

}
