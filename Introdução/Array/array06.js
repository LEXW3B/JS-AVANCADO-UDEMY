let arr = [1,2,3]
//console.log(arr.reverse())//inverte o começo pelo fim da array e modifica a array original

let soma = arr.reduce(function(acumulador, atual){//ele vai soma o primeiro indice + o segundo
    return acumulador + atual //indicie e o resultado disso vai somar com o terceiro indicie
})                            //o retorno ser a soma de tudo no caso[1,2,3]=(1+2=3 ; 3+3=6)
console.log(arr)
console.log(soma)


const nomes = ["Alexandre", "Kelly", "pai", "mae", "maria", "pedro", "paulo"]
let nomesPorOrdem = nomes.reduce(function(nomes, nomeAtual){

/*na primeira interação nomes recebe= {}
                        nomeAtual = "Alexandre"

*/
    let primeiraLetra = nomeAtual[0]
    if(nomes[primeiraLetra]){
        nomes[primeiraLetra]++
    }else{
        nomes[primeiraLetra] = 1
    }
    return nomes
}, {} )
console.log(nomesPorOrdem)
