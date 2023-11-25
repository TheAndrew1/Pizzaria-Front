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

  idSelecionado!: number;
  produtoSelecionado!: Produto;

  constructor() {
    
	}

  remove(){
    this.pedido.produtos.splice(this.idSelecionado, 1)
  }

  openModal(content: any, produto?: Produto, id?: number) {
    if(produto && id){
      this.produtoSelecionado = produto;
      this.idSelecionado = id;
    }

		this.modalService.open(content, { centered: true, size: 'xl', scrollable: true });
	}

  adicionarItem(produto: Produto){
    this.pedido.produtos.push(produto)
  }
}
