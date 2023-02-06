// let x = "";
// console.log(x)
// x = "oi"
//JS faz a leitura por linha.

//função 1) tem que ser declarada
//       2) deve ser executada 
function imprimeText(texto){
    console.log(texto)
}

imprimeText('oi')

//JS tem 3 formas de escrever funções

//Declaração de função
function imprimeTexto(texto){
    console.log(texto)
}
function soma(){
    return 2 + 2;
    //return deve ser a última linha
    //JS sai da função sem executar o resto
}

imprimeTexto(soma())