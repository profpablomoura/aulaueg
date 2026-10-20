
import { Pilha } from "./pilha.js";

function verificarPalindromo(texto) {
    texto = texto.toLowerCase();

    let textoLimpo = texto.replace(/[^a-zA-Z0-9À-ÿ]/g, "");

    if (textoLimpo.length === 0) {
        return null;
    }

    let pilha = new Pilha();

    // Empilhar os caracteres
    for (let i = 0; i < textoLimpo.length; i++) {
        pilha.empilhar(textoLimpo[i]);
    }

    // Desempilhar e comparar
    for (let i = 0; i < textoLimpo.length; i++) {
        let caractere = pilha.acessarTopo();

        pilha.desempilhar();

        if (caractere !== textoLimpo[i]) {
            return false;
        }
    }

    return true;
}
