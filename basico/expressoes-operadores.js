//EXPRESSÕES E OPERADORES
/* 
- Expressões: ";" no final das expressões é facultativo
- Operadores: binários (+, -, ==), unários (++, --) e ternário (valor boolean ? //se for true : //se for false)
*/

//NEW: criação de novos objetos (como visto em manipulacao-dados>arrays)
console.log(`- NEW -----`);
let name = new String("Laura");
name.surName = "Seto";
let age = new Number(20);
console.log(name, age);

//OPERADORES UNÁRIOS: typeof e delete
console.log(`- TYPEOF E DELETE -----`)
const person = {
    name: 'Laura',
    age: 20
};
delete person.age; //deleta propriedade do objeto
console.log(person);

/*
OPERADORES ARITMÉTICOS:
    - mult *
    - div /
    - add +
    - sub -
    - mod %
    - incremento ++
    - decremento --
    - expoenencial ** (2**3 = 2^3)
*/

/*
OPERADORES DE COMPARAÇÃO:
    - igual a ==
    - diferente de !=
    - estritamente ingual a ===
    - estritamente diferente de !==
    - maior que >
    - maior igual a >=
    - menor que <
    - menor igual a <=

*/
console.log(`- OPERADORES DE COMPARAÇÃO -----`)
let one=1, two=2;
console.log(one === "1"); //false (string não é igual a number)
console.log(one === 1); //true
console.log(two !== "2"); //true (string e number são diferentes)
console.log(two !== 2); //false

/*
OPERADORES DE ATRIBUIÇÃO (ao lado esquerdo do operador, deve estar uma variável, obviamente):
    - assignment =
    - addition assignment +=
    - subtraction assignment -=
    - multiplication assignment *=
    - division assignment /=
    - remainder assignment %=
    - exponetiation assignment **= (x**=2 == x=x^2)
*/

/*
OPERADORES LÓGICOS:
    - and &&
    - or ||
    - not !
*/

/*
OPERADOR CONDICIONAL (TERNÁRIO):
    - condition ? value1 : value2
*/

//OPERADOR DE STRING
console.log(`- OPERADOR DE STRINGS`);
console.log('a' == 'a'); //comparison
console.log('a' + 'b'); //concatenation
let alfabeto = 'alpha';
alfabeto += 'bet';
console.log(alfabeto + 123);

/*
FALSY: valores que indicam falso (false, 0, -0, "", null, undefined, NaN);
TRUTHY: valores que indicam verdadeiro (true, {}, [], num!=0, "string").
*/

/*
OPERATOR PRECEDENCE:
    - grouping: ()
    - negação e incremento: !, ++, --
    - mult e div
    - add e sub
    - relacional: <, <=, >, >=
    - igualdade: ==, !=, ===, !==
    - and
    - or
    - condicional ternário: ?:
    - atribuições
*/