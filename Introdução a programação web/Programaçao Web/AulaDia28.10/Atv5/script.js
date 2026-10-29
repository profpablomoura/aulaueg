function calcularParalelepipedo() {
    const comprimento = Number(document.getElementById("comprimento").value);
    const largura = Number(document.getElementById("largura").value);
    const altura = Number(document.getElementById("altura").value);
   
    const areaTotal = 2 * (comprimento * largura + comprimento * altura + largura * altura);
    const volume = comprimento * largura * altura;
    const diagonal = Math.sqrt(comprimento ** 2 + largura ** 2 + altura ** 2);

    document.getElementById("figura").textContent = "Paralelepípedo";
    document.getElementById("areaTotal").textContent = areaTotal.toFixed(2);
    document.getElementById("volume").textContent = volume.toFixed(2);
    document.getElementById("diagonal").textContent = diagonal.toFixed(2);
}