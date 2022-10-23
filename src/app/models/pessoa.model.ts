import {SepulturaModel} from "./sepultura.model";

export class PessoaModel {
    id?: number
    nome?: string
    cpf?: string
    dataNascimento?: Date
    sepultura?: SepulturaModel
    falecimento?: Date
    sepultamento?: Date


    constructor(init?: Partial<PessoaModel>) {
        Object.assign(this, init)
    }
}
