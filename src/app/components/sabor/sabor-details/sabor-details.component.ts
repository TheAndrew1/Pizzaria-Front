import { Component, inject } from '@angular/core';
import { Sabor } from '../../../models/saborModel';
import { ActivatedRoute, Router } from '@angular/router';
import { SaborService } from '../../../services/sabor/sabor.service';

@Component({
  selector: 'app-sabor-details',
  templateUrl: './sabor-details.component.html',
  styleUrls: ['./sabor-details.component.scss']
})

export class SaborDetailsComponent {
  router = inject(Router);
  rota = inject(ActivatedRoute);
  saborService = inject(SaborService);

  sabor: Sabor = new Sabor();
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
    this.saborService.findById(id).then(promise => promise.subscribe({
      next: response => this.sabor = response,
      error: erro => console.log(erro)
    }));
  }

  async salvar(){
    if(this.tipo == "new"){
       await this.saborService.create(this.sabor).then(promise => promise.subscribe({
        next: response => this.sabor = response,
        error: erro => console.log(erro)
      }))
      .then(() => {
        this.router.navigate(["/sabores"]);
      })
    }else{
      await this.saborService.edit(this.id, this.sabor).then(promise => promise.subscribe({
        next: response => this.sabor = response,
        error: erro => console.log(erro)
      }))
      .then(() => {
        this.router.navigate(["/sabores"]);
      })
    }
  }
}
