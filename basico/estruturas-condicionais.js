//IF ELSE
let conditional = false;
if (conditional) {
    //...
}
else if (conditional){
    //...
}
else {
    //...
};

//SWITCH
let expression = 'a';
switch (expression){
    case 'a':
        //...
        console.log('expressão é A');
        break; 
    case 'b':
        //...
        console.log('expressão é B');
        break;
    default:
        //...
        console.log('expressão não listada nos casos');
        break;
}
//sem os breaks dentro dos cases, o swtich executa o resto do código, sem se importar com os testes:
switch (expression){
    case 'a':
        //...
        console.log('expressão é A');
    case 'b':
        //...
        console.log('expressão é B');
    default:
        //...
        console.log('expressão não listada nos casos');
}

//THROW e TRY...CATCH
function myName(name){
    if(name === ''){
        throw 'Nome é obrigatório'; //o throw interrompe a execução do resto do códio (como o return)
    }
    //...
}

try {
    myName('');
} catch(e) {
    console.log(e);
}

myName(''); //se a função é chamada fora do try...catch e tem um throw => erro Uncaught