import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";

import { LancamentosRoutinfModule } from "./lancamentos-routing.module";

import { EntradasComponent } from "./entradas/entradas.component";
import { SaidasComponent } from "./saidas/saidas.component";

@NgModule({
  declarations: [
    EntradasComponent,
    SaidasComponent
  ],
  imports: [
    CommonModule,
    LancamentosRoutinfModule
  ]
})
export class LancamentosModule { }