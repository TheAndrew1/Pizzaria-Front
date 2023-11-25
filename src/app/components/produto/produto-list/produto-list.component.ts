import { Component, EventEmitter, Input, Output, inject } from '@angular/core';
import { FormControl } from '@angular/forms';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { Produto } from 'src/app/models/produtoModel';
import { ProdutoService } from 'src/app/services/produto/produto.service';

@Component({
  selector: 'app-produto-list',
  templateUrl: './produto-list.component.html',
  styleUrls: ['./produto-list.component.scss']
})
export class ProdutoListComponent {
  control = new FormControl('', { nonNullable: true });
  modalService = inject(NgbModal);

  produtoService = inject(ProdutoService);

  @Input() pedido!: boolean;
  @Output() retorno = new EventEmitter<Produto>();

  produtos: Array<Produto> = new Array<Produto>();
  produtos$?: Array<Produto>;

  produtoSelecionado!: Produto;
  pizza!: Produto;

  constructor() {
    this.findAll();
	}

  async findAll(){
    await this.produtoService.findAll().then(promise => promise.subscribe({
      next: response => {this.produtos = this.filterProducts(response);
                        this.produtos$ = this.produtos},
      error: erro => console.log(erro)
    }));
  }

  async delete(id: number){
    await this.produtoService.delete(id)
      .then(promise => promise.subscribe({
        next: response => {
          this.findAll();
        },
        error: erro => console.log(erro)
      }))
      .then(() => {
        this.modalService.dismissAll();
      })
  }

  filter(){
    if(this.control.value == ""){
      this.produtos$ = this.produtos
    }else{
      this.produtos$ = this.produtos.filter(produto => produto.nome.includes(this.control.value));
    }
  }

  filterProducts(produtos: Produto[]): Produto[]{
    return produtos.filter(produto => produto.tamanho == null);
  }

  select(produto: Produto){
    this.retorno.emit(produto);
    this.modalService.dismissAll();
  }

  openModal(content: any, produto?: Produto) {
    if(produto){
      this.produtoSelecionado = produto;
    }

		this.modalService.open(content, { centered: true });
	}
}
