import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import {Denuncia} from './denuncia/denuncia.component';

@Injectable({
  providedIn: 'root'
})
export class DenunciaService {

  constructor(private http: HttpClient) { }

  postDenuncia(denuncia: Denuncia): Observable<any> {
    return this.http.post('http://localhost:3000/denuncias', denuncia);
  }
}
