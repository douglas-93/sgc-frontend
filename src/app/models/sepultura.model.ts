import {CemiterioModel} from "./cemiterio.model";

export class SepulturaModel {
    id?: number
    local?: string
    cemiterio?: CemiterioModel

    public constructor(init?: Partial<SepulturaModel>) {
        Object.assign(this, init);
    }
}
