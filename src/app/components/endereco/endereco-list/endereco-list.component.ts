import { Component, inject } from '@angular/core';
import { FormControl } from '@angular/forms';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
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

  enderecoService = inject(EnderecoService);

  enderecos: Array<Endereco> = new Array<Endereco>();
  enderecos$?: Array<Endereco>;

  enderecoSelecionado!: Endereco;

  constructor() {
    this.findAll();
	}

  findAll(){
    this.enderecoService.findAll().subscribe({
      next: response => {this.enderecos = response;
                        this.enderecos$ = this.enderecos},
      error: erro => console.log(erro)
    });
  }

  delete(id: number){
    this.enderecoService.delete(id)
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
      this.enderecos$ = this.enderecos
    }else{
      this.enderecos$ = this.enderecos.filter(sabor => sabor.rua.includes(this.control.value));
    }
  }

  openModal(content: any, sabor: Endereco) {
    this.enderecoSelecionado = sabor;

		this.modalService.open(content, { centered: true });
	}
}
