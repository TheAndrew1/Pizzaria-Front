import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ProdutosPedidoListComponent } from './produtos-pedido-list.component';
import { CUSTOM_ELEMENTS_SCHEMA, NO_ERRORS_SCHEMA } from '@angular/core';
import { HttpClientTestingModule } from '@angular/common/http/testing';

describe('ProdutosPedidoListComponent', () => {
  let component: ProdutosPedidoListComponent;
  let fixture: ComponentFixture<ProdutosPedidoListComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ProdutosPedidoListComponent],
      imports: [HttpClientTestingModule],
      schemas: [CUSTOM_ELEMENTS_SCHEMA, NO_ERRORS_SCHEMA]
    });
    fixture = TestBed.createComponent(ProdutosPedidoListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
