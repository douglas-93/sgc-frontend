export class CemiterioModel {
    id?: number
    nome?: string
    endereco?: string
    numero?: string
    cidade?: string
    estado?: string
    responsavel?: string

    public constructor(init?: Partial<CemiterioModel>) {
        Object.assign(this, init);
    }

}
