function verificarCaracteristica(event) {
    event.preventDefault();
    const numero = document.getElementById("numero").value;
    const resultado = document.getElementById("resultado");
    const calculo = Math.floor(numero % 100);
    const calculo2 = Math.floor(numero / 100);
    const soma = calculo + calculo2;
    const potencia = soma * soma;
    if (potencia == numero) {  
        resultado.innerText = "O número possui a característica";
    } else {
        resultado.innerText = "O número não possui a característica";
    }

}