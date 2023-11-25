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

  findById(id: number): Observable<Produto> {
    return this.http.get<Produto>(this.API + "?id=" + id);
  }

  findAll(): Observable<Produto[]> {
    return this.http.get<Produto[]>(this.API + "/list");
  }

  create(produto: Produto): Observable<Produto> {
    return this.http.post<Produto>(this.API, produto);
  }

  edit(id: number, produto: Produto): Observable<Produto> {
    return this.http.put<Produto>(this.API + "?id=" + id, produto);
  }

  delete(id: number): Observable<Produto> {
    return this.http.delete<Produto>(this.API + "?id=" + id);
  }
}
