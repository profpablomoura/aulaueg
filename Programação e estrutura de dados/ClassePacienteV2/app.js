import { Paciente } from "./Paciente.js";

const btnCadastrar = document.getElementById("btnCadastrar");

btnCadastrar.onclick = function(){

    let nomeCompleto = document.getElementById("nomeCompleto").value;

    let peso = Number(document.getElementById("peso").value);

    let altura = Number(document.getElementById("altura").value);

    let sexo = document.getElementById("sexo").value;

    const paciente = new Paciente(nomeCompleto, peso, altura, sexo);

    let dadosPaciente = "";

    dadosPaciente += "Nome Completo: " + paciente.nomeCompleto + "<br>";

    dadosPaciente += "Peso: " + paciente.peso + " kg<br>";

    dadosPaciente += "Altura: " + paciente.altura + " m<br>";

    dadosPaciente += "Sexo: " + paciente.sexo + "<br>";

    dadosPaciente += "IMC: " + paciente.calcularIMC().toFixed(2) + "<br>";

    dadosPaciente += "Faixa de Risco: " + paciente.calcularFaixaRisco() + "<br>";

    dadosPaciente += "Peso Ideal: " + paciente.calcularPesoIdeal().toFixed(2) + " kg";

    document.getElementById("dadosPaciente").innerHTML = dadosPaciente;
}