import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {FormularioCemiterioComponent} from "./pages/formulario-cemiterio/formulario-cemiterio.component";
import {CadastroCemiterioComponent} from "./pages/cadastro-cemiterio/cadastro-cemiterio.component";
import {SepulturaMainComponent} from "./pages/sepultura-main/sepultura-main.component";
import {SepulturaCadastroComponent} from "./pages/sepultura-cadastro/sepultura-cadastro.component";
import {PessoaMainComponent} from "./pages/pessoa-main/pessoa-main.component";
import {PessoaCadastroComponent} from "./pages/pessoa-cadastro/pessoa-cadastro.component";

const routes: Routes = [
    {path: 'cemiterios', component: FormularioCemiterioComponent},
    {path: 'cemiterios/cad', component: CadastroCemiterioComponent},
    {path: 'cemiterios/edit/:id', component: CadastroCemiterioComponent},
    {path: 'sepulturas', component: SepulturaMainComponent},
    {path: 'sepulturas/cad', component: SepulturaCadastroComponent},
    {path: 'sepulturas/edit/:id', component: SepulturaCadastroComponent},
    {path: 'pessoas', component: PessoaMainComponent},
    {path: 'pessoas/cad', component: PessoaCadastroComponent},
    {path: 'pessoas/edit/:id', component: PessoaCadastroComponent},
];

@NgModule({
    imports: [RouterModule.forRoot(routes)],
    exports: [RouterModule]
})
export class AppRoutingModule {
}
