import { Component, inject } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { Cliente } from 'src/app/models/clienteModel';
import { Endereco } from 'src/app/models/enderecoModel';
import { Pedido } from 'src/app/models/pedidoModel';
import { ClienteService } from 'src/app/services/cliente/cliente.service';
import { EnderecoService } from 'src/app/services/endereco/endereco.service';
import { PedidoService } from 'src/app/services/pedido/pedido.service';

@Component({
  selector: 'app-pedido-details',
  templateUrl: './pedido-details.component.html',
  styleUrls: ['./pedido-details.component.scss']
})
export class PedidoDetailsComponent {
[x: string]: any;
  router = inject(Router);
  rota = inject(ActivatedRoute);
  modalService = inject(NgbModal);
  
  pedidoService = inject(PedidoService);
  enderecoService = inject(EnderecoService);
  clienteService = inject(ClienteService);

  pedido: Pedido = new Pedido();
  clientes!: Cliente[];
  tipo!: string | null;
  id!: number;
  clienteId!: number;
  
  constructor(){
    this.rota.queryParamMap.subscribe(params => {
      this.tipo = params.get("type");
      this.id = Number(params.get("id"));
    });

    if(this.id != 0){
      this.findById(this.id);
    }

    this.clienteService.findAll().subscribe({
      next: clientes => this.clientes = clientes,
      error: erro => console.log(erro)
    })
  }

  findById(id: number){
    this.pedidoService.findById(id).subscribe({
      next: response => this.pedido = response,
      error: erro => console.log(erro)
    });
  }

  salvar(){
    if(this.clienteId){
      this.pedido.cliente = this.clientes.filter(cliente => cliente.id == this.clienteId)[0];
    }

    if(this.tipo == "new"){
        this.pedidoService.create(this.pedido).subscribe({
        next: response => this.pedido = response,
        error: erro => console.log(erro)
      })
    }else{
      this.pedidoService.edit(this.id, this.pedido).subscribe({
        next: response => this.pedido = response,
        error: erro => console.log(erro)
      })
    }

    this.router.navigate(["/pedidos"]);
  }

  removeEndereco(id: number){
    this.pedido.endereco = new Endereco();
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

  addEndereco(endereco: Endereco){
    this.pedido.endereco = endereco;
  }
}
