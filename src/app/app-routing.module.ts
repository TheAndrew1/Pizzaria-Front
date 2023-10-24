import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { SaborListComponent } from './sabor/sabor-list/sabor-list.component';
import { SaborDetailsComponent } from './sabor/sabor-details/sabor-details.component';

const routes: Routes = [
  {path:"", redirectTo: "sabores", pathMatch: "full"},
  {path: "sabores", component: SaborListComponent},
  {path: "sabores/form", component: SaborDetailsComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
