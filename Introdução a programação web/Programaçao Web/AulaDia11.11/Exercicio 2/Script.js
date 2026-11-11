function calcularDelta() {
    const a = Number(document.getElementById("a").value);
    const b = Number(document.getElementById("b").value);
    const c = Number(document.getElementById("c").value);
    const resultado = document.getElementById("resultado");

    const delta = b * b - 4 * a * c;
    resultado.innerText = "O valor de Delta é: " + delta;

    if (delta < 0) {
        resultado.innerText += "\nRaízes Imaginárias.";
        
    } else if (delta === 0) {
        const x = -b / (2 * a);
        resultado.innerText += "\nRaíz Única." ;
        resultado.innerText += "\nValor da raíz: " + x;
    } else {
        const x1 = (-b + Math.sqrt(delta)) / (2 * a);
        const x2 = (-b - Math.sqrt(delta)) / (2 * a);
        resultado.innerText += "\nRaízes Distintas.";
        resultado.innerText += "\nValor da primeira raíz: " + x1;
        resultado.innerText += "\nValor da segunda raíz: " + x2;
    }
}
