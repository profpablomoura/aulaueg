const tamanhoConjunto = document.getElementById("inTamanhoConjunto");
const btnCriarConjunto = document.getElementById("btnCriarConjunto");
const saidaDeDados = document.getElementById("onSaidaConjunto");
const saidaBusca = document.getElementById("onSaidaNumero");
const buscarNumero = document.getElementById("inNumeroConjunto");
const btnBuscar = document.getElementById("btnBuscar");
const btnBubbleSort = document.getElementById("btnBubbleSort");
const btnNovoVetor = document.getElementById("btnNovoVetor");
const btnBuscaBinaria = document.getElementById("btnBuscaBinaria");


const conjunto = [];

//Funções
function criarConjunto(array, tamanho) {
    for (let pos = 0; pos < tamanho; pos++) {
        let numeroAleatorio = Math.floor(Math.random() * 1001);
        array[pos] = numeroAleatorio;
    }
}

function novoVetor(arrayAnterior) {
    const novoArray = [];
    for (let pos = 0; pos < arrayAnterior.length; pos++) {
        novoArray[pos] = arrayAnterior[pos];
    }
    return novoArray;
}

function buscarSequencia(array, numero) {
    for (let pos = 0; pos < array.length; pos++) {
        if (array[pos] === numero) {
            return pos;
        }
    }
    return -1;
}

function bubbleSort(array) {
    let n = array.length;
    for (let i = 0; i < n - 1; i++) {
        for (let j = 0; j < n - i - 1; j++) {
            if (array[j] > array[j + 1]) {
                let temp = array[j];
                array[j] = array[j + 1];
                array[j + 1] = temp;
            }
        }
    }
}

function buscaBinaria(array, numero) {
    let inicio = 0;
    let fim = array.length - 1;

    while (inicio <= fim) {
        let meio = Math.floor((inicio + fim) / 2);
        if (array[meio] === numero) {
            return meio;
        } else if (array[meio] < numero) {
            inicio = meio + 1;
        } else {
            fim = meio - 1;
        }
    }
    return -1;
}

//Eventos
function eventoCriarConjunto() {
    const tamanho = Number(tamanhoConjunto.value);
    criarConjunto(conjunto, tamanho);
    const saida = "Conjunto = [" + conjunto.join(' | ') + " ]";
    saidaDeDados.innerHTML = saida;
}

function eventoNovoVetor() {
    const novoArray = novoVetor(conjunto);
    const saida = "Novo conjunto = [" + novoArray.join(' | ') + " ]";
    saidaDeDados.innerHTML = saida;
}

function eventoBuscar() {
    const numero = Number(buscarNumero.value);
    const buscar = buscarSequencia(conjunto, numero);
    const saida = "Número " + numero + " encontrado na posição " + buscar;
    saidaDeDados.innerHTML = saida;
}

function eventoBubbleSort() {
    bubbleSort(conjunto);
    const saida = "Conjunto ordenado = [" + conjunto.join(' | ') + " ]";
    saidaDeDados.innerHTML = saida;
}

function eventoBuscaBinaria() {
    const numero = Number(buscarNumero.value);
    const buscar = buscaBinaria(conjunto, numero);
    const saida = "Número " + numero + " encontrado na posição " + buscar;
    saidaDeDados.innerHTML = saida;
}
