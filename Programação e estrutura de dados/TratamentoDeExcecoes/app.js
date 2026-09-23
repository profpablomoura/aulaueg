
function saqueNaConta(valorDoSaldo, valorDoSaque){
    if(valorDoSaldo < valorDoSaque)
        throw new Error("Saldo insuficiente"); //bateu no comando throw nada é executado
    return valorDoSaldo - valorDoSaque;
}


let saldo = 1000;
let saque = 1500;

try{
  saldo = saqueNaConta (saldo, saque);  
} catch (erro){
    console.log("Erro do Sistema: " + erro.message);
} finally {
    console.log ("Saldo atual R$ " + saldo);
}

