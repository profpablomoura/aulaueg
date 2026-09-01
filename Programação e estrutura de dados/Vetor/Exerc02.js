const prompt = require("prompt-sync")();

function preencherArray(tamanhoArray){

    const numeros = [];

    for (let pos = 0; pos < tamanhoArray; pos++){
    numeros[pos] = Math.floor(Math.random() * 1001);
    }   

    return numeros;

}

const tamanhoArray = Number(prompt("Qual será o tamanho do array? "));

const array = preencherArray(tamanhoArray);

console.log(array);
