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

  constructor() { }

  openModal(content: any) {
		this.modalService.open(content, { centered: true, size: 'xl', scrollable: true });
	}

  addItem(produto: Produto){
    this.pedido.produtos.push(produto);
    this.pedido.valor = this.sumProdutos();
  }

  removeItem(id: number){
    this.pedido.produtos.splice(id, 1);
    this.pedido.valor = this.sumProdutos();
    this.modalService.dismissAll();
  }

  sumProdutos(): number{
    let soma = 0 as number;
    this.pedido.produtos.forEach(produto => soma += produto.valor);

    return soma;
  }
}
