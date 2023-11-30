import { Component, inject } from '@angular/core';
import { Router } from '@angular/router';
import { Login } from 'src/app/models/loginModel';
import { LoginService } from 'src/app/services/login/login.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent {
  loginService = inject(LoginService);
  login: Login = new Login();
  roteador = inject(Router);

  constructor() {
    //remover o token aqui
    this.loginService.removeToken();
  }

  logar() {
    //implementar a requisição aqui e colocar o token no localstorage
    this.loginService.logar(this.login).subscribe({
      next: usuario => {
        this.loginService.addToken(usuario.id, usuario.token)
        this.roteador.navigate(['/home']);
    },
      error: erro => {
        console.log(erro);
      }
    });
  }
}