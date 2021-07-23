function alterarArray(a){
    arr.push('adicionado');
}

let arr = ['a']
console.log(arr)
alterarArray(arr)
console.log(arr)

function alteraPrimitivo(p){
    p += ' adicionado'
    console.log('dentro da função: ', p)
}
let msg =  'menssagem'
console.log (msg)
alteraPrimitivo(msg)
console.log(msg)

