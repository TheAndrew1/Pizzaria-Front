import { HttpClient } from '@angular/common/http';
import { Injectable, inject } from '@angular/core';
import { Observable } from 'rxjs';
import { Pedido } from 'src/app/models/pedidoModel';

@Injectable({
  providedIn: 'root'
})
export class PedidoService {
  API: string = "http://localhost:8080/pedido";
  http = inject(HttpClient);

  constructor() { }

  findById(id: number): Observable<Pedido> {
    return this.http.get<Pedido>(this.API + "?id=" + id);
  }

  findAll(): Observable<Pedido[]> {
    return this.http.get<Pedido[]>(this.API + "/list");
  }

  create(pedido: Pedido): Observable<Pedido>{
    return this.http.post<Pedido>(this.API, pedido);
  }

  edit(id: number, pedido: Pedido): Observable<Pedido>{
    return this.http.put<Pedido>(this.API + "?id=" + id, pedido);
  }

  delete(id: number): Observable<Pedido> {
    return this.http.delete<Pedido>(this.API + "?id=" + id);
  }
}
