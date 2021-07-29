let arr1 = [1, 2, 3]
let arr2 = [5, 6, 7]

console.log(arr1.toString())//mostra o que está na array como uma string
console.log(typeof arr1.toString())//so para ver como transformou em string mesmo

console.log(arr1.join(" - "))//mostra o que está na array como uma string e por parametro pode passar caracteres(+-*/|;:><,.!@#$%¨&=^~ºª)

let arr3 = arr1.concat(arr2)//concatenação dos aray's
console.log(arr3)