function calcularCilindro() {
    const raio = Number(document.getElementById("cilindro").value);
    const altura = Number(document.getElementById("altura").value);

    const arealateral = 2 * Math.PI * raio * altura;
    const areatotal = 2 * Math.PI * raio * (altura + raio);
    const volume = Math.PI * raio * raio * altura;

    document.getElementById("figura").innerText = "Cilindro";
    document.getElementById("arealateral").innerText = arealateral.toFixed(2);
    document.getElementById("areatotal").innerText = areatotal.toFixed(2);
    document.getElementById("volume").innerText = volume.toFixed(2);
}

