function calcularCubo() {
    const aresta = Number (document.getElementById("aresta").value);
    const areaFace = aresta * aresta;
    const areaLateral = 4 * aresta * aresta;
    const areaTotal = 6 * aresta * aresta;
    const volume = aresta ** 3;

    document.getElementById("figura").textContent = "Cubo";
    document.getElementById("areaFace").textContent = areaFace.toFixed(2);
    document.getElementById("areaLateral").textContent = areaLateral.toFixed(2);
    document.getElementById("areaTotal").textContent = areaTotal.toFixed(2);
    document.getElementById("volume").textContent = volume.toFixed(2);
}