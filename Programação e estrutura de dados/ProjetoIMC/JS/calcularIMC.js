const inNome = document.getElementById("idInNomeCompleto");
const inPeso = document.getElementById("idInPeso");
const inAltura = document.getElementById("idInAltura");
const btnCalcular = document.getElementById("idBtnCalcular");
const outResultado = document.getElementById("idOutResultado");

function calcularIMC() {
    const nome = inNome.value;
    const peso = Number(inPeso.value);
    const altura = Number(inAltura.value);
    const imc = (peso / (altura * altura));
    const saída = `Olá ${nome}, seu IMC é ${imc.toFixed(2)}`;
    outResultado.innerHTML = saída;
}
