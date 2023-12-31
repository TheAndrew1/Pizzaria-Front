import { Injectable, inject } from '@angular/core';
import { Observable } from 'rxjs';
import { Sabor } from '../../models/saborModel';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class SaborService {
  API: string = "http://54.162.172.208:8080/sabor";
  http = inject(HttpClient);

  constructor() { }

  findById(id: number): Observable<Sabor> {
    return this.http.get<Sabor>(this.API + "?id=" + id);
  }

  findAll(): Observable<Sabor[]> {
    return this.http.get<Sabor[]>(this.API + "/list");
  }

  create(sabor: Sabor): Observable<Sabor> {
    return this.http.post<Sabor>(this.API, sabor);
  }

  edit(id: number, sabor: Sabor): Observable<Sabor> {
    return this.http.put<Sabor>(this.API + "?id=" + id, sabor);
  }

  delete(id: number): Observable<Sabor> {
    return this.http.delete<Sabor>(this.API + "?id=" + id);
  }
}
