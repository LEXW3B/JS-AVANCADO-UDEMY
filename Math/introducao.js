console.log(Math.min(1,2,3,4,5))//retorna o menor número 
console.log(Math.max(1,2,13,4,5))//retorna o maior número
//  ou pode ser assim com array
let arr = [1,2,10,4,5]
console.log(Math.max(...arr))

console.log(Math.round(45.5))//serve para aredondar o número dependendo do décimal
console.log(Math.round(45.4))//serve para aredondar o número dependendo do décimal

console.log(Math.floor(49.999999))//serve para aredondar para baixo independente do décimal
console.log(Math.ceil(49.0000001))//serve para aredondar para cima independente do décimal

console.log(Math.pow(2, 3))//isso faria a potência(2x2x2=8) metodo pow funciona em mais browsers
//mas poderia ser assim
console.log(2 ** 3)//é o mesmo resultado mas funciona em menos browsers

console.log(Math.sqrt(49))//serve para saber a raiz quadrada
console.log(Math.cbrt(8))//serve para saber a raiz cúbica

console.log(Math.random())//vai retornar um número aleatório entre zero e quase um
console.log(Math.random()*2)//vai retornar um número aleatório entre zero e quase 2 em decimais
console.log(Math.floor(Math.random()*2))//vai retornar um número aleatório zero ou um inteiros

