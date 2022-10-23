import {Component, Input, OnInit} from '@angular/core';
import {faArrowRotateLeft, faPlus, faSearch} from "@fortawesome/free-solid-svg-icons";
import {SepulturaModel} from "../../models/sepultura.model";
import {PessoaModel} from "../../models/pessoa.model";
import {PessoasService} from "../../services/pessoas.service";
import {SepulturaService} from "../../services/sepultura.service";
import {CemiterioModel} from "../../models/cemiterio.model";

@Component({
  selector: 'app-pessoa-main',
  templateUrl: './pessoa-main.component.html',
  styleUrls: ['./pessoa-main.component.css']
})
export class PessoaMainComponent implements OnInit {

    cemiterios: CemiterioModel[] = []
    sepulturas: SepulturaModel[] = []
    pessoas: PessoaModel[] = []
    @Input() cpfNumero: string = ''
    faFiltro = faSearch
    faNovo = faPlus
    faVoltar = faArrowRotateLeft

  constructor(private pessoaService: PessoasService,
              private sepulturaService: SepulturaService) { }

  ngOnInit(): void {
  }

    buscarPessoas() {
        this.pessoaService.buscarPessoas().subscribe(
            res => this.pessoas = res
        )
    }

    buscarSepulturas() {

    }

    voltar() {
        window.history.back()
    }

    soNumeros(value: string) {
        this.cpfNumero = value.replace(/\D/g, '')
    }
}
