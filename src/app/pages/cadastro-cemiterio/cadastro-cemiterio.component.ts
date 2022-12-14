import {Component, OnInit} from '@angular/core';
import {CemiterioModel} from "../../models/cemiterio.model";
import {CemiterioService} from "../../services/cemiterio.service";
import {FormBuilder, FormGroup, Validators} from "@angular/forms";
import {faArrowRotateLeft, faSave, faTrash} from "@fortawesome/free-solid-svg-icons";
import {ActivatedRoute} from "@angular/router";
import {logMessages} from "@angular-devkit/build-angular/src/builders/browser-esbuild/esbuild";


@Component({
    selector: 'app-cadastro-cemiterio',
    templateUrl: './cadastro-cemiterio.component.html',
    styleUrls: ['./cadastro-cemiterio.component.css']
})
export class CadastroCemiterioComponent implements OnInit {

    faExcluir = faTrash
    faSalvar = faSave
    faVoltar = faArrowRotateLeft
    estados: any
    cadastro: boolean = false
    resposta: number = 0
    // modeloEdit?: CemiterioModel;
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


    constructor(private service: CemiterioService,
                private formBuilder: FormBuilder,
                private route: ActivatedRoute) {
    }

    ngOnInit(): void {
        this.buscaEstados()
        this.verificaCadastro()
        this.preencheForm()
        console.log(window.location.href.includes("edit"))
        console.log(this.route.url.subscribe(par => console.log(par[1]['path'])))
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

        if (window.location.href.split('/')[4] == 'edit') {
            novoCemiterio.id = parseInt(window.location.href.split('/')[5])
            this.service.atualizaCemiterio(novoCemiterio.id, novoCemiterio).subscribe(
                resp => {
                    this.resposta = resp.status
                })
            return;
        }
        this.service.cadastraCemiterio(novoCemiterio).subscribe(
            resp => {
                this.resposta = resp.status
            }
        )
    }

    verificaCadastro() {
        let url = window.location.href.split('/')[4]
        this.cadastro = url == 'cad'
    }

    validaFormulario() {
        this.camposValidos.forEach(e => {
            e.valido = <boolean>this.formulario.get(e.campo)?.valid
        })
    }

    limpaCampos() {
        this.formulario.reset()
    }

    preencheForm() {
        if (window.location.href.split('/')[4] == 'edit') {
            let id = parseInt(window.location.href.split('/')[5])
            this.service.buscarCemiterioPorId(id).subscribe(
                res => {
                    this.formulario.controls['nome'].setValue(res.nome)
                    this.formulario.controls['endereco'].setValue(res.endereco)
                    this.formulario.controls['cidade'].setValue(res.cidade)
                    this.formulario.controls['numero'].setValue(res.numero)
                    this.formulario.controls['estado'].setValue(res.estado)
                    this.formulario.controls['responsavel'].setValue(res.responsavel)
                }
            )
        }
    }

    excluir() {
        let id = parseInt(window.location.href.split('/')[5])
        this.service.deletaUnidade(`${id}`).subscribe(
            resp => {
                this.resposta = resp.status
                this.formulario.reset()
                setTimeout(() => {
                    window.history.back()
                }, 2000)
            }
        )
    }
}
