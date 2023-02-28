class Poligono {
    constructor(altura, largura){
        this.altura = altura; //"this" referencia o objeto da classe criada
        this.largura = largura;
    }

    get area(){ //"get" indica funções sem argumentos
        return this.#calcularArea();
    }

    #calcularArea(){ //"#" indica que esse método não será acessível fora dessa classe
        return this.altura * this.largura;
    }
}

let poligono = new Poligono(50, 60);
console.log(poligono.calcularArea);