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

}