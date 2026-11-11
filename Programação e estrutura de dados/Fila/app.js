import { Fila } from './fila.js';

const nome = document.getElementById('nome');
const entrarFila = document.getElementById('entrarFila');
const retirarFila = document.getElementById('retirarFila');
const acessarFila = document.getElementById('acessarFila');
const primeiro = document.getElementById('primeiro');
const filaObj = document.getElementById('fila');


function inserirFila() {
    const nome = nome.value;
    const fila = new Fila();
    fila.acessar();
    fila.enfileirar(nome);
}

