import { Component, inject } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Endereco } from 'src/app/models/enderecoModel';
import { EnderecoService } from 'src/app/services/endereco/endereco.service';

@Component({
  selector: 'app-endereco-details',
  templateUrl: './endereco-details.component.html',
  styleUrls: ['./endereco-details.component.scss']
})
export class EnderecoDetailsComponent {
  router = inject(Router);
  rota = inject(ActivatedRoute);
  enderecoService = inject(EnderecoService);

  endereco: Endereco = new Endereco();
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
    this.enderecoService.findById(id).subscribe({
      next: response => this.endereco = response,
      error: erro => console.log(erro)
    });
  }

  salvar(){
    if(this.tipo == "new"){
       this.enderecoService.create(this.endereco).subscribe({
        next: response => this.endereco = response,
        error: erro => console.log(erro)
      })
    }else{
      this.enderecoService.edit(this.id, this.endereco).subscribe({
        next: response => this.endereco = response,
        error: erro => console.log(erro)
      })
    }

    this.router.navigate(["/enderecos"]);
  }
}
