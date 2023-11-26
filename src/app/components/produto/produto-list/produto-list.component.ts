import { Component, EventEmitter, Input, Output, inject } from '@angular/core';
import { FormControl } from '@angular/forms';
import { NgbActiveModal, NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { Produto } from 'src/app/models/produtoModel';
import { Sabor } from 'src/app/models/saborModel';
import { ProdutoService } from 'src/app/services/produto/produto.service';

@Component({
  selector: 'app-produto-list',
  templateUrl: './produto-list.component.html',
  styleUrls: ['./produto-list.component.scss']
})
export class ProdutoListComponent {
  control = new FormControl('', { nonNullable: true });
  modalService = inject(NgbModal);
  modal = new NgbActiveModal();

  produtoService = inject(ProdutoService);

  @Input() pedido!: boolean;
  @Output() retorno = new EventEmitter<Produto>();

  produtos: Array<Produto> = new Array<Produto>();
  produtos$?: Array<Produto>;

  produtoSelecionado!: Produto;
  pizza!: Produto;

  constructor() {
    this.findAll();
    this.pizza = new Produto()
    this.pizza.nome = "Pizza";
	}

  findAll(){
    this.produtoService.findAll().subscribe({
      next: response => {this.produtos = this.filterProducts(response);
                        this.produtos$ = this.produtos},
      error: erro => console.log(erro)
    });
  }

  delete(id: number){
    this.produtoService.delete(id)
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
      this.produtos$ = this.produtos
    }else{
      this.produtos$ = this.produtos.filter(produto => produto.nome.includes(this.control.value));
    }
  }

  filterProducts(produtos: Produto[]): Produto[]{
    return produtos.filter(produto => produto.tamanho == null);
  }

  select(produto: Produto){
    if(produto.sabores.length != 0){
      this.produtoService.create(produto).subscribe({
        next: produtoCadastrado => { 
          produto.id = produtoCadastrado.id;
          this.retorno.emit(produto);
          this.modalService.dismissAll();
        },
        error: erro => { console.log(erro) }
      });
    }else{
      this.retorno.emit(produto);
      this.modalService.dismissAll();
    }
  }

  openModal(content: any, produto?: Produto) {
    if(produto){
      this.produtoSelecionado = produto;
    }

		this.modal = this.modalService.open(content, { centered: true });
	}

  toNumber(numero: any): number{
    return Number(numero);
  }

  sumValue(): number{
    let soma = 0 as number;
    this.pizza.sabores.forEach(sabor => soma += sabor.valor);

    return soma;
  }

  addSabor(sabor: Sabor){
    this.modal.close();
    this.pizza.sabores.push(sabor);
    this.pizza.valor = this.sumValue();
  }

  removeSabor(id: number){
    this.pizza.sabores.splice(id, 1);
    this.pizza.valor = this.sumValue();
  }
}
