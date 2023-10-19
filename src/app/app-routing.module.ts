import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { SaborListComponent } from './sabor/sabor-list/sabor-list.component';

const routes: Routes = [
  {path:"", redirectTo: "sabores", pathMatch: "full"},
  {path: "sabores", component: SaborListComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
