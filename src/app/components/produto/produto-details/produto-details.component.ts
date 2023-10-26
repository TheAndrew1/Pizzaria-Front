import { Component, inject } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Produto } from 'src/app/models/produtoModel';
import { ProdutoService } from 'src/app/services/produto/produto.service';

@Component({
  selector: 'app-produto-details',
  templateUrl: './produto-details.component.html',
  styleUrls: ['./produto-details.component.scss']
})
export class ProdutoDetailsComponent {
  router = inject(Router);
  rota = inject(ActivatedRoute);
  produtoService = inject(ProdutoService);

  produto: Produto = new Produto();
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
    this.produtoService.findById(id).then(promise => promise.subscribe({
      next: response => this.produto = response,
      error: erro => console.log(erro)
    }));
  }

  async salvar(){
    if(this.tipo == "new"){
       await this.produtoService.create(this.produto).then(promise => promise.subscribe({
        next: response => this.produto = response,
        error: erro => console.log(erro)
      }))
      .then(() => {
        this.router.navigate(["/produtos"]);
      })
    }else{
      await this.produtoService.edit(this.id, this.produto).then(promise => promise.subscribe({
        next: response => this.produto = response,
        error: erro => console.log(erro)
      }))
      .then(() => {
        this.router.navigate(["/produtos"]);
      })
    }
  }
}
