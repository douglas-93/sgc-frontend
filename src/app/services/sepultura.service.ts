import {Injectable} from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {SepulturaModel} from "../models/sepultura.model";

@Injectable({
  providedIn: 'root'
})
export class SepulturaService {

    apiSepulturas: string = 'http://localhost:8080/sepulturas'

  constructor(private http: HttpClient) { }

    buscarSepulturas() {
        return this.http.get<SepulturaModel[]>(this.apiSepulturas)
    }

    buscarSepulturaPorId(id: string) {
        return this.http.get<SepulturaModel>(`${this.apiSepulturas}/${id}`)
    }

    atualizaSepultura(id: number, atualizado: SepulturaModel) {
        return this.http.put(`${this.apiSepulturas}/edit/${id}`, atualizado, {observe: 'response'})
    }

    cadastraSepultura(sepultura: SepulturaModel) {
        return this.http.post(this.apiSepulturas, sepultura, {observe: 'response'})
    }

    deletaSepultura(id: string) {
        return this.http.delete(`${this.apiSepulturas}/del/${id}`, {observe: 'response'})
    }
}
