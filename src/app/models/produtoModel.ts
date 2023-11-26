import { Sabor } from "./saborModel";

export class Produto{
    id!: number;
    nome!: string;
    tamanho!: number;
    valor!: number;
    observacao!: string;
    sabores!: Array<Sabor>;

    constructor(){
        this.sabores = new Array<Sabor>();
    }
}