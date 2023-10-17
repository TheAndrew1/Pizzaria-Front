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
  filter = new FormControl('', { nonNullable: true });
  saborService = inject(SaborService);

  sabores: Array<Sabor> = new Array<Sabor>();

  constructor(){
    this.findAll();
  }

  findAll(){
    this.saborService.findAll().subscribe({
      next: response => {this.sabores = response},
      error: erro => console.log(erro)
    });
  }
}
