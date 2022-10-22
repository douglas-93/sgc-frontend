import {Component, OnInit} from '@angular/core';
import {FormularioCemiterioService} from "./formulario-cemiterio.service";
import {CemiterioModel} from "../../models/cemiterio.model";
import {faSearch, faPlus, faArrowRotateLeft} from "@fortawesome/free-solid-svg-icons";

@Component({
    selector: 'app-formulario-cemiterio',
    templateUrl: './formulario-cemiterio.component.html',
    styleUrls: ['./formulario-cemiterio.component.css']
})
export class FormularioCemiterioComponent implements OnInit {

    cemiterios: CemiterioModel[] = []
    estados: any;
    faFiltro = faSearch;
    faNovo = faPlus
    faVoltar = faArrowRotateLeft

    constructor(private service: FormularioCemiterioService) {
    }

    ngOnInit(): void {
        this.buscaEstados()
    }

    voltar() {
        window.history.back()
    }

    buscarCemiterios() {
        this.service.buscarCemiterios().subscribe(
            result => this.cemiterios = result
        )
    }

    buscaEstados() {
        this.service.buscaEstados().subscribe(
            result => this.estados = result
        )
    }
}
