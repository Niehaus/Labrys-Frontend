import { Injectable } from '@angular/core';
import { Relato } from './relatos/relatos.component';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})

export class RelatosService {

  constructor(private http: HttpClient) { }

  getRelatos(): Observable<Relato[]> {
    return this.http.get<Relato[]>('http://localhost:3000/depoimento');
  }

  adicionar(relato: Relato): Observable<any> {
    return this.http.post("http://localhost:3000/depoimento", relato);
  }
}
