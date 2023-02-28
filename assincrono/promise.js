 let concluido = true;
 
 console.log('fazer tarefa');
 
 //instanciando objeto promise -> pending
 const promessa = new Promise((resolve, reject) => { 
    if(concluido){
        return resolve('deu certo!');
    }
    return reject('deu errado!');
 });

 promessa
 .then(result => console.log(result)) //recebe retorno do resolve -> fulfilled
 .catch(erro => console.log(erro)) //receve retorno do reject -> rejected
 .finally(() => console.log('finalizada')); // settled

 console.log('aguardando'); //observe que essa linha é printada antes dos resultados da promessa