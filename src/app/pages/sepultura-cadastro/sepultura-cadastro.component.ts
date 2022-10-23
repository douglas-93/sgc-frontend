import {Component, OnInit} from '@angular/core';
import {faArrowRotateLeft, faSave, faTrash} from "@fortawesome/free-solid-svg-icons";
import {FormBuilder, FormGroup, Validators} from "@angular/forms";
import {ActivatedRoute} from "@angular/router";
import {CemiterioModel} from "../../models/cemiterio.model";
import {CemiterioService} from "../../services/cemiterio.service";
import {SepulturaModel} from "../../models/sepultura.model";
import {SepulturaService} from "../../services/sepultura.service";

@Component({
    selector: 'app-sepultura-cadastro',
    templateUrl: './sepultura-cadastro.component.html',
    styleUrls: ['./sepultura-cadastro.component.css']
})
export class SepulturaCadastroComponent implements OnInit {

    resposta?: number;
    faExcluir = faTrash
    faSalvar = faSave
    faVoltar = faArrowRotateLeft
    cadastro?: boolean;
    cemiterios: CemiterioModel[] = [];
    formulario: FormGroup = this.formBuilder.group({
        local: ['', Validators.required],
        cemiterio: ['', Validators.required],
    })

    camposValidos = [
        {campo: 'local', valido: true},
        {campo: 'cemiterio', valido: true}
    ]

    constructor(private formBuilder: FormBuilder,
                private route: ActivatedRoute,
                private cemiterioService: CemiterioService,
                private sepulturaService: SepulturaService) {
    }

    ngOnInit(): void {
        this.cemiterioService.buscarCemiterios().subscribe(res => this.cemiterios = res)
        this.route.url.subscribe(e => this.cadastro = e[1].path.includes('cad'))
        this.preencheForm()
    }


    salvar() {
        this.validaFormulario()

        if (!this.formulario.valid) return

        let novaSepultura: SepulturaModel = new SepulturaModel(this.formulario.value)
        novaSepultura.id = parseInt(<string>this.route.snapshot.paramMap.get('id'))

        if (!this.cadastro) {
            this.sepulturaService.atualizaSepultura(novaSepultura.id, novaSepultura).subscribe(res => this.resposta = res.status)
            return;
        }

        this.sepulturaService.cadastraSepultura(novaSepultura).subscribe(
            resp => this.resposta = resp.status
        )
    }

    excluir() {
        let id: string = <string>this.route.snapshot.paramMap.get('id')
        this.sepulturaService.deletaSepultura(id).subscribe(
            resp => {
                this.resposta = resp.status
                this.formulario.reset()
                setTimeout(() => {
                    window.history.back()
                }, 2000)
            }
        )
    }

    voltar() {
        window.history.back()
    }

    validaFormulario() {
        this.camposValidos.forEach(e => {
            e.valido = <boolean>this.formulario.get(e.campo)?.valid
        })
    }

    preencheForm() {
        if (!this.cadastro) {
            let id: string = <string>this.route.snapshot.paramMap.get('id')
            this.sepulturaService.buscarSepulturaPorId(id).subscribe(
                res => {
                    this.formulario.controls['local'].setValue(res.local)
                    this.formulario.controls['cemiterio'].setValue(this.cemiterios.find(c => c.id == res.cemiterio?.id))
                }
            )
        }
    }
}
