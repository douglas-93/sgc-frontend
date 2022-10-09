import { Component, OnInit } from '@angular/core';
import {HttpClientModule} from "@angular/common/http";
import {FormularioCemiterioService} from "./formulario-cemiterio.service";
import {CemiterioModel} from "../../models/cemiterio.model";

@Component({
  selector: 'app-formulario-cemiterio',
  templateUrl: './formulario-cemiterio.component.html',
  styleUrls: ['./formulario-cemiterio.component.css']
})
export class FormularioCemiterioComponent implements OnInit {

  cemiterios: CemiterioModel[] = []
  estados: any;

  constructor(private service: FormularioCemiterioService) { }

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
