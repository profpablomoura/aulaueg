import { Pilha } from "./pilha.js";

const tamanhoConjunto = document.getElementById("idInTamanho");
const saidaDeDados = document.getElementById("idOutResultado");

let conjunto = [];

function criarConjunto(array, tamanho) {

    for (let pos = 0; pos < tamanho; pos++) {
        let numeroAleatorio = Math.floor(Math.random() * 101);
        array[pos] = numeroAleatorio;
    }

}

function inverterConjunto(array) {

    const pilha = new Pilha();

    for (let pos = 0; pos < array.length; pos++) {
        pilha.empilhar(array[pos]);
    }

    let conjuntoInvertido = [];
    let pos = 0;

    while (!pilha.estaVazia()) {
        conjuntoInvertido[pos] = pilha.acessarTopo();
        pilha.desempilhar();
        pos++;
    }

    return conjuntoInvertido;

}

function eventoCriarConjunto() {

    const tamanho = Number(tamanhoConjunto.value);
    conjunto = [];
    criarConjunto(conjunto, tamanho);
    let saida = "Conjunto original = [" + conjunto.join(" | ") + "]";
    const conjuntoInvertido = inverterConjunto(conjunto);
    saida += "\n\nConjunto invertido = [" + conjuntoInvertido.join(" | ") + "]";
    saidaDeDados.innerText = saida;

}

document.getElementById("btnExecutar").addEventListener("click", eventoCriarConjunto);
