// Exportação nomeada: outros arquivos podem importar esta classe usando
// `import { Pilha } from "./pilha.js"` (ajuste o caminho relativo conforme a pasta).
// A classe implementa uma pilha, estrutura LIFO: o último elemento que entra é o primeiro que sai.
export class Pilha {
    // Campos privados (o # impede acesso direto fora da classe).
    // #array armazena os elementos; #topo guarda o índice do último elemento.
    #array;
    #topo;

    // O construtor é chamado ao criar uma instância com `new Pilha()`.
    // O vetor começa vazio e -1 indica que não existe índice de topo ainda.
    constructor() {
        this.#array = [];
        this.#topo = -1;
    }

    // Verifica o estado da pilha: retorna true quando o topo é -1; caso contrário, false.
    // Exemplo de uso em outro arquivo: `pilha.estaVazia()`.
    estaVazia() {
        return (this.#topo === -1)
    }

    // Devolve a quantidade de elementos. Como os índices começam em 0, tamanho = topo + 1.
    // Assim, topo -1 resulta em tamanho 0; topo 0 resulta em tamanho 1.
    tamanho() {
        return this.#topo + 1;
    }

    // Insere `elemento` no topo. Primeiro incrementa o índice e depois guarda o valor nessa posição.
    // Exemplo: `pilha.empilhar(10)`. O método modifica a instância e não retorna um valor.
    empilhar(elemento) {
        this.#array[++this.#topo] = elemento;
    }

    // Consulta o valor do topo sem removê-lo, por isso a pilha não muda.
    // Se estiver vazia, lança uma exceção Error; o código que chama pode capturá-la com try/catch.
    acessarTopo() {
        if (this.estaVazia()) {
            throw new Error("A pilha está vazia");
        }
        return this.#array[this.#topo];
    }

    // Remove o elemento do topo ao decrementar o índice; o vetor pode manter o valor antigo,
    // mas ele deixa de fazer parte da pilha. Se vazia, lança Error em vez de remover algo inexistente.
    desempilhar() {
        if (this.estaVazia()) {
            throw new Error("A pilha está vazia");
        }
        this.#topo--;
    }

    // Esvazia completamente a pilha e restaura os mesmos valores do construtor.
    // Depois da chamada, estaVazia() retorna true e tamanho() retorna 0.
    limpar() {
        this.#topo = -1;
        this.#array = [];
    }
}
