function calcularReajuste() {
    const salario = Number(document.getElementById("salario").value);
    if (salario <= 1412) {
        const reajuste = salario * 0.50; // 50% de reajuste
        const salarioReajustado = salario + reajuste;
        document.getElementById("resultado").innerText = "Salário reajustado: R$ " + salarioReajustado.toFixed(2);
    } 
    else {
        const reajuste = salario * 0.40; // 40% de reajuste
        const salarioReajustado = salario + reajuste;
        document.getElementById("resultado").innerText = "Salário reajustado: R$ " + salarioReajustado.toFixed(2);
    }
}