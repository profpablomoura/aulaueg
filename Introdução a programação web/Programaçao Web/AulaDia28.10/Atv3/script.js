function calcularCone() {
    const raio = Number(document.getElementById("raio").value);
    const altura = Number(document.getElementById("altura").value);
    const geratriz = Math.sqrt(raio ** 2 + altura ** 2);
    const areaLateral = Math.PI * raio * geratriz;
    const areaTotal = Math.PI * raio * (raio + geratriz);
    const volume = (1/3) * Math.PI * raio ** 2 * altura;

    document.getElementById("figura").textContent = "Cone";
    document.getElementById("geratrizResultado").textContent = geratriz.toFixed(2);
    document.getElementById("areaLateralResultado").textContent = areaLateral.toFixed(2);
    document.getElementById("areaTotalResultado").textContent = areaTotal.toFixed(2);
    document.getElementById("volumeResultado").textContent = volume.toFixed(2);
}