import {Component, Input, OnInit} from '@angular/core';
import {faArrowRotateLeft, faPlus, faSave, faSearch, faTrash} from "@fortawesome/free-solid-svg-icons";
import {PessoasService} from "../../services/pessoas.service";
import {FormBuilder, FormGroup, Validators} from "@angular/forms";

@Component({
    selector: 'app-pessoa-cadastro',
    templateUrl: './pessoa-cadastro.component.html',
    styleUrls: ['./pessoa-cadastro.component.css']
})
export class PessoaCadastroComponent implements OnInit {

    resposta?: number;
    @Input() cpfNumero: string = ''
    faFiltro = faSearch
    faNovo = faPlus
    faVoltar = faArrowRotateLeft
    cadastro: boolean = true;
    faSalvar = faSave;
    faExcluir = faTrash;
    formulario: FormGroup = this.formBuilder.group({
        nome: ['', Validators.required],
        cpf: ['', Validators.required],
        nascimento: ['', Validators.required]
    })

    constructor(private service: PessoasService,
    private formBuilder: FormBuilder) {
    }

    ngOnInit(): void {
    }

    salvar() {

    }

    excluir() {

    }

    voltar() {
        window.history.back()
    }

}
