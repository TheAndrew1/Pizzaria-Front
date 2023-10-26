import { Cliente } from "./clienteModel";
import { Endereco } from "./enderecoModel";
import { Funcionario } from "./funcionarioModel";
import { Pagamento } from "./pagamentoEnum";
import { Produto } from "./produtoModel";
import { Situacao } from "./situacaoEnum";

export class Pedido{
    id!: number;
    data!: Date;
    entrega!: boolean;
    situacao!: Situacao;
    pagamento!: Pagamento;
    valor!: number;
    cliente!: Cliente;
    endereco!: Endereco;
    funcionario!: Funcionario;
    produtos!: Array<Produto>;
}