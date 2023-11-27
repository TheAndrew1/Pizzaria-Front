import { Component, EventEmitter, Output, inject } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
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
  modalService = inject(NgbModal);

  enderecoService = inject(EnderecoService);

  @Output() retorno = new EventEmitter<Endereco>();

  endereco: Endereco = new Endereco();
  
  constructor(){
  }
  
  salvar(){
    this.enderecoService.create(this.endereco).subscribe({
      next: response => {
        this.endereco.id = response.id;
      },
      error: erro => console.log(erro)
    })
    
    this.retorno.emit(this.endereco);
    this.modalService.dismissAll();
  }
}
