import { Funcionario } from 'src/app/models/funcionarioModel';
import { Component, inject } from '@angular/core';
import { FuncionarioService } from 'src/app/services/funcionario/funcionario.service';
import { LoginService } from 'src/app/services/login/login.service';
import { NavigationEnd, Router } from '@angular/router';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent {
  loginService = inject(LoginService);
  funcionarioService = inject(FuncionarioService);
  roteador = inject(Router);

  funcionario!: Funcionario;

  constructor() {this.roteador.events.subscribe((ev) => {
    if (ev instanceof NavigationEnd) {
      this.instaciarFuncionario();
    }});
  }

  instaciarFuncionario(){
    this.funcionarioService.findById(Number(this.loginService.getId())).subscribe({
      next: funcionario => { this.funcionario = funcionario },
      error: erro => { console.log(erro) }
    })
  }

  deslogar(){
    this.loginService.deslogar();
    this.roteador.navigate(['/home']);
  }
}
