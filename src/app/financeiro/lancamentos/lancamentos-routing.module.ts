import { NgModule } from "@angular/core";
import { Routes, RouterModule } from "@angular/router";

import { SaidasComponent } from './saidas/saidas.component';
import { EntradasComponent } from './entradas/entradas.component';
import { ResumoComponent } from './resumo/resumo.component';

const routes: Routes = [
  { path: '', component: ResumoComponent },
  { path: 'entradas', component: EntradasComponent },
  { path: 'saidas', component: SaidasComponent },
]

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class LancamentosRoutinfModule { }