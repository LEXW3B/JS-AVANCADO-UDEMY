let numero = 1234567.890

console.log(numero.toFixed(2))//diz onde tem que por a virgula
console.log(typeof numero.toFixed(2))//string

console.log(numero.toPrecision(7))//o numero de digitos que quer sem virgula (aredondando)
console.log(typeof numero.toPrecision(7))//string

numero = 12.34567

console.log(numero.toExponential())//coloca em notação científica
console.log(numero.toExponential(4))//quando passa por parametro diz quantas casas decimais 
