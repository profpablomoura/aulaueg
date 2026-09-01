function lerNotas(array,tamanhoTurma){
    for (let pos = 0; pos < tamanhoTurma; pos++){
        array[pos] = Number(prompt("Nota: "));
    }
}

function calcularMediaTurma (array){
    let soma = 0;
    for (const valor of array){
        soma += valor;
    } 
    return (soma/array.length);
}

function encontrarMaiorNota(array){
    let maior = array [0];
    for (const nota of array){
        if(nota>maior){
            maior = nota;
        }
    }
    return maior;
}

function encontrarMenorNota(array){
    let menor = array [0];
    for (const nota of array){
        if(nota<menor){
            menor = nota;
        }
    }
    return menor;
}

function mostrarNotas (array, media){
    for (const nota of array){
        if (nota > media){
            console.log("Notas acima da média: " + nota);
        } else{
            console.log("Menor ou igual a média: " + nota);
        }
    }

}
const prompt = require("prompt-sync")();
const tamanhoTurma = Number(prompt("Quantidade da turma: "));
const notas = [];

lerNotas(notas,tamanhoTurma);
console.log(notas);
const media = calcularMediaTurma(notas);
console.log("Média da turma = " + calcularMediaTurma(notas));
const maiorNota = encontrarMaiorNota(notas);
console.log("Mainor nota = " + encontrarMaiorNota(notas));
const menorNota = encontrarMenorNota(notas);
console.log("Menor nota = " + encontrarMenorNota(notas))
const MaiorMenor = mostrarNotas(notas,media);
