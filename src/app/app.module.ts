import {NgModule} from '@angular/core';
import {BrowserModule} from '@angular/platform-browser';

import {AppRoutingModule} from './app-routing.module';
import {AppComponent} from './app.component';
import {NavbarTopoComponent} from './compenentes-fixos/navbar-topo/navbar-topo.component';
import {MenuEsquerdaComponent} from './compenentes-fixos/menu-esquerda/menu-esquerda.component';
import {FontAwesomeModule} from '@fortawesome/angular-fontawesome';
import {SubMenuEsquerdaComponent} from './compenentes-fixos/sub-menu-esquerda/sub-menu-esquerda.component';
import {FormularioCemiterioComponent} from './pages/formulario-cemiterio/formulario-cemiterio.component';
import {HttpClientModule} from "@angular/common/http";
import {TabelaCemiteriosComponent} from './pages/formulario-cemiterio/components/tabela-cemiterios/tabela-cemiterios.component';
import {CadastroCemiterioComponent} from './pages/cadastro-cemiterio/cadastro-cemiterio.component';
import {FormsModule, ReactiveFormsModule} from "@angular/forms";
import { SepulturaMainComponent } from './pages/sepultura-main/sepultura-main.component';
import { TabelaSepulturasComponent } from './pages/sepultura-main/components/tabela-sepulturas/tabela-sepulturas.component';
import { SepulturaCadastroComponent } from './pages/sepultura-cadastro/sepultura-cadastro.component';
import { PessoaMainComponent } from './pages/pessoa-main/pessoa-main.component';
import { PessoaCadastroComponent } from './pages/pessoa-cadastro/pessoa-cadastro.component';
import { TabelaPessoasComponent } from './pages/pessoa-main/components/tabela-pessoas/tabela-pessoas.component';
import { CpfPipe } from './pipes/cpf.pipe';

@NgModule({
    declarations: [
        AppComponent,
        NavbarTopoComponent,
        MenuEsquerdaComponent,
        SubMenuEsquerdaComponent,
        FormularioCemiterioComponent,
        TabelaCemiteriosComponent,
        CadastroCemiterioComponent,
        SepulturaMainComponent,
        TabelaSepulturasComponent,
        SepulturaCadastroComponent,
        PessoaMainComponent,
        PessoaCadastroComponent,
        TabelaPessoasComponent,
        CpfPipe
    ],
    imports: [
        BrowserModule,
        AppRoutingModule,
        FontAwesomeModule,
        HttpClientModule,
        ReactiveFormsModule,
        FormsModule
    ],
    providers: [],
    bootstrap: [AppComponent]
})
export class AppModule {
}
