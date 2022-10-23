import {Component, Input, OnInit} from '@angular/core';
import {faArrowRotateLeft, faPlus, faSearch} from "@fortawesome/free-solid-svg-icons";

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

  constructor() { }

  ngOnInit(): void {
  }

    salvar() {

    }

    excluir() {

    }

    voltar() {
        window.history.back()
    }

    soNumeros(value: string) {

    }
}
