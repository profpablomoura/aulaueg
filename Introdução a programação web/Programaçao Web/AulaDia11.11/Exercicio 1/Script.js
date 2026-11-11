function verificarIdade() {
    const idade = document.getElementById("idade").value;
    const resultado = document.getElementById("resultado");

    if (idade < 16) {
        resultado.innerText = "Não-eleitor.";
    } else if (idade >= 16 && idade < 18 || idade > 65) {
        resultado.innerText = "Eleitor facultativo.";
    } else {
        resultado.innerText = "Eleitor obrigatório.";
    }
}