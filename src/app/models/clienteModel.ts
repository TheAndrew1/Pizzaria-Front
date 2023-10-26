import { Endereco } from "./enderecoModel";

export class Cliente{
    id!: number;
    nome!: string;
    idade!: number;
    email!: string;
    senha!: string;
    enderecos!: Array<Endereco>;
}