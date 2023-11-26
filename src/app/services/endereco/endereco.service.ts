import { HttpClient } from '@angular/common/http';
import { Injectable, inject } from '@angular/core';
import { Observable } from 'rxjs';
import { Endereco } from 'src/app/models/enderecoModel';

@Injectable({
  providedIn: 'root'
})
export class EnderecoService {
  API: string = "http://localhost:8080/endereco";
  http = inject(HttpClient);

  constructor() { }

  findById(id: number): Observable<Endereco> {
    return this.http.get<Endereco>(this.API + "?id=" + id);
  }

  findAll(): Observable<Endereco[]> {
    return this.http.get<Endereco[]>(this.API + "/list");
  }

  create(endereco: Endereco): Observable<Endereco>{
    return this.http.post<Endereco>(this.API, endereco);
  }

  edit(id: number, endereco: Endereco): Observable<Endereco>{
    return this.http.put<Endereco>(this.API + "?id=" + id, endereco);
  }

  delete(id: number): Observable<Endereco> {
    return this.http.delete<Endereco>(this.API + "?id=" + id);
  }
}
