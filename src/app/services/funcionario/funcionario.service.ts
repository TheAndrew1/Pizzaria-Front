import { HttpClient } from '@angular/common/http';
import { Injectable, inject } from '@angular/core';
import { Observable } from 'rxjs';
import { Funcionario } from 'src/app/models/funcionarioModel';

@Injectable({
  providedIn: 'root'
})
export class FuncionarioService {
  API: string = "http://54.162.172.208:8080/funcionario";
  http = inject(HttpClient);

  constructor() { }

  findById(id: number): Observable<Funcionario> {
    return this.http.get<Funcionario>(this.API + "?id=" + id);
  }

  findAll(): Observable<Funcionario[]> {
    return this.http.get<Funcionario[]>(this.API + "/list");
  }

  create(funcionario: Funcionario): Observable<Funcionario>{
    return this.http.post<Funcionario>(this.API, funcionario);
  }

  edit(id: number, funcionario: Funcionario): Observable<Funcionario>{
    return this.http.put<Funcionario>(this.API + "?id=" + id, funcionario);
  }

  delete(id: number): Observable<Funcionario> {
    return this.http.delete<Funcionario>(this.API + "?id=" + id);
  }
}
