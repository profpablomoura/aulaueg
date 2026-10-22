function calcularOrcamento(){
    const nome = document.getElementById("nome").value;
    const servico = document.getElementById("servico").value;
    const valorUnitario = Number (document.getElementById ("valor").value);
    const quantidade = Number (document.getElementById ("quantidade").value);

    const total = valorUnitario * quantidade;

    document.getElementById("resultado").innerHTML = `O orçamento de ${servico} para ${nome} é: R$ ${total}`;
}