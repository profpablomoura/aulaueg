export class Paciente {
    //Atributos
    #nomeCompleto;
    #peso;
    #altura;
    #sexo;

    //Metodos
    constructor(nomeCompleto,peso,altura,sexo){
         this.#nomeCompleto = nomeCompleto;
         this.#peso = peso;
         this.#altura = altura;
         this.#sexo = sexo;
    }

    //gets
    get nomeCompleto(){return this.#nomeCompleto;}
    get peso(){return this.#peso;}
    get altura(){return this.#altura;}
    get sexo(){return this.#sexo;}

    //sets
    set nomeCompleto(novoNomeCompleto){this.#nomeCompleto = novoNomeCompleto;}
    set peso(novoPeso){this.#peso = novoPeso;}
    set altura(novaAltura){this.#altura = novaAltura;}
    set sexo(novoSexo){this.#sexo = novoSexo;}

    calcularIMC(){
       return (this.#peso / (this.#altura * this.#altura))
    }

    calcularFaixaRisco(){
        if(this.calcularIMC() < 20){
            return "abaixo do peso ideal";
        }else if(this.calcularIMC() <= 25){
            return "peso normal";
        }else if(this.calcularIMC() <= 30){
            return "excesso de peso";
        }else if(this.calcularIMC() <= 35){
            return "obesidade";
        }else{
            return "obesidade mórbida";
        }
    }

    calcularPesoIdeal(){
        if(this.#sexo == "Masculino"){
            return (72.7 * this.#altura) - 58;
        }else{
            return (62.1 * this.#altura) - 44.7;
        }
    }
}