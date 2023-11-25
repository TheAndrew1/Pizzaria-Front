import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ProdutosPedidoListComponent } from './produtos-pedido-list.component';

describe('ProdutosPedidoListComponent', () => {
  let component: ProdutosPedidoListComponent;
  let fixture: ComponentFixture<ProdutosPedidoListComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ProdutosPedidoListComponent]
    });
    fixture = TestBed.createComponent(ProdutosPedidoListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
