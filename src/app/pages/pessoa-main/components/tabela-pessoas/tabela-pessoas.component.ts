import {Component, Input, OnInit} from '@angular/core';
import {PessoaModel} from "../../../../models/pessoa.model";
import {faPencil} from "@fortawesome/free-solid-svg-icons";
import {Router} from "@angular/router";

@Component({
    selector: 'app-tabela-pessoas',
    templateUrl: './tabela-pessoas.component.html',
    styleUrls: ['./tabela-pessoas.component.css']
})
export class TabelaPessoasComponent implements OnInit {

    cabecalho: String[] = ['Editar', 'Nome', 'CPF', 'Data de Nascimento'];
    @Input() pessoas: PessoaModel[] = []
    iconeEditar = faPencil

    constructor(private router: Router) {
    }

    ngOnInit(): void {
    }

    editar(id: string) {
        this.router.navigate([`/pessoas/edit/${id}`])
    }

}
