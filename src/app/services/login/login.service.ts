import { HttpClient } from '@angular/common/http';
import { Injectable, inject } from '@angular/core';
import { Observable } from 'rxjs';
import { Funcionario } from 'src/app/models/funcionarioModel';
import { Login } from 'src/app/models/loginModel';

@Injectable({
  providedIn: 'root'
})
export class LoginService {
  
  API: string = "http://localhost:8080/api/login"
  http = inject(HttpClient);

  constructor() { }

  logar(login: Login): Observable<Funcionario> {
    return this.http.post<Funcionario>(this.API, login)
  }

  deslogar(): Observable<any> {
    this.removeToken();
    return this.http.get<any>(this.API + "/deslogar")
  }

  addToken(id: number, token: string){
    localStorage.setItem("id", String(id));
    localStorage.setItem("token", token);
  }

  removeToken(){
    localStorage.removeItem("id");
    localStorage.removeItem("token");
  }

  getId(){
    return localStorage.getItem("id");
  }

  getToken(){
    return localStorage.getItem("token");
  }

  hasPermission(role: string){
    if(role == "ADMIN"){
      return true;
    } else{
      return false;
    }
  }
}