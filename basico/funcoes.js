//aplicativo de frases motivacionais 

function createPhrases(){
    console.log('estuda mais!')
    console.log('mais mais mais')
    console.log('revisão é a mãe do aprendizado')  
}
createPhrases()


//funções com argumentos e parâmetros sem retorno
console.log(`- FUNÇÕES GERAIS -----`)

const add = function(num1, num2){
    console.log(num1 + num2)
}
add(2, 3)

function sub(num1, num2){
    console.log(num1 - num2)
}
sub(-3, 4)

const mult = function(num1, num2){
    let result = num1*num2
    return result
}
let number1=30, number2=3
console.log(`o produto de ${number1} por ${number2} é ${mult(number1, number2)}`)


//FUNÇÃO CALLBACK (função que tem outra função como parâmetro)
console.log(`- FUNÇÕES CALLBACK -----`)

function sayMyName(name){
    console.log(`antes da callback`)

    name()

    console.log(`depois da callback`)
}

sayMyName( 
    () => { 
        console.log(`estou em uma callback`)
    }
)

//FUNÇÕES CONSTRUTORAS: criação de objeto; expressão 'new' e palavra chave 'this'
console.log(`- FUNÇÕES CONSTRUTORAS -----`)

function Person(name, age){
    this.name = name //this se refere ao novo objeto criado ao charmar a função
    this.age = age
}
const pessoa1 = new Person("Laura", 20) //instanciando um novo objeto
const pessoa2 = new Person("João", 23) //instanciando um novo objeto
console.log(`A ${pessoa1.name} tem ${pessoa1.age} anos`)
console.log(`O ${pessoa2.name} tem ${pessoa2.age} anos`)