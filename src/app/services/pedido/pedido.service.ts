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

  async findById(id: number): Promise<Observable<Pedido>> {
    return this.http.get<Pedido>(this.API + "?id=" + id);
  }

  async findAll(): Promise<Observable<Pedido[]>> {
    return this.http.get<Pedido[]>(this.API + "/list");
  }

  async create(pedido: Pedido): Promise<Observable<Pedido>>{
    return this.http.post<Pedido>(this.API, pedido);
  }

  async edit(id: number, pedido: Pedido): Promise<Observable<Pedido>>{
    return this.http.put<Pedido>(this.API + "?id=" + id, pedido);
  }

  async delete(id: number): Promise<Observable<Pedido>> {
    return this.http.delete<Pedido>(this.API + "?id=" + id);
  }
}
