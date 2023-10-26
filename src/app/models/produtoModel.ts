import { Sabor } from "./saborModel";
import { Tamanho } from "./tamanhoEnum";

export class Produto{
    id!: number;
    nome!: string;
    tamanho!: Tamanho;
    valor!: number;
    observacao!: string;
    sabores!: Array<Sabor>;
}