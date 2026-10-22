function calcularMedia(){
    const nome = document.getElementById("nome").value;
    const nota1 = Number(document.getElementById("nota1").value);
    const nota2 = Number(document.getElementById("nota2").value);

    const media = (nota1 + nota2) / 2;

    if (media >= 7) {
        document.getElementById("resultado").innerHTML = `A média de ${nome} é: ${media} (Aprovado)`;
    } 

    if (media >= 5 && media < 7) {
        document.getElementById("resultado").innerHTML = `A média de ${nome} é: ${media} (Recuperação)`;
    }

    if (media <= 5 ) {
        document.getElementById("resultado").innerHTML = `A média de ${nome} é: ${media} (Reprovado)`;
    }

}
