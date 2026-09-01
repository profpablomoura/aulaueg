const tamanhoConjunto = document.getElementById("inTamanhoConjunto");
const btnCriarConjunto = document.getElementById("btnCriarConjunto");
const saidaDeDados = document.getElementById("onSaidaConjunto");
const saidaBusca = document.getElementById("onSaidaNumero");
const buscarNumero = document.getElementById("inNumeroConjunto");
const btnBuscar = document.getElementById("btnBuscar");
const btnMaiorMenor = document.getElementById("btnMaiorMenor");

const conjunto = [];

// Função de manipulação do conjunto
function criarConjunto(array, tamanho) {
    for (let pos = 0; pos < tamanho; pos++) {
        let numeroAleatorio = Math.floor(Math.random() * 1001);
        array[pos] = numeroAleatorio;
    }
}

function eventoCriarConjunto() {
    const tamanho = Number(tamanhoConjunto.value);
    criarConjunto(conjunto, tamanho);
    const saida = "Conjunto = [" + conjunto.join(' | ') + " ]";
    saidaDeDados.innerHTML = saida;

}

function buscarSequencia(array, numero) {
    for (let pos = 0; pos < array.length; pos++) {
        if (array[pos] === numero){
            return pos;
        }
    }
    return -1;

}

function eventoBuscar(){
    const numero = Number(buscarNumero.value);
    const buscar = buscarSequencia(conjunto, numero);
    if (buscar !== -1){
        saidaBusca.innerHTML = `Número ${numero} encontrado na posição ${buscar}`;
    } else {
        saidaBusca.innerHTML = `Número ${numero} não encontrado`;
    }
}

function maiorMenor(array) {
    let maior = array[0];
    let menor = array[0];
  
    for (let pos = 1; pos < array.length; pos++) {
        if (array[pos] > maior) {
            maior = array[pos];
        }
        if (array[pos] < menor) {
            menor = array[pos];
        }
    } return resultado = {
        maior: maior,
        menor: menor
    }
}

function eventoMaiorMenor() {
    const resultado = maiorMenor(conjunto);
    saidaBusca.innerHTML = `Maior número: ${resultado.maior} <br> Menor número: ${resultado.menor}`;
}