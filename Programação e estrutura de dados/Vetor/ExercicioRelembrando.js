const prompt = require("prompt-sync")();
const quantidadeDeAlunos = 2;
let somaDasNotas = 0;
let maiorNota = 0;
let nomeDoAlunoComMaiorNota = "";
let menorNota = Infinity;
let nomeDoAlunoComMenorNota = "";

function calcularMediaDaTurma() {

    for (let posicao = 1; posicao <= quantidadeDeAlunos; posicao++) {

        const nomeDoAluno = prompt("Nome do aluno " + posicao + ": ");
        const notaDoAluno = Number(prompt("Digite a nota do aluno " + nomeDoAluno + ": "));

        somaDasNotas = somaDasNotas + notaDoAluno;


        if (notaDoAluno > maiorNota) {
            maiorNota = notaDoAluno;
            nomeDoAlunoComMaiorNota = nomeDoAluno;
        }


        if (notaDoAluno < menorNota) {
            menorNota = notaDoAluno;
            nomeDoAlunoComMenorNota = nomeDoAluno;
        }
    }


    const mediaDaTurma = somaDasNotas / quantidadeDeAlunos;

    console.log("\nRESULTADOS");
    console.log("Média da turma: " + mediaDaTurma);

    console.log("\nMaior nota: " + maiorNota);
    console.log("Aluno com maior nota: " + nomeDoAlunoComMaiorNota);

    console.log("\nMenor nota: " + menorNota);
    console.log("Aluno com menor nota: " + nomeDoAlunoComMenorNota);

    console.log("\nSITUAÇÃO DE CADA ALUNO EM RELAÇÃO À MÉDIA");


    for (let posicao = 1; posicao <= quantidadeDeAlunos; posicao++) {

        const nomeDoAluno = prompt("Nome do aluno " + posicao + ": ");
        const notaDoAluno = Number(prompt("Digite a nota do aluno " + nomeDoAluno + ": "));

        if (notaDoAluno > mediaDaTurma) {
            console.log(nomeDoAluno + " está ACIMA da média (" + notaDoAluno + " pontos | média " + mediaDaTurma + ")");
        } else if (notaDoAluno < mediaDaTurma) {
            console.log(nomeDoAluno + " está ABAIXO da média (" + notaDoAluno + " pontos | média " + mediaDaTurma + ")");
        } else {
            console.log(nomeDoAluno + " está NA média (" + notaDoAluno + " pontos | média " + mediaDaTurma + ")");
        }
    }
}

calcularMediaDaTurma();