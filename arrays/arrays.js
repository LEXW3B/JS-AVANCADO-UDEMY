const arr = new Array('Estou aprendendo')
const arr2 = new Array(true, 'Alexandre', 38, new Array(2, 4, 10))
//arr[0] = true
//arr[1] = 'Alexandre'
//arr[2] = 28
//arr[3] = 2, 4, 10
console.log(arr)
console.log(arr2[3].length)
console.log(arr2[1], arr2[2])

//SINTAX LITERAL 

const arr3 = ['Alexandre', 38, [3, 6, 9], true]
arr3[4] = 'novo valor'
arr3[arr3.length] = 'novo valor 2'
arr3.push('push')
arr3.push('A', 'B', 'C')

console.log(arr3)
console.log(arr3[2])
let n = 7
console.log(arr3[2][0])
