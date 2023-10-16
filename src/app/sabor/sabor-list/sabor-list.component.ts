import { Component, inject } from '@angular/core';
import { SaborService } from '../sabor.service';

@Component({
  selector: 'app-sabor-list',
  templateUrl: './sabor-list.component.html',
  styleUrls: ['./sabor-list.component.scss']
})
export class SaborListComponent {
  saborService = inject(SaborService);

}
