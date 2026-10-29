function calcularEsfera() {
    const raio = Number(document.getElementById("raio").value);
    const diametro = 2 * raio;
    const area = 4 * Math.PI * raio **2;
    const volume = (4/3) * Math.PI * raio **3;

    document.getElementById("figura").textContent = "Esfera";
    document.getElementById("diametro").textContent = diametro.toFixed(2);
    document.getElementById("area").textContent = area.toFixed(2);
    document.getElementById("volume").textContent = volume.toFixed(2);
}