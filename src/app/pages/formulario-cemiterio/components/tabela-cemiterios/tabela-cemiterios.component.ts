import {Component, Input, OnInit} from '@angular/core';
import {CemiterioModel} from "../../../../models/cemiterio.model";
import {faPencil} from "@fortawesome/free-solid-svg-icons";
import {CemiterioService} from "../../../../services/cemiterio.service";
import {Router} from "@angular/router";

@Component({
    selector: 'app-tabela-cemiterios',
    templateUrl: './tabela-cemiterios.component.html',
    styleUrls: ['./tabela-cemiterios.component.css']
})
export class TabelaCemiteriosComponent implements OnInit {

    @Input() cemiterios: CemiterioModel[] = []
    cabecalho = ["Editar", "Nome", "Endereço", "Cidade", "Estado", "Responsável"]
    iconeEditar = faPencil

    constructor(private service: CemiterioService, private router: Router) {
    }

    ngOnInit(): void {
    }

    editar(id: string) {
        this.router.navigate([`/cemiterios/edit/${id}`])
    }
}
