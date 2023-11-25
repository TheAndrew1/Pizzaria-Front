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
    this.saborService.findById(id).subscribe({
      next: response => this.sabor = response,
      error: erro => console.log(erro)
    });
  }

  salvar(){
    if(this.tipo == "new"){
       this.saborService.create(this.sabor).subscribe({
        next: response => this.sabor = response,
        error: erro => console.log(erro)
      })
        
      this.router.navigate(["/sabores"]);
    }else{
      this.saborService.edit(this.id, this.sabor).subscribe({
        next: response => this.sabor = response,
        error: erro => console.log(erro)
      })
        
      this.router.navigate(["/sabores"]);
    }
  }
}
