let n = 0
if (n === 0){
    n = 10
}
console.log(n)

//ou\\

let b = 0
b = b || 10
console.log(b)

//curto circuito\\

let isValid = false

isValid && console.log('É VALIDO')
isValid || console.log('É VALIDO')