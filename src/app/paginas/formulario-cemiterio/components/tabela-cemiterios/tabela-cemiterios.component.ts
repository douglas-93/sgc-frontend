import {Component, Input, OnInit} from '@angular/core';
import {CemiterioModel} from "../../../../models/cemiterio.model";

@Component({
  selector: 'app-tabela-cemiterios',
  templateUrl: './tabela-cemiterios.component.html',
  styleUrls: ['./tabela-cemiterios.component.css']
})
export class TabelaCemiteriosComponent implements OnInit {

  @Input() cemiterios: CemiterioModel[] = []
  cabecalho = ["ID", "Nome", "Endereço", "Cidade", "Estado", "Responsável"]

  constructor() { }

  ngOnInit(): void {
  }

}
