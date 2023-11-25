import { Cliente } from "./clienteModel";
import { Endereco } from "./enderecoModel";
import { Funcionario } from "./funcionarioModel";
import { Produto } from "./produtoModel";

export class Pedido{
    id!: number;
    data!: Date;
    entrega!: boolean;
    situacao!: number;
    pagamento!: number;
    valor!: number;
    cliente!: Cliente;
    endereco!: Endereco;
    funcionario!: Funcionario;
    produtos!: Array<Produto>;

    constructor(){
        this.valor = 0;
        this.produtos = new Array<Produto>();
    }
}