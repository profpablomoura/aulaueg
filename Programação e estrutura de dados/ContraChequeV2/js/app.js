import { Funcionario } from "./Funcionario.js";

const btnCadastrar = document.getElementById("btnCadastrar");

btnCadastrar.onclick = function () {

    // Pega os dados digitados no HTML
    let matricula = document.getElementById("matricula").value;
    let nome = document.getElementById("nome").value;
    let numeroDependentes = Number(document.getElementById("numeroDependentes").value);
    let salarioBase = Number(document.getElementById("salarioBase").value);
    let producao = Number(document.getElementById("producao").value);

    // Cria o objeto funcionario
    const funcionario = new Funcionario(
        matricula,
        nome,
        numeroDependentes,
        salarioBase,
        producao
    );

    // Gera o contracheque
    let contracheque = funcionario.gerarContracheque();

    // Mostra o contracheque na tela
    document.getElementById("dadosFuncionario").innerHTML =
        contracheque.replace(/\n/g, "<br>");
};