let arr = [4, 5, 10, 20, 35, 4, 5]
console.log(arr.indexOf(5))//retorna primeiro valor ENCONTRADO

console.log(arr.lastIndexOf(5))//retorna o ultimo valor ENCONTRADO
//quando o indexOf e o lastIndexOf nao acha o que pediu ele retorna a resposta "-1"

console.log(arr.includes(5))//esse me retorna um boolean TRUE ou FALSE

console.log(arr.find(function (el) {//encontra o primeiro elemento em que a condição do return
    return el > 10                //for TRUE, se nao encontrar nada ele retorna UNDEFINED
}))

console.log(arr.findIndex(function(el){//retorna o numero do indicie do array do valor indicado
    return el > 100                     //se não encontrar o valor indicado ele retorna "-1"
}))