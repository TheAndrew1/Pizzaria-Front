import { Injectable, inject } from '@angular/core';
import { Observable } from 'rxjs';
import { Sabor } from './saborModel';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class SaborService {
  API: string = "http://localhost:8080/sabor";
  http = inject(HttpClient);

  constructor() { }

  async findById(id: number): Promise<Observable<Sabor>> {
    return this.http.get<Sabor>(this.API + "?id=" + id);
  }

  async findAll(): Promise<Observable<Sabor[]>> {
    return this.http.get<Sabor[]>(this.API + "/list");
  }

  async create(sabor: Sabor): Promise<Observable<Sabor>>{
    return this.http.post<Sabor>(this.API, sabor);
  }

  async edit(id: number, sabor: Sabor): Promise<Observable<Sabor>>{
    return this.http.put<Sabor>(this.API + "?id=" + id, sabor);
  }

  async delete(id: number): Promise<Observable<Sabor>> {
    return this.http.delete<Sabor>(this.API + "?id=" + id);
  }
}
