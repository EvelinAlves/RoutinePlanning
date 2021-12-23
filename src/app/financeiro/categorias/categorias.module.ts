import { NgModule } from "@angular/core";
import { CommonModule } from '@angular/common';

import { CategoriesRoutingModule } from "./categorias-routing.module";

import { FormularioCategoriaComponent } from './formulario-categoria/formulario-categoria.component';
import { ListaCategoriasComponent } from "./lista-categorias/lista-categorias.component";

@NgModule({
  imports: [
    CommonModule,
    CategoriesRoutingModule
  ],
  declarations: [
    FormularioCategoriaComponent,
    ListaCategoriasComponent
  ]
})
export class CategoriasModule { }