import { Component, EventEmitter, Input, Output, inject } from '@angular/core';
import { SaborService } from '../../../services/sabor/sabor.service';
import { Sabor } from '../../../models/saborModel';
import { FormControl } from '@angular/forms';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';

@Component({
  selector: 'app-sabor-list',
  templateUrl: './sabor-list.component.html',
  styleUrls: ['./sabor-list.component.scss']
})

export class SaborListComponent {
  control = new FormControl('', { nonNullable: true });
  modalService = inject(NgbModal);

  @Input() produto!: boolean;
  @Output() retorno = new EventEmitter<Sabor>();

  saborService = inject(SaborService);

  sabores: Array<Sabor> = new Array<Sabor>();
  sabores$?: Array<Sabor>;

  saborSelecionado!: Sabor;

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

  delete(id: number){
    this.saborService.delete(id)
      .subscribe({
        next: response => {
          this.findAll();
        },
        error: erro => console.log(erro)
      })

    this.modalService.dismissAll();
  }

  filter(){
    if(this.control.value == ""){
      this.sabores$ = this.sabores
    }else{
      this.sabores$ = this.sabores.filter(sabor => sabor.nome.includes(this.control.value));
    }
  }

  openModal(content: any, sabor: Sabor) {
    this.saborSelecionado = sabor;

		this.modalService.open(content, { centered: true });
	}

  select(sabor: Sabor){
    this.retorno.emit(sabor);
  }
}
