fetch('https://api.github.com/users/lauranaomiseto') //o fetch gera uma promessa
.then(response => response.json()) //transformando a resposta em json, pra verificar todos os dados enviados pela api. retorna outra promessa.
.then(data => fetch(data.repos_url)) //trata da promessa anterior e faz uma fetch, que por sua vez, retorna outra pormessa.
.then(res => res.json()) //transforma a resposta da promessa anterior em json. retorna outra promessa.
.then(d => console.log(d)) //trata da promessa anterior,
.catch(erro => console.log(erro));