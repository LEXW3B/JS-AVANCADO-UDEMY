const arr = [1,5,10,'ola', true]

let sohNumeros = arr.some(function(el){  //se ao menos um dos retornos for verdade entao e true
    return typeof el === 'number'
})
console.log(sohNumeros)

let soNumeros = arr.every(function(el){  //se todos os retornos for verdade entao é true
    return typeof el === 'number'
})
console.log(soNumeros)

let arr1 = arr.filter(function(el, i, _arr){ //filtra um ou varios tipos
    return typeof el === 'number'
})

const arr2 = arr.forEach(function(el, i, _arr){
    console.log(el)
})

arr1 = arr1.map(function(el, i, _arr){
    return el * el
})

console.log(arr)
console.log(arr1)
console.log(arr2)