import { NgModule } from "@angular/core";
import { Routes, RouterModule } from "@angular/router";

import { ListaCategoriasComponent } from './lista-categorias/lista-categorias.component';
import { FormularioCategoriaComponent } from './formulario-categoria/formulario-categoria.component';

const routes: Routes = [
  { path: 'nova', component: FormularioCategoriaComponent },
  { path: ':id/edita', component: FormularioCategoriaComponent },
  { path: '', component: ListaCategoriasComponent },
]

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class CategoriesRoutingModule { }