import { Component, Input, inject } from '@angular/core';
import { FormControl } from '@angular/forms';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { Pedido } from 'src/app/models/pedidoModel';
import { Produto } from 'src/app/models/produtoModel';
import { ProdutoService } from 'src/app/services/produto/produto.service';

@Component({
  selector: 'app-produtos-pedido-list',
  templateUrl: './produtos-pedido-list.component.html',
  styleUrls: ['./produtos-pedido-list.component.scss']
})
export class ProdutosPedidoListComponent {
  control = new FormControl('', { nonNullable: true });
  modalService = inject(NgbModal);

  @Input() pedido!: Pedido;

  produtoService = inject(ProdutoService);

  produtoSelecionado!: Produto;

  constructor() {
    
	}

  async delete(id: number){
    await this.produtoService.delete(id)
      .then(promise => promise.subscribe({
        next: response => {
        },
        error: erro => console.log(erro)
      }))
      .then(() => {
        this.modalService.dismissAll();
      })
  }

  openModal(content: any, produto?: Produto) {
    if(produto){
      this.produtoSelecionado = produto;
    }

		this.modalService.open(content, { centered: true, size: 'xl' });
	}
}
