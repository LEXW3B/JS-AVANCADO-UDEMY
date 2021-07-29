let arr1 = ["a", "b", "c"]//cria clones de array's
let arr2 = [].concat(arr1)

arr2[arr2.length] = "novo valor"

console.log(arr1)
console.log(arr2)