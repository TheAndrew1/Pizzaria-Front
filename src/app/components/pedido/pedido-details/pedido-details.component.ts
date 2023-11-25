import { Component, inject } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Pedido } from 'src/app/models/pedidoModel';
import { PedidoService } from 'src/app/services/pedido/pedido.service';

@Component({
  selector: 'app-pedido-details',
  templateUrl: './pedido-details.component.html',
  styleUrls: ['./pedido-details.component.scss']
})
export class PedidoDetailsComponent {
  router = inject(Router);
  rota = inject(ActivatedRoute);
  pedidoService = inject(PedidoService);

  pedido: Pedido = new Pedido();
  tipo!: string | null;
  id!: number;
  
  constructor(){
    this.rota.queryParamMap.subscribe(params => {
      this.tipo = params.get("type");
      this.id = Number(params.get("id"));
    });

    if(this.id != 0){
      this.findById(this.id);
    }
  }

  findById(id: number){
    this.pedidoService.findById(id).subscribe({
      next: response => this.pedido = response,
      error: erro => console.log(erro)
    });
  }

  salvar(){
    if(this.tipo == "new"){
        this.pedidoService.create(this.pedido).subscribe({
        next: response => this.pedido = response,
        error: erro => console.log(erro)
      })
      
      this.router.navigate(["/pedidos"]);
    }else{
      this.pedidoService.edit(this.id, this.pedido).subscribe({
        next: response => this.pedido = response,
        error: erro => console.log(erro)
      })
      
      this.router.navigate(["/pedidos"]);
    }
  }
}
