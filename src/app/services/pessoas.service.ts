import {Injectable} from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {CemiterioModel} from "../models/cemiterio.model";
import {SepulturaModel} from "../models/sepultura.model";
import {PessoaModel} from "../models/pessoa.model";

@Injectable({
    providedIn: 'root'
})
export class PessoasService {

    apiPessoas: string = 'http://localhost:8080/pessoas'

    constructor(private http: HttpClient) {
    }

    buscarPessoas() {
        return this.http.get<PessoaModel[]>(this.apiPessoas)
    }

    buscarPessoaPorId(id: string) {
        return this.http.get<PessoaModel>(`${this.apiPessoas}/${id}`)
    }

    atualizaPessoa(id: number, atualizado: PessoaModel) {
        return this.http.put(`${this.apiPessoas}/edit/${id}`, atualizado, {observe: 'response'})
    }

    cadastraPessoa(cemiterio: PessoaModel) {
        return this.http.post(this.apiPessoas, cemiterio, {observe: 'response'})
    }

    deletaPessoa(id: string) {
        return this.http.delete(`${this.apiPessoas}/del/${id}`, {observe: 'response'})
    }
}
