# Programação orientada a objetos
Traz um cuidado ao uso estruturado, com conceitos como objetos e classes, cuidados com variáveis e rotinas (encapsulamento) e um melhor reuso de código (herança).

~~~javascript
//estruturado
    var valorHora = 50;
    var tempoEstimado = 20;
    var desconto = valorHora * tempoEstimado * (10/100);
    var custoEstimado = valorHora * tempoEstimado - desconto;
    console.log(custoEstimado);

//poo
    const job = new Job();
    job.valorHora = 50;
    job.tempoEstimado = 20;
    job.desconto = 10;
    const custoEstimado = job.calcularEstimativa();
    console.log(custoEstimado);
~~~


## Objetos
Todo objeto possui:
* propriedades e funcionalidades;
* estado e comportamentos;
* atributos e métodos

## Objetos abstratos vs do mundo real
Objetos reais como pessoa, alunos, produtos e carrinho de compra são fáceis de identificar, entretanto, alguns objetos abstratos podem ser fundamentais na maioria dos sistemas, por ex: autenticação, autorização, etc.

## Classes
Funcionam como molde para os objetos. Os objetos são criados a partir de uma classe e muitos deles podem ser feitos da mesma classe.
Em JavaScript:
* Syntactical sugar (o sugar coating da sintaxe): o js utiliza o conceito de classes para representar, no fundo, protótipos, por isso difere de linguagens totalmente orientada a objetos;
* Prototype (herança prototipal): os objetos criados heram propriedades e métodos de classes, não somente da sua classe, mas também de classes pais.

## Encapsulamento
* agrupamento de funções e variáveis;
* isolar detalhes de implementação (mesma ideia de api) do usuário final;
* camada de segurança para os atributos e métodos.

## Herança
Objetos podem herdar, ou estender, característica sbases de outros objetos (uma cópia de atributos e métodos de outra classe).

~~~javascript
class Veiculo{
    rodas = 4;
    mover(direcao);
    virar(direcao);
}

class moto extends Veiculo {
    constructor(){
        super(); //puxa atributos e métodos do pai
        this.rodas = 2;
    }
}
~~~

## Polimorfismo
Quando um objeto estende de outro (herança) talvez haja a necessidade de reescrever uma ou mais características (atributos e métodos) nesse novo objeto.
É possível então, recriar um ou mais métodos da classe herdada.

~~~javascript
class Atleta {
    peso;
    categoria;

    constructor(peso){
        this.peso = peso;
    }

    definirCategoria(){
        if(this.peso <= 50){
            this.categoria = 'infantil';
        }
        else if(this.peso <= 65){
            this.categoria = 'juvenil';
        }
        else{
            this.categoria = 'adulto';
        }
    }
}

class Lutador extends Atleta{
    constructor(peso){
        super(peso);
    }

    definirCategoria(){
        if(this.peso <= 54){
            this.categoria = 'pluma';
        }
        else if(this.peso <= 60){
            this.categoria = 'leve';
        }
        else if(this.peso <= 75){
            this.categoria = 'meio-leve';
        }
        else{
            this.categoria = 'pesado';
        }
    }
}
~~~

## Abstração
Template ou identidade de uma classe que será construída no furuto.
Atributos e métodos podem ser criados na classe de abstração (superclass), mas a implementação dos métodos de atributos só poderá ser feita na classe que irá herdar essa abstração.

~~~javascript
class Parafuso{ //superclasse - abstrato
    constructor(){
        if(this.constructor === Parafuso){
            throw new Error('classe abstrata não pode ser instânciada!');
        }
    }

    get tipo(){
        throw new Error('método "get tipo()" precisa ser implementado');
    }
}

class Fenda extends Parafuso {
    constructor() { super(); }

    get tipo(){
        return 'fenda';
    }
}

class Philips extends Parafuso{
    constructor(){ super(); }

    get tipo(){
        return 'philips';
    }
}

class Allen extends Parafuso();

//criar e usar
//new Parafuso() retorna erro 'classe abstrata não pode ser instânciada'
let fenda = new Fenda();
let philips = new Philips();
let allen = new Allen(); 

console.log(fenda.tipo, philips.tipo);
//console.log(allen.tipo) retorna erro 'método "get tipo()" precisa ser implementado'

//só existem parafusos se ele for de algum tipo específico como Fenda, Philips ou Allen
~~~