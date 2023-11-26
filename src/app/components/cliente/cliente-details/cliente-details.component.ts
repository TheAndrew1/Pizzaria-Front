import { Component, inject } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Cliente } from 'src/app/models/clienteModel';
import { ClienteService } from 'src/app/services/cliente/cliente.service';

@Component({
  selector: 'app-cliente-details',
  templateUrl: './cliente-details.component.html',
  styleUrls: ['./cliente-details.component.scss']
})
export class ClienteDetailsComponent {
  router = inject(Router);
  rota = inject(ActivatedRoute);
  clienteService = inject(ClienteService);

  cliente: Cliente = new Cliente();
  tipo!: string | null;
  id!: number;
  showPassword: boolean = false;
  
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
    this.clienteService.findById(id).subscribe({
      next: response => this.cliente = response,
      error: erro => console.log(erro)
    });
  }

  salvar(){
    if(this.tipo == "new"){
       this.clienteService.create(this.cliente).subscribe({
        next: response => this.cliente = response,
        error: erro => console.log(erro)
      })
    }else{
      this.clienteService.edit(this.id, this.cliente).subscribe({
        next: response => this.cliente = response,
        error: erro => console.log(erro)
      })
    }

    this.router.navigate(["/clientes"]);
  }
}
