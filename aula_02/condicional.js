let numero = 10

// const comparaçao = (numero) => {
//     if(numero < 10) {
//         console.log("é menor que 10")
//     }else if(numero > 10) {
//         console.log("é maior que 10")
//     } else{
//         console.log("é igual a 10")
//     }
// }

// comparaçao(10)
// comparaçao(5)
// comparaçao(11)


const comparacao = (a, b) => {
    if(a > b){
        console.log(`O numero ${a} é maior que ${b}`);
    } else if(a === b){
        console.log(`O numero ${a} é igual a ${b}`);
    } else {
        console.log(`O numero ${a} é menor que ${b}`);
    }
}

    comparacao(6,2)
    comparacao(6,10)
    comparacao(6,6)