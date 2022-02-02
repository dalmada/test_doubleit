import { Component, NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent }from './views/home/home.component';
import { MeusProdutosComponent }from './views/meus-produtos/meus-produtos.component';

const routes: Routes = [
  {
    path: "",
    component: HomeComponent
    },
    
    {
      path: "meus-produtos",
      component: MeusProdutosComponent
    }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
