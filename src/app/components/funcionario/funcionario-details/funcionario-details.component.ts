import { Component, inject } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Funcionario } from 'src/app/models/funcionarioModel';
import { FuncionarioService } from 'src/app/services/funcionario/funcionario.service';

@Component({
  selector: 'app-funcionario-details',
  templateUrl: './funcionario-details.component.html',
  styleUrls: ['./funcionario-details.component.scss']
})
export class FuncionarioDetailsComponent {
  router = inject(Router);
  rota = inject(ActivatedRoute);
  funcionarioService = inject(FuncionarioService);

  funcionario: Funcionario = new Funcionario();
  tipo!: string | null;
  id!: number;
  showPassword: boolean = false;
  
  constructor(){
    this.rota.queryParamMap.subscribe(params => {
      this.tipo = params.get("type");
      this.id = Number(params.get("id"));
    });

    if(this.id != 0){
      this.findById(this.id);
    }
  }

  findById(id: number){
    this.funcionarioService.findById(id).subscribe({
      next: response => this.funcionario = response,
      error: erro => console.log(erro)
    });
  }

  salvar(){
    if(this.tipo == "new"){
       this.funcionarioService.create(this.funcionario).subscribe({
        next: response => this.funcionario = response,
        error: erro => console.log(erro)
      })
    }else{
      this.funcionarioService.edit(this.id, this.funcionario).subscribe({
        next: response => this.funcionario = response,
        error: erro => console.log(erro)
      })
    }

    this.router.navigate(["/funcionarios"]);
  }
}
