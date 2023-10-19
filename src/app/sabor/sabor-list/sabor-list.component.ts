import { Component, inject } from '@angular/core';
import { SaborService } from '../sabor.service';
import { Sabor } from '../saborModel';
import { FormControl } from '@angular/forms';

@Component({
  selector: 'app-sabor-list',
  templateUrl: './sabor-list.component.html',
  styleUrls: ['./sabor-list.component.scss']
})
export class SaborListComponent {
  control = new FormControl('', { nonNullable: true });
  saborService = inject(SaborService);

  sabores: Array<Sabor> = new Array<Sabor>();
  sabores$?: Array<Sabor>;

  constructor() {
    this.findAll();
	}

  findAll(){
    this.saborService.findAll().subscribe({
      next: response => {this.sabores = response;
                        this.sabores$ = this.sabores},
      error: erro => console.log(erro)
    });
  }

  filter(){
    if(this.control.value == ""){
      this.sabores$ = this.sabores
    }else{
      this.sabores$ = this.sabores.filter(sabor => sabor.nome.includes(this.control.value));
    }
  }
}
