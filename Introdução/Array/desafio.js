/*criar duas funções: sum() e avarege()
- As funções podem receber 1 ou+ parâmetros
- Use e abuse das facilidades do ES6 */

function sum(){
    //const numbers = Array.from(arguments)  tanto faz esse ou o de baixo
    const numbers = [...arguments]
    //console.log(numbers)

    return numbers.reduce(function(sum, atual){
        return sum + atual
    }, 0)
}

function avarege(){
    return sum(...arguments) / arguments.length
}
let soma = sum(1,2,3,4,5)
console.log(soma)

let media = avarege(1,2,3,4,5)
console.log(media)



