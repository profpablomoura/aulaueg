import { Paciente } from "./Paciente.js";

const p1 = new Paciente("Pablo", 100, 1.83, "Masculino");
const p2 = new Paciente("Maria", 70, 1.80, "Feminino");
let dadosP1 = "Dados do Paciente P1 \n";
dadosP1 += "Nome completo: " + p1.nomeCompleto + "\n";
dadosP1 += "Peso: " + p1.peso + "\n";
dadosP1 += "Altura: " + p1.altura + "\n";
dadosP1 += "Sexo: " + p1.sexo + "\n";
dadosP1 += "IMC: " + p1.calcularIMC();
console.log(dadosP1);


p1.nomeCompleto = "Goldofredo";
p1.peso = 70;
p1.altura = 1.80;

dadosP1 = "Dados do Paciente P1 \n";
dadosP1 += "Nome completo: " + p1.nomeCompleto + "\n";
dadosP1 += "Peso: " + p1.peso + "\n";
dadosP1 += "Altura: " + p1.altura + "\n";
dadosP1 += "Sexo: " + p1.sexo + "\n";
dadosP1 += "IMC: " + p1.calcularIMC();
console.log(dadosP1);



//console.log(p1);
//console.log("Valor do IMC: " + p1.calcularIMC());
//console.log(p2);
//console.log("Valor do IMC: " + p2.calcularIMC());


