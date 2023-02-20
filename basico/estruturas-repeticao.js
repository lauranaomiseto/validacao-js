//FOR
for(let i = 0; i < 10; i++){
    if(condition1){
        break; //não executa o resto do código e sai do for
    }
    if(condition2){
        continue; //não executa o resto do código mas continua no for
    }
    //...
}

//WHILE
while(contition){
    //...
    //atualização da condição (se a condição não for atualizada, será true para sempre)
}

//FOR OF (arrays; tipo o foreach no php)
let palavra='abacaxi', nomes=['Joao', 'Paula', 'Pedro'];

for(let letra of palavra){ 
    console.log(letra);
}

for(let nome of nomes){
    console.log(nome);
}

//FOR IN (objetos)
let person = {
    name: 'John',
    age: 30,
    weigth: 80.5
}
for(let property in person){
    console.log(person[property]);
    /*
    É possível acessar o valor das propriedades de várias formas:
    ex: person["name"], person.name (quando sabemos quais são os nomes das propriedades)
    Porém, se não sabemos quais são cada uma das propriedades, person[property] é mais útil.
    */
}