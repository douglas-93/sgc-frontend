import {Component, Input, OnInit} from '@angular/core';
import {CemiterioModel} from "../../../../models/cemiterio.model";
import {faPencil} from "@fortawesome/free-solid-svg-icons";
import {FormularioCemiterioService} from "../../formulario-cemiterio.service";
import {Router} from "@angular/router";

@Component({
    selector: 'app-tabela-cemiterios',
    templateUrl: './tabela-cemiterios.component.html',
    styleUrls: ['./tabela-cemiterios.component.css']
})
export class TabelaCemiteriosComponent implements OnInit {

    @Input() cemiterios: CemiterioModel[] = []
    cabecalho = ["ID", "Nome", "Endereço", "Cidade", "Estado", "Responsável", "Editar"]
    iconeEditar = faPencil

    constructor(private service: FormularioCemiterioService, private router: Router) {
    }

    ngOnInit(): void {
    }

    editar(id: string) {
        this.router.navigate([`/cemiterios/edit/${id}`])
    }
}
