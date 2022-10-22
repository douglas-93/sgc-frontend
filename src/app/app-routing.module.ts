import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {FormularioCemiterioComponent} from "./paginas/formulario-cemiterio/formulario-cemiterio.component";
import {CadastroCemiterioComponent} from "./paginas/cadastro-cemiterio/cadastro-cemiterio.component";
import {SepulturaMainComponent} from "./paginas/sepultura-main/sepultura-main.component";
import {SepulturaCadastroComponent} from "./paginas/sepultura-cadastro/sepultura-cadastro.component";

const routes: Routes = [
    {path: 'cemiterios', component: FormularioCemiterioComponent},
    {path: 'cemiterios/cad', component: CadastroCemiterioComponent},
    {path: 'cemiterios/edit/:id', component: CadastroCemiterioComponent},
    {path: 'sepulturas', component: SepulturaMainComponent},
    {path: 'sepulturas/cad', component: SepulturaCadastroComponent},
    {path: 'sepulturas/edit/:id', component: SepulturaCadastroComponent}
];

@NgModule({
    imports: [RouterModule.forRoot(routes)],
    exports: [RouterModule]
})
export class AppRoutingModule {
}
