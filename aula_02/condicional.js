let numero = 10

const comparaçao = (numero) => {
    if(numero < 10) {
        console.log("é menor que 10")
    }else if(numero > 10) {
        console.log("é maior que 10")
    } else{
        console.log("é igual a 10")
    }
}

comparaçao(10)
comparaçao(5)
comparaçao(11)


const comparacao = (A, B) => {
    if(A > B){
        console.log(A ,"é maior que" ,B)
    } else if(A < B){
        console.log(A ,"é menor que", B)
    } else {
        console.log(A, "é igual a", B)
    }
}

    comparacao(6,2)
    comparacao(6,10)
    comparacao(6,6)