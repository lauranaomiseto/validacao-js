/* 
VARIÁVEIS:
    - palavras reservadas pra criar variáveis: var (declaração de variáveis globais), let (declaração de variáveis dentro do escopo determinado), const (não pode ser alterada; mesmo escopo do let);
    - no js, as variáveis são fracamente tipadas e dinâmicas (o tipo é atribuído conforme o conteúdo atribuído a ela);
    - escopo;
    - js é case-sensitive e aceita unicode (aceita caracterers especiais e acentuações nos nomes de variáveis);
*/

//var ou let
console.log(`- DECLARAÇÃO -----`)
var clima="quente"
console.log(clima)
clima="frio"
console.log(clima)

//tipagem
console.log(`- TIPAGEM -----`)
let variavel=true
console.log(typeof variavel)
variavel=20
console.log(typeof variavel)
variavel="Agora virou string"
console.log(typeof variavel)

//escopo
console.log(`- ESCOPO -----`)
{
    var global="eu sou global!"
    let escopo="eu sou local..."
    console.log(global)
    {
        escopo="cerveja local"
    }
    console.log(escopo)
}
console.log(global)
//console.log(escopo)
 