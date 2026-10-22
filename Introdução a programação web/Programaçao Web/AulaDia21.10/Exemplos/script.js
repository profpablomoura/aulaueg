function somar(){
    const primeiro = Number ((document.getElementById("numero1")).value);
    const segundo = Number ((document.getElementById("numero2")).value);
    
    const resultado = primeiro + segundo

    document.getElementById("resultado").innerHTML = resultado
}

