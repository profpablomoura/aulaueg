export class Funcionario {

    // Atributos
    #matricula;
    #nome;
    #numeroDependentes;
    #salarioBase;
    #producao;


    // Construtor
    constructor(matricula, nome, numeroDependentes, salarioBase, producao) {

        this.matricula = matricula;
        this.nome = nome;
        this.numeroDependentes = numeroDependentes;
        this.salarioBase = salarioBase;
        this.producao = producao;
    }


    // Gets
    get matricula() {
        return this.#matricula;
    }

    get nome() {
        return this.#nome;
    }

    get numeroDependentes() {
        return this.#numeroDependentes;
    }

    get salarioBase() {
        return this.#salarioBase;
    }

    get producao() {
        return this.#producao;
    }


    // Sets
    set matricula(novaMatricula) {
        this.#matricula = novaMatricula;
    }

    set nome(novoNome) {
        this.#nome = novoNome;
    }

    set numeroDependentes(novoNumeroDependentes) {
        this.#numeroDependentes = Number(novoNumeroDependentes);
    }

    set salarioBase(novoSalarioBase) {
        this.#salarioBase = Number(novoSalarioBase);
    }

    set producao(novaProducao) {
        this.#producao = Number(novaProducao);
    }


    calcularGratificacao() {

        if (this.#producao <= 1000) {
            return 500;

        } else if (this.#producao <= 2000) {
            return 1250;

        } else {
            return 2250;
        }
    }


    calcularSalarioBruto() {

        return this.#salarioBase + this.calcularGratificacao();
    }


    calcularDescontoINSS() {

        let salarioBruto = this.calcularSalarioBruto();

        if (salarioBruto <= 1412) {
            return salarioBruto * 0.075;

        } else if (salarioBruto <= 2666.68) {
            return salarioBruto * 0.09;

        } else if (salarioBruto <= 4000.03) {
            return salarioBruto * 0.12;

        } else {
            return salarioBruto * 0.14;
        }
    }


    calcularDescontoIRPF() {

        let salarioBruto = this.calcularSalarioBruto();

        let descontoDependentes =
            this.#numeroDependentes * 123;

        let descontoIRPF;


        if (salarioBruto <= 2259.20) {
            descontoIRPF = 0;

        } else if (salarioBruto <= 2826.65) {
            descontoIRPF = salarioBruto * 0.075;

        } else if (salarioBruto <= 3751.05) {
            descontoIRPF = salarioBruto * 0.15;

        } else if (salarioBruto <= 4664.68) {
            descontoIRPF = salarioBruto * 0.225;

        } else {
            descontoIRPF = salarioBruto * 0.275;
        }


        descontoIRPF =
            descontoIRPF - descontoDependentes;


        if (descontoIRPF < 0) {
            descontoIRPF = 0;
        }


        return descontoIRPF;
    }


    calcularSalarioLiquido() {

        return this.calcularSalarioBruto()
            - this.calcularDescontoINSS()
            - this.calcularDescontoIRPF();
    }


    gerarContracheque() {

        let contracheque = "GYNALIMENTOS\n";

        contracheque += "CONTRACHEQUE DO FUNCIONÁRIO\n\n";

        contracheque +=
            "Matrícula: " + this.#matricula + "\n";

        contracheque +=
            "Nome: " + this.#nome + "\n";

        contracheque +=
            "Número de dependentes: "
            + this.#numeroDependentes + "\n";

        contracheque +=
            "Salário base: R$ "
            + this.#salarioBase.toFixed(2) + "\n";

        contracheque +=
            "Valor da gratificação: R$ "
            + this.calcularGratificacao().toFixed(2) + "\n";

        contracheque +=
            "Salário bruto: R$ "
            + this.calcularSalarioBruto().toFixed(2) + "\n";

        contracheque +=
            "Valor do desconto do INSS: R$ "
            + this.calcularDescontoINSS().toFixed(2) + "\n";

        contracheque +=
            "Valor do desconto do IRPF: R$ "
            + this.calcularDescontoIRPF().toFixed(2) + "\n";

        contracheque +=
            "Valor total de desconto por dependentes: R$ "
            + (this.#numeroDependentes * 123).toFixed(2) + "\n";

        contracheque +=
            "Salário líquido: R$ "
            + this.calcularSalarioLiquido().toFixed(2);


        return contracheque;
    }
}