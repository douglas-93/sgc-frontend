import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {CemiterioModel} from "../../models/cemiterio.model";
import {SepulturaModel} from "../../models/sepultura.model";

@Injectable({
  providedIn: 'root'
})
export class SepulturaServiceService {

    apiSepulturas: string = 'http://localhost:8080/sepulturas'

  constructor(private http: HttpClient) { }

    buscarSepulturas() {
        return this.http.get<CemiterioModel[]>(this.apiSepulturas)
    }

    buscarSepulturaPorId(id: string) {
        return this.http.get<SepulturaModel>(`${this.apiSepulturas}/${id}`)
    }

    atualizaSepultura(id: number, atualizado: SepulturaModel) {
        return this.http.put(`${this.apiSepulturas}/edit/${id}`, atualizado, {observe: 'response'})
    }

    cadastraSepultura(cemiterio: SepulturaModel) {
        return this.http.post(this.apiSepulturas, cemiterio, {observe: 'response'})
    }

    deletaSepultura(id: string) {
        return this.http.delete(`${this.apiSepulturas}/del/${id}`, {observe: 'response'})
    }
}
