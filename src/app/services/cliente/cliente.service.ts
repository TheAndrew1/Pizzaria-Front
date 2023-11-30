import { HttpClient } from '@angular/common/http';
import { Injectable, inject } from '@angular/core';
import { Observable } from 'rxjs';
import { Cliente } from 'src/app/models/clienteModel';

@Injectable({
  providedIn: 'root'
})
export class ClienteService {
  API: string = "http://54.162.172.208:8080/cliente";
  http = inject(HttpClient);

  constructor() { }

  findById(id: number): Observable<Cliente> {
    return this.http.get<Cliente>(this.API + "?id=" + id);
  }

  findAll(): Observable<Cliente[]> {
    return this.http.get<Cliente[]>(this.API + "/list");
  }

  create(cliente: Cliente): Observable<Cliente>{
    return this.http.post<Cliente>(this.API, cliente);
  }

  edit(id: number, cliente: Cliente): Observable<Cliente>{
    return this.http.put<Cliente>(this.API + "?id=" + id, cliente);
  }

  delete(id: number): Observable<Cliente> {
    return this.http.delete<Cliente>(this.API + "?id=" + id);
  }
}
