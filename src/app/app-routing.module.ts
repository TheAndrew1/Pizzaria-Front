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
import { EnderecoListComponent } from './components/endereco/endereco-list/endereco-list.component';
import { EnderecoDetailsComponent } from './components/endereco/endereco-details/endereco-details.component';
import { rotaGuard } from './guards/rota.guard';

const routes: Routes = [
  {path:"", redirectTo: "login", pathMatch: "full"},
  {path: "home", component: IndexComponent, canActivate: [rotaGuard]},
  {path: "login", component: LoginComponent},
  {path: "cadastro", component: CadastroComponent},
  {path: "sabores", component: SaborListComponent, canActivate: [rotaGuard]},
  {path: "sabores/form", component: SaborDetailsComponent, canActivate: [rotaGuard]},
  {path: "produtos", component: ProdutoListComponent, canActivate: [rotaGuard]},
  {path: "produtos/form", component: ProdutoDetailsComponent, canActivate: [rotaGuard]},
  {path: "pedidos", component: PedidoListComponent, canActivate: [rotaGuard]},
  {path: "pedidos/form", component: PedidoDetailsComponent, canActivate: [rotaGuard]},
  {path: "funcionarios", component: FuncionarioListComponent, canActivate: [rotaGuard]},
  {path: "funcionarios/form", component: FuncionarioDetailsComponent, canActivate: [rotaGuard]},
  {path: "clientes", component: ClienteListComponent, canActivate: [rotaGuard]},
  {path: "clientes/form", component: ClienteDetailsComponent, canActivate: [rotaGuard]},
  {path: "enderecos", component: EnderecoListComponent, canActivate: [rotaGuard]},
  {path: "enderecos/form", component: EnderecoDetailsComponent, canActivate: [rotaGuard]}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
