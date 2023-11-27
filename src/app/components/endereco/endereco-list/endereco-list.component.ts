import { Component, Input, inject } from '@angular/core';
import { FormControl } from '@angular/forms';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { Cliente } from 'src/app/models/clienteModel';
import { Endereco } from 'src/app/models/enderecoModel';
import { EnderecoService } from 'src/app/services/endereco/endereco.service';

@Component({
  selector: 'app-endereco-list',
  templateUrl: './endereco-list.component.html',
  styleUrls: ['./endereco-list.component.scss']
})
export class EnderecoListComponent {
  control = new FormControl('', { nonNullable: true });
  modalService = inject(NgbModal);

  @Input() cliente!: Cliente;

  enderecoService = inject(EnderecoService);

  constructor() { }

  addEndereco(endereco: Endereco){
    this.cliente.enderecos.push(endereco);
  }

  removeEndereco(id: number){
    this.cliente.enderecos.splice(id, 1);
    this.enderecoService.delete(id-1)
      .subscribe({
        next: response => {},
        error: erro => console.log(erro)
      })

    this.modalService.dismissAll();
  }

  openModal(content: any) {
		this.modalService.open(content, { centered: true, size: "md" });
	}
}
