import {Injectable} from '@angular/core';
import {HttpClient} from "@angular/common/http";

import {CemiterioModel} from "../../models/cemiterio.model";

@Injectable({
    providedIn: 'root'
})
export class FormularioCemiterioService {

    apiCemiterios: string = 'http://localhost:8080/cemiterios'
    apiEstados: string = 'https://servicodados.ibge.gov.br/api/v1/localidades/estados?orderBy=nome'

    constructor(private http: HttpClient) {
    }

    buscarCemiterios() {
        return this.http.get<CemiterioModel[]>(this.apiCemiterios)
    }

    buscarCemiterioPorId(id: number) {
        return this.http.get<CemiterioModel>(`${this.apiCemiterios}/${id}`)
    }

    atualizaCemiterio(id: number, atualizado: CemiterioModel) {
        return this.http.put(`${this.apiCemiterios}/edit/${id}`, atualizado, {observe: 'response'})
    }

    buscaEstados() {
        return this.http.get<Object>(this.apiEstados)
    }

    cadastraCemiterio(cemiterio: CemiterioModel) {
        return this.http.post(this.apiCemiterios, cemiterio, {observe: 'response'})
    }

    deletaUnidade(id: string) {
        return this.http.delete(`${this.apiCemiterios}/del/${id}`, {observe: 'response'})
    }
}
