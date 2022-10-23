import {Component, OnInit} from '@angular/core';
import {CemiterioModel} from "../../models/cemiterio.model";
import {faArrowRotateLeft, faPlus, faSearch} from "@fortawesome/free-solid-svg-icons";
import {CemiterioService} from "../../services/cemiterio.service";
import {SepulturaModel} from "../../models/sepultura.model";
import {SepulturaService} from "../../services/sepultura.service";

@Component({
    selector: 'app-sepultura-main',
    templateUrl: './sepultura-main.component.html',
    styleUrls: ['./sepultura-main.component.css']
})
export class SepulturaMainComponent implements OnInit {

    cemiterios: CemiterioModel[] = []
    sepulturas: SepulturaModel[] = []
    faFiltro = faSearch
    faNovo = faPlus
    faVoltar = faArrowRotateLeft

    constructor(private cemiterioService: CemiterioService,
                private sepulturaService: SepulturaService) {
    }

    ngOnInit(): void {
        this.buscarCemiterios()
    }

    buscarSepulturas() {
        this.sepulturaService.buscarSepulturas().subscribe(
            res => this.sepulturas = res
        )
    }

    buscarCemiterios() {
        this.cemiterioService.buscarCemiterios().subscribe(
            res => this.cemiterios = res
        )
    }

    voltar() {
        window.history.back()
    }
}
