
// Importa a classe Pilha, exportada pelo arquivo pilha.js na mesma pasta.
// A lógica da estrutura de dados fica em pilha.js; este arquivo usa seus métodos.
import { Pilha } from "./pilha.js";

// Localiza no HTML os elementos pelos seus ids. O HTML deve conter esses três ids.
const texto = document.getElementById("texto");
const verificar = document.getElementById("verificar");
const resultado = document.getElementById("resultado");

// Executa a função abaixo quando o botão de verificação recebe um clique.
verificar.addEventListener("click", function () {
    // Lê o texto digitado e converte letras maiúsculas em minúsculas,
    // para a comparação não diferenciar o uso de maiúsculas e minúsculas.
    let palavra = texto.value.toLowerCase();

    // Mantém apenas letras sem acento de a a z e algarismos de 0 a 9.
    // Espaços e sinais de pontuação são ignorados na análise.
    palavra = palavra.replace(/[^a-z0-9]/g, "");

    // Se a limpeza removeu tudo, informa o usuário e encerra o tratamento do clique.
    if (palavra.length === 0) {
        resultado.textContent = "Digite alguma coisa!";
        return;
    }

    // Cria uma pilha nova para guardar os caracteres desta palavra.
    const pilha = new Pilha();

    // Percorre a palavra da esquerda para a direita e empilha cada caractere.
    // Em uma pilha, o último elemento inserido fica no topo.
    for (let i = 0; i < palavra.length; i++) {
        pilha.empilhar(palavra[i]);
    }

    // Guardará os caracteres na ordem em que forem retirados da pilha.
    let palavraInvertida = "";

    // Enquanto a pilha não estiver vazia, consulta seu topo e remove esse item.
    // A pilha segue LIFO (último a entrar, primeiro a sair), invertendo a ordem.
    while (!pilha.estaVazia()) {
        palavraInvertida += pilha.acessarTopo();
        pilha.desempilhar();
    }

    // Compara a palavra normalizada com a versão invertida para decidir o resultado.
    if (palavra === palavraInvertida) {
        resultado.textContent = "É um palíndromo!";
    } else {
        resultado.textContent = "Não é um palíndromo!";
    }
});
