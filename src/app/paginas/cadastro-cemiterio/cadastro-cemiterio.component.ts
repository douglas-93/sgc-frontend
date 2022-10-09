import {Component, OnInit} from '@angular/core';
import {CemiterioModel} from "../../models/cemiterio.model";
import {FormularioCemiterioService} from "../formulario-cemiterio/formulario-cemiterio.service";
import {FormBuilder, FormGroup, Validators} from "@angular/forms";

@Component({
  selector: 'app-cadastro-cemiterio',
  templateUrl: './cadastro-cemiterio.component.html',
  styleUrls: ['./cadastro-cemiterio.component.css']
})
export class CadastroCemiterioComponent implements OnInit {

  estados: any
  cadastro: boolean = false
  resposta: number = 0
  formulario: FormGroup = this.formBuilder.group({
    nome: ['', Validators.required],
    endereco: ['', Validators.required],
    numero: ['', Validators.required],
    cidade: ['', Validators.required],
    estado: ['', Validators.required],
    responsavel: ['', Validators.required]
  })

  camposValidos = [
    {campo: 'nome', valido: true},
    {campo: 'endereco', valido: true},
    {campo: 'numero', valido: true},
    {campo: 'cidade', valido: true},
    {campo: 'estado', valido: true},
    {campo: 'responsavel', valido: true}
  ]


  constructor(private service: FormularioCemiterioService,
              private formBuilder: FormBuilder) {
  }

  ngOnInit(): void {
    this.buscaEstados()
    this.verificaCadastro()
  }

  buscaEstados() {
    this.service.buscaEstados().subscribe(
      result => this.estados = result
    )
  }

  voltar() {
    window.history.back()
  }

  salvar() {
    this.validaFormulario()
    if (!this.formulario.valid) {
      return
    }
    let novoCemiterio = new CemiterioModel(this.formulario.value)
    this.service.cadastraCemiterio(novoCemiterio).subscribe(
      resp => {
        this.resposta = resp.status
      }
    )
    this.limpaCampos()
  }

  verificaCadastro() {
    let url = window.location.href.split('/')
    this.cadastro = url[url.length - 1] == 'cad'
  }

  validaFormulario() {
    this.camposValidos.forEach(e => {
      e.valido = <boolean>this.formulario.get(e.campo)?.valid
    })
  }

  limpaCampos() {
    this.formulario.reset()
  }
}
