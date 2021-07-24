//tipoagem dinamica = armazena varios valores na mesma variavel

let x = 10
x = 'uma string'

let msg = ('uma "string"')
console.log(msg,  x)

console.log("2" * 2) // return NaN

function teste(){
    console.log(this)
}
teste()

const teste2 = () =>{
    console.log(teste2)
    console.log(this)
}
teste()

const obj = {
    n: 1,
    teste,
    teste2
}
obj.teste()