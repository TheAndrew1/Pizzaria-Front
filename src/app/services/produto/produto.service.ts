import { HttpClient } from '@angular/common/http';
import { Injectable, inject } from '@angular/core';
import { Observable } from 'rxjs';
import { Produto } from 'src/app/models/produtoModel';

@Injectable({
  providedIn: 'root'
})
export class ProdutoService {
  API: string = "http://localhost:8080/produto";
  http = inject(HttpClient);

  constructor() { }

  async findById(id: number): Promise<Observable<Produto>> {
    return this.http.get<Produto>(this.API + "?id=" + id);
  }

  async findAll(): Promise<Observable<Produto[]>> {
    return this.http.get<Produto[]>(this.API + "/list");
  }

  async create(produto: Produto): Promise<Observable<Produto>>{
    return this.http.post<Produto>(this.API, produto);
  }

  async edit(id: number, produto: Produto): Promise<Observable<Produto>>{
    return this.http.put<Produto>(this.API + "?id=" + id, produto);
  }

  async delete(id: number): Promise<Observable<Produto>> {
    return this.http.delete<Produto>(this.API + "?id=" + id);
  }
}
