import { Component, inject } from '@angular/core';
import { FormControl } from '@angular/forms';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { Funcionario } from 'src/app/models/funcionarioModel';
import { FuncionarioService } from 'src/app/services/funcionario/funcionario.service';

@Component({
  selector: 'app-funcionario-list',
  templateUrl: './funcionario-list.component.html',
  styleUrls: ['./funcionario-list.component.scss']
})
export class FuncionarioListComponent {
  control = new FormControl('', { nonNullable: true });
  modalService = inject(NgbModal);

  funcionarioService = inject(FuncionarioService);

  funcionarios: Array<Funcionario> = new Array<Funcionario>();
  funcionarios$?: Array<Funcionario>;

  funcionarioSelecionado!: Funcionario;

  constructor() {
    this.findAll();
	}

  findAll(){
    this.funcionarioService.findAll().subscribe({
      next: response => {this.funcionarios = response;
                        this.funcionarios$ = this.funcionarios},
      error: erro => console.log(erro)
    });
  }

  delete(id: number){
    this.funcionarioService.delete(id)
      .subscribe({
        next: response => {
          this.findAll();
        },
        error: erro => console.log(erro)
      })

    this.modalService.dismissAll();
  }

  filter(){
    if(this.control.value == ""){
      this.funcionarios$ = this.funcionarios
    }else{
      this.funcionarios$ = this.funcionarios.filter(sabor => sabor.nome.includes(this.control.value));
    }
  }

  openModal(content: any, sabor: Funcionario) {
    this.funcionarioSelecionado = sabor;

		this.modalService.open(content, { centered: true });
	}
}
