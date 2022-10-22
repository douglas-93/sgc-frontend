import {NgModule} from '@angular/core';
import {BrowserModule} from '@angular/platform-browser';

import {AppRoutingModule} from './app-routing.module';
import {AppComponent} from './app.component';
import {NavbarTopoComponent} from './compenentes-fixos/navbar-topo/navbar-topo.component';
import {MenuEsquerdaComponent} from './compenentes-fixos/menu-esquerda/menu-esquerda.component';
import {FontAwesomeModule} from '@fortawesome/angular-fontawesome';
import {SubMenuEsquerdaComponent} from './compenentes-fixos/sub-menu-esquerda/sub-menu-esquerda.component';
import {FormularioCemiterioComponent} from './paginas/formulario-cemiterio/formulario-cemiterio.component';
import {HttpClientModule} from "@angular/common/http";
import {TabelaCemiteriosComponent} from './paginas/formulario-cemiterio/components/tabela-cemiterios/tabela-cemiterios.component';
import {CadastroCemiterioComponent} from './paginas/cadastro-cemiterio/cadastro-cemiterio.component';
import {ReactiveFormsModule} from "@angular/forms";

@NgModule({
    declarations: [
        AppComponent,
        NavbarTopoComponent,
        MenuEsquerdaComponent,
        SubMenuEsquerdaComponent,
        FormularioCemiterioComponent,
        TabelaCemiteriosComponent,
        CadastroCemiterioComponent
    ],
    imports: [
        BrowserModule,
        AppRoutingModule,
        FontAwesomeModule,
        HttpClientModule,
        ReactiveFormsModule
    ],
    providers: [],
    bootstrap: [AppComponent]
})
export class AppModule {
}
