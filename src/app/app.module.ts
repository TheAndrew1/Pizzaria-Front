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
    PedidoDetailsComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    NgbModule,
    FormsModule,
    ReactiveFormsModule 
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
