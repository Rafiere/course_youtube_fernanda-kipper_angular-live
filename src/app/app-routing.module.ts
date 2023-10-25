import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

/* Aqui temos o módulo de roteamento das rotas. */


const routes: Routes = [];

/* Abaixo, estamos declarando um novo módulo de rotas. */
@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
