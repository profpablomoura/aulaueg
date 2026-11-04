import {Pilha} from './pilha.js';




const conjunto = [];
const pilha = new Pilha();

function criarConjunto(array, tamanho) {
    for (let pos = 0; pos < tamanho; pos++) {
        let numeroAleatorio = Math.floor(Math.random() * 1001);
        array[pos] = numeroAleatorio;
    }
}

    for (let i = 0; i < palavra.length; i++) {
        pilha.empilhar(palavra[i]);
    }

    let palavraInvertida = "";

    while (!pilha.estaVazia()) {
        palavraInvertida += pilha.acessarTopo();
        pilha.desempilhar();
    }