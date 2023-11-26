import { Component, inject } from '@angular/core';
import { FormControl } from '@angular/forms';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { Cliente } from 'src/app/models/clienteModel';
import { ClienteService } from 'src/app/services/cliente/cliente.service';

@Component({
  selector: 'app-cliente-list',
  templateUrl: './cliente-list.component.html',
  styleUrls: ['./cliente-list.component.scss']
})
export class ClienteListComponent {
  control = new FormControl('', { nonNullable: true });
  modalService = inject(NgbModal);

  clienteService = inject(ClienteService);

  clientes: Array<Cliente> = new Array<Cliente>();
  clientes$?: Array<Cliente>;

  clienteSelecionado!: Cliente;

  constructor() {
    this.findAll();
	}

  findAll(){
    this.clienteService.findAll().subscribe({
      next: response => {this.clientes = response;
                        this.clientes$ = this.clientes},
      error: erro => console.log(erro)
    });
  }

  delete(id: number){
    this.clienteService.delete(id)
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
      this.clientes$ = this.clientes
    }else{
      this.clientes$ = this.clientes.filter(cliente => cliente.nome.includes(this.control.value));
    }
  }

  openModal(content: any, cliente: Cliente) {
    this.clienteSelecionado = cliente;

		this.modalService.open(content, { centered: true });
	}
}
