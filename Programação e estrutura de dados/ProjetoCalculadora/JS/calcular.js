const num1 = document.getElementById("idInNum1");
const num2 = document.getElementById("idInNum2");
const resultado = document.getElementById("idOutResultado");
const btnSomar = document.getElementById("idBtnSomar");
const btnSubtrair = document.getElementById("idBtnSubtrair");
const btnMultiplicar = document.getElementById("idBtnMultiplicar");
const btnDividir = document.getElementById("idBtnDividir");

function calcularSoma() {
    const numero1 = Number(num1.value);
    const numero2 = Number(num2.value);
    const valorResultado = numero1 + numero2;
    resultado.innerHTML = `O resultado da soma é: ${valorResultado}`;
}

function calcularSubtracao() {
    const numero1 = Number(num1.value);
    const numero2 = Number(num2.value);
    const valorResultado = numero1 - numero2;
    resultado.innerHTML = `O resultado da subtração é: ${valorResultado}`;
}

function calcularMultiplicacao() {
    const numero1 = Number(num1.value);
    const numero2 = Number(num2.value);
    const valorResultado = numero1 * numero2;
    resultado.innerHTML = `O resultado da multiplicação é: ${valorResultado}`;
}

function calcularDivisao() {
    const numero1 = Number(num1.value);
    const numero2 = Number(num2.value);
    const valorResultado = numero1 / numero2;
    resultado.innerHTML = `O resultado da divisão é: ${valorResultado}`;
}

function calcularPotencia() {
    const numero1 = Number(num1.value);
    const numero2 = Number(num2.value);
    const valorResultado = numero1 ** numero2;  
    resultado.innerHTML = `O resultado da potência é: ${valorResultado}`;
}

function calcularRaiz() {
    const numero1 = Number(num1.value);
    const numero2 = Number(num2.value);
    const valorResultado = Math.pow(numero1, 1/numero2);
    resultado.innerHTML = `O resultado da raiz é: ${valorResultado.toFixed(2)}`;
}

