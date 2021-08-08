/*criar duas funções: sum() e avarege()
- As funções podem receber 1 ou+ parâmetros
- Use e abuse das facilidades do ES5 (para browsers antigos) */

function sum(){
    const numbers = []
    // for(let i = 0; i < arguments.length; i++){
    //     numbers.push(arguments[i])
    // }
    // console.log(numbers) jeito velho ES5 em baixo

    Array.prototype.forEach.call(arguments, function(arguments){
        numbers.push(arguments)
    })
    return numbers.reduce(function(sum, atual){
        return sum + atual
    }, 0)    
}
console.log(sum(1,2,3,4,5))

function avarege(){
    const soma = sum.apply(null, arguments)
    console.log(soma)

    return soma / arguments.length
}
console.log(avarege(1,2,3,4,5))