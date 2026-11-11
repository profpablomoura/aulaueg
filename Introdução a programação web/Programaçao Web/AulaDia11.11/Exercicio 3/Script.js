function calcularTarifa() {
    const nome = document.getElementById("nome").value;
    const conta = Number(document.getElementById("conta").value);
    const saldo = Number(document.getElementById("tarifa").value);
    const resultado = document.getElementById("resultado");

    const calculoMensal = saldo / 6;

    if (calculoMensal < 1000) {
        tarifa = "Tarifa Básica: R$ 25,00";
    }
    

    if (calculoMensal >= 1000 && calculoMensal < 2000) {
        tarifa = "Tarifa Prata: R$ 20,00";
    }
    
    if (calculoMensal >= 2000 && calculoMensal < 3500) {
        tarifa = "Tarifa Ouro: R$ 13,00";
    }

    if (calculoMensal > 3500) {
        tarifa = "Tarifa Insenta";
    }

    resultado.innerText = "Nome: " + nome;
    resultado.innerText += "\nNúmero da Conta: " + conta;
    resultado.innerText += "\nSaldo Bancario Semestral: " + saldo;
    resultado.innerText += "\nTarifa Bancaria: " + tarifa;
    resultado.innerText += "\nSaldo Final: " + saldoFinal;
}