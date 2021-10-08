
// let x = 10

// function mudaX (n){
//     n++
//     console.log('n interno', n)
// }
// mudaX(x)
// console.log('x externo', x)

//por array

let x = [10]
let y = {n: 10}

function mudaX (x){
    x.push(11)
    console.log('x interno', x)
}
function mudaY(obj){
    obj.n++
}
mudaX(x)
console.log('x externo', x)

mudaY(y)
console.log(y)