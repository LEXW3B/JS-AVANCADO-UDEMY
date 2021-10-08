let numero = 1234567.890

console.log(numero.toFixed(2))//diz onde tem que por a virgula
console.log(typeof numero.toFixed(2))//string

console.log(numero.toPrecision(7))//o numero de digitos que quer sem virgula (aredondando)
console.log(typeof numero.toPrecision(7))//string

numero = 12.34567

console.log(numero.toExponential())//coloca em notação científica
console.log(numero.toExponential(4))//quando passa por parametro diz quantas casas decimais 

numero = 15
console.log(numero.toString())//transforma em string
console.log(typeof numero.toString())

console.log((0).toString(2))//vai responder em binário
console.log((1).toString(2))
console.log((2).toString(2))
console.log((3).toString(2))
console.log((4).toString(2))
console.log((5).toString(2))
console.log((6).toString(2))
console.log((7).toString(2))
console.log((8).toString(2))
console.log((9).toString(2))

console.log((15).toString(16))//vai representar com base 16 ou seja hexadecimal 

numero = 123456.789

console.log(numero.toLocaleString())//coloca o numero com compreensão humana universal
console.log(numero.toLocaleString('PT-br'))//coloca o numero com o formato do brasil
console.log(numero.toLocaleString('PT-br', {style: 'currency', currency: 'BRL'}))//faz a correção para a moeda do país em questão  
console.log(numero.toLocaleString('EN-us', {style: 'currency', currency: 'USD'}))
console.log(numero.toLocaleString('PT-pt', {style: 'currency', currency: 'EUR'}))

