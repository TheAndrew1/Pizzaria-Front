import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { SaborListComponent } from './components/sabor/sabor-list/sabor-list.component';
import { SaborDetailsComponent } from './components/sabor/sabor-details/sabor-details.component';
import { ProdutoListComponent } from './components/produto/produto-list/produto-list.component';
import { ProdutoDetailsComponent } from './components/produto/produto-details/produto-details.component';
import { IndexComponent } from './components/layout/index/index.component';
import { PedidoListComponent } from './components/pedido/pedido-list/pedido-list.component';
import { PedidoDetailsComponent } from './components/pedido/pedido-details/pedido-details.component';
import { LoginComponent } from './components/sistema/login/login.component';
import { CadastroComponent } from './components/sistema/cadastro/cadastro.component';
import { FuncionarioListComponent } from './components/funcionario/funcionario-list/funcionario-list.component';
import { FuncionarioDetailsComponent } from './components/funcionario/funcionario-details/funcionario-details.component';
import { ClienteListComponent } from './components/cliente/cliente-list/cliente-list.component';
import { ClienteDetailsComponent } from './components/cliente/cliente-details/cliente-details.component';

const routes: Routes = [
  {path:"", redirectTo: "home", pathMatch: "full"},
  {path: "home", component: IndexComponent},
  {path: "login", component: LoginComponent},
  {path: "cadastro", component: CadastroComponent},
  {path: "sabores", component: SaborListComponent},
  {path: "sabores/form", component: SaborDetailsComponent},
  {path: "produtos", component: ProdutoListComponent},
  {path: "produtos/form", component: ProdutoDetailsComponent},
  {path: "pedidos", component: PedidoListComponent},
  {path: "pedidos/form", component: PedidoDetailsComponent},
  {path: "funcionarios", component: FuncionarioListComponent},
  {path: "funcionarios/form", component: FuncionarioDetailsComponent},
  {path: "clientes", component: ClienteListComponent},
  {path: "clientes/form", component: ClienteDetailsComponent},
  {path: "enderecos", component: FuncionarioListComponent},
  {path: "enderecos/form", component: FuncionarioDetailsComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
