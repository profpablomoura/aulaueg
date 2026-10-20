
import { Pilha } from "./pilha.js";

const texto = document.getElementById("texto");
const verificar = document.getElementById("verificar");
const resultado = document.getElementById("resultado");

verificar.addEventListener("click", function () {
    let palavra = texto.value.toLowerCase();

    palavra = palavra.replace(/[^a-z0-9]/g, "");

    if (palavra.length === 0) {
        resultado.textContent = "Digite alguma coisa!";
        return;
    }

    const pilha = new Pilha();

    for (let i = 0; i < palavra.length; i++) {
        pilha.empilhar(palavra[i]);
    }

    let palavraInvertida = "";

    while (!pilha.estaVazia()) {
        palavraInvertida += pilha.acessarTopo();
        pilha.desempilhar();
    }

    if (palavra === palavraInvertida) {
        resultado.textContent = "É um palíndromo!";
    } else {
        resultado.textContent = "Não é um palíndromo!";
    }
});
