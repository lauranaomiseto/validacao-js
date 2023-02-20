//PROTOTYPE: cadeia de protótipos (funções básicas)
// os objetos herdam propriedades de objetos ascendentes ("pais") 
// basicamente, um monte de funções pré existentes


//TYPECASTING e TYPE COERSION
console.log(`- TYPECASTING -----`)  
console.log(Number('9') + 5) //conversão manual da string 9 pra number e soma
console.log(`- TYPE COERSION -----`)
console.log('9' + 5) //força a conversão do 5 pra string e concatena

//MANIPULAÇÃO DE STRINGS E NÚMEROS
console.log(`\n- MANIPULAÇÃO DE STRINGS E NÚMEROS -----`)
console.log(`*EX1: strings em números`)
let string = "123"
console.log(Number(string))
let number = 321
console.log(String(number))
 

console.log(`*EX2: contando caracteres e dígitos`)
let word = "paralelepipedo"
console.log(word.length)
let number1 = 1234
console.log(number1.length) //indefinido 
console.log(String(number1).length)


console.log(`*EX3: cadeias decimais`)
let number2 = 23938.9784754
console.log(number2)
console.log(number2.toFixed(2)) //virou string
console.log(number2.toFixed(2).replace(".", ",")) //por ser string, deu pra atrelar essa função


console.log(`*EX4: minúsculas e maiúsculas`)
let word1 = "Programar é muito bacana"
console.log(word1)
console.log(word1.toUpperCase())
console.log(word1.toLowerCase())


console.log(`\n- MANIPULAÇÃO DE STRINGS E ARRAYS`)
console.log(`*EX1: separando strings`)
let phrase = "Eu quero viver o Amor!"
console.log(phrase)
let myArray = phrase.split(" ")
console.log(myArray)
let prhaseWithUnderscore = myArray.join("_")
console.log(prhaseWithUnderscore)


console.log(`*EX2: encontrando palavras em frases`)
let phrase1 = "Eu quero viver o amor!"
console.log(phrase1)
console.log(`Palavra de busca: Amor`)
console.log(phrase1.includes("Amor")) //lembre-se que é case-sensitive


console.log(`*EX3: criando array com construtor`)
//let myArray1 = ['a', 'b', 'c']
let myArray1 = new Array('a', 'b', 'c') //criação com construtor Array()
//let myArray1 = new Array(10) //array com 10 posições vazias
console.log(myArray1)


console.log(`*EX4: contar elementos de um array`)
console.log([ //lembre-se q um vetor em js pode ter elementos de diversos tipos
    "a", 
    {type: "array"},
    3,
    function() {return "alo"}
].length)
console.log([ //lembre-se q um vetor em js pode ter elementos de diversos tipos
    "a", 
    {type: "array"},
    3,
    function() {return "alo"}
][3]())


console.log(`*EX5: strings pra array`)
let word2 = "manipulação"
console.log(Array.from(word2))


console.log(`*EX6: manipulações importantes`)
let techs = new Array("html", "css", "js")
console.log("Array original: " + techs)

//adicionar item no fim
techs.push("nodejs")
console.log("push(nodejs): " + techs)

//adicionar item no começo
techs.unshift("sql")
console.log("unshift(sql): " + techs)

//remover item no fim
techs.pop()
console.log("pop(): " + techs)

//remover item do começo
techs.shift()
console.log("shift(): " + techs)

//pergar somente alguns elementos do array
//console.log("slice 1, 2: " + techs.slice(1, 2))

//remover um ou mais items em qualquer posição do array
//techs.splice(1, 1) //indice de onde começa e a quantidade de elementos a serem retirados
//console.log("splice 1, 1: " + techs)

//encontrar a posição de um elemento no array
let index = techs.indexOf('css')
console.log("Índice de 'css': " + index)
techs.splice(index, 1)
console.log(techs)