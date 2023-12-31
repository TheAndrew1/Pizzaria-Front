import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { SaborListComponent } from './components/sabor/sabor-list/sabor-list.component';
import { SaborDetailsComponent } from './components/sabor/sabor-details/sabor-details.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HeaderComponent } from './components/layout/header/header.component';
import { IndexComponent } from './components/layout/index/index.component';
import { FooterComponent } from './components/layout/footer/footer.component';
import { ProdutoListComponent } from './components/produto/produto-list/produto-list.component';
import { ProdutoDetailsComponent } from './components/produto/produto-details/produto-details.component';
import { PedidoListComponent } from './components/pedido/pedido-list/pedido-list.component';
import { PedidoDetailsComponent } from './components/pedido/pedido-details/pedido-details.component';
import { ProdutosPedidoListComponent } from './components/pedido/produtos-predido/produtos-pedido-list.component';
import { LoginComponent } from './components/sistema/login/login.component';
import { CadastroComponent } from './components/sistema/cadastro/cadastro.component';
import { FuncionarioDetailsComponent } from './components/funcionario/funcionario-details/funcionario-details.component';
import { FuncionarioListComponent } from './components/funcionario/funcionario-list/funcionario-list.component';
import { ClienteListComponent } from './components/cliente/cliente-list/cliente-list.component';
import { ClienteDetailsComponent } from './components/cliente/cliente-details/cliente-details.component';
import { EnderecoListComponent } from './components/endereco/endereco-list/endereco-list.component';
import { EnderecoDetailsComponent } from './components/endereco/endereco-details/endereco-details.component';
import { httpInterceptorProviders } from './interceptors/http-interceptor.service';
import { LoginService } from './services/login/login.service';

@NgModule({
  declarations: [
    AppComponent,
    SaborListComponent,
    SaborDetailsComponent,
    HeaderComponent,
    IndexComponent,
    FooterComponent,
    ProdutoListComponent,
    ProdutoDetailsComponent,
    PedidoListComponent,
    PedidoDetailsComponent,
    ProdutosPedidoListComponent,
    LoginComponent,
    CadastroComponent,
    FuncionarioDetailsComponent,
    FuncionarioListComponent,
    ClienteListComponent,
    ClienteDetailsComponent,
    EnderecoListComponent,
    EnderecoDetailsComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    NgbModule,
    FormsModule,
    ReactiveFormsModule 
  ],
  providers: [
    httpInterceptorProviders, LoginService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
