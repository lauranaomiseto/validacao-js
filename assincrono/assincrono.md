# Sistema assíncrono
Tarefas são executadas de maneira independente uma da outra, simultaneamente.

## Callback
Função argumento/parâmetro de outra função. 

## Função setTimeout()
~~~javascript
setTimeout(function(){console.log('depois de 1 s');}, 1000);
~~~

## Conectando API com https e callback
~~~javascript
const https = require('https');
const API = 'https://jsonplaceholder.typicode.com/users?_limit=2';
//como essa função é uma callback, o js prioriza o segundo console.log
https.get(API, res => {
    console.log(res.statusCode);
})
console.log('conectando API'); //é printado primeiro
~~~

## Promise
Objeto que promete a realização de alguma tarefa. Usado para operações assíncronas (ex: carregar arquivo, ler dados de api).
Estados:
* Pending: estado inicial;
* Fulfilled: promessa concluída;
* Rejected: promessa rejeitada (ocorrência de erro);
* Settled: encerrada, com sucesso ou com erro.