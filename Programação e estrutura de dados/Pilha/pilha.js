export class Pilha {
    //atributos privados da pilha
    #array;
    #topo;

    //criar metodo construtor
    constructor() {
        this.#array = [];
        this.#topo = -1;
    }

    //metodo para verificar se a pilha está vazia
    estaVazia() {
        return (this.#topo === -1)
    }
    
    //obter tamanho da pilha
    tamanho() {
        return this.#topo + 1;
    }

    //metodo para empilhar um elemento na pilha
    empilhar(elemento) {
        this.#array[++this.#topo] = elemento;
    }

    //metodo para acessar o elemento do topo da pilha
    acessarTopo() {
        if (this.estaVazia()) {
            throw new Error("A pilha está vazia");
        }
        return this.#array[this.#topo];
    }

    //metodo para desempilhar um elemento da pilha
    desempilhar() {
        if (this.estaVazia()) {
            throw new Error("A pilha está vazia");
        }
        this.#topo--;
    }

    //metodo limpar a pilha
    limpar() {
        this.#topo = -1;
        this.#array = [];
    }
}
