import { Pilha } from "./pilha.js";
const numero = document.getElementById("idInNumero");
const btnExecutar = document.getElementById("btnExecutar");
const resultado = document.getElementById ("idOutResultado");

function verificarCapicua(numero) {
    const pilha = new Pilha();
    let resto = 0;
    let numerar = numero;

    while(numerar > 0) {
        resto = numerar % 10;
        pilha.empilhar(resto);
        numerar = Math.floor(numerar / 10); 
    }

    let numeroInvertido = 0;
    let multiplicador = 1;
    let valorPilha = 0;
    while (!pilha.estaVazia()) {
        valorPilha= pilha.acessar() * multiplicador;
        pilha.desempilhar();
        numeroInvertido = numeroInvertido + valorPilha;
        multiplicador *= 10;
    }

    return numero === numeroInvertido;

}


function exercutarBotao() {
    const valor = Number(numero.value);
    let saída = "O número é " + valor;
    if (verificarCapicua(valor)) saída += " é um número capicua";
    else saída += " não é um número capicua";
    resultado.innerText = saída;
}


btnExecutar.addEventListener("click", exercutarBotao);
