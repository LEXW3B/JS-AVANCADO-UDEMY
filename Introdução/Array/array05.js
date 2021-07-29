let arr = [1,3,5,7,9]

let teste = arr.push(11,13, true, 'ola mundo')//serve para acrescentar coisas apartir do final da array

console.log(arr)
console.log(teste)

let ultimoItem = arr.pop()//ele tira o ultimo item da array original
//let ultimoItem = arr[arr.length - 1]//mesma coisa sem destruir o ultimo item da array original
console.log(ultimoItem)
console.log(arr)

let  primeiroItem = arr.shift()//remove o primeiro item da array original
console.log(primeiroItem)
console.log(arr)

teste = arr.unshift(4,5,6)
console.log(teste) 
console.log(arr) 

let arr2 = arr.slice(2,4)
console.log(arr2)
console.log(arr)

let arr3 = arr.splice(2)//sempre retorna os elementos removidos
console.log(arr)
console.log(arr3)


