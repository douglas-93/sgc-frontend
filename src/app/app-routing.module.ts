import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {FormularioCemiterioComponent} from "./paginas/formulario-cemiterio/formulario-cemiterio.component";
import {CadastroCemiterioComponent} from "./paginas/cadastro-cemiterio/cadastro-cemiterio.component";

const routes: Routes = [
  {path: 'cemiterios', component: FormularioCemiterioComponent},
  {path: 'cemiterios/cad', component: CadastroCemiterioComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
