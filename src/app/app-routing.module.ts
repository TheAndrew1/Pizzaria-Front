import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { SaborListComponent } from './components/sabor/sabor-list/sabor-list.component';
import { SaborDetailsComponent } from './components/sabor/sabor-details/sabor-details.component';
import { ProdutoListComponent } from './components/produto/produto-list/produto-list.component';
import { ProdutoDetailsComponent } from './components/produto/produto-details/produto-details.component';
import { IndexComponent } from './components/layout/index/index.component';

const routes: Routes = [
  {path:"", redirectTo: "index", pathMatch: "full"},
  {path: "index", component: IndexComponent},
  {path: "sabores", component: SaborListComponent},
  {path: "sabores/form", component: SaborDetailsComponent},
  {path: "produtos", component: ProdutoListComponent},
  {path: "produtos/form", component: ProdutoDetailsComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
