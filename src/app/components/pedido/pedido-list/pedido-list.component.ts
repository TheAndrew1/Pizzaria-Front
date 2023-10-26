import { Component, inject } from '@angular/core';
import { FormControl } from '@angular/forms';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { Pedido } from 'src/app/models/pedidoModel';
import { PedidoService } from 'src/app/services/pedido/pedido.service';

@Component({
  selector: 'app-pedido-list',
  templateUrl: './pedido-list.component.html',
  styleUrls: ['./pedido-list.component.scss']
})
export class PedidoListComponent {
  control = new FormControl('', { nonNullable: true });
  modalService = inject(NgbModal);

  pedidoService = inject(PedidoService);

  pedidos: Array<Pedido> = new Array<Pedido>();
  pedidos$?: Array<Pedido>;

  pedidoSelecionado!: Pedido;

  constructor() {
    this.findAll();
	}

  async findAll(){
    await this.pedidoService.findAll().then(promise => promise.subscribe({
      next: response => {this.pedidos = this.filterPedidosAbertos(response);
                        this.pedidos$ = this.pedidos},
      error: erro => console.log(erro)
    }));
  }

  async delete(id: number){
    await this.pedidoService.delete(id)
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
      this.pedidos$ = this.pedidos
    }else{
      this.pedidos$ = this.pedidos.filter(produto => produto.id == Number(this.control.value));
    }
  }

  filterPedidosAbertos(pedidos: Pedido[]): Pedido[]{
    return pedidos.filter(pedido => pedido.situacao != 0);
  }

  openModal(content: any, pedido: Pedido) {
    this.pedidoSelecionado = pedido;

		this.modalService.open(content, { centered: true });
	}
}
