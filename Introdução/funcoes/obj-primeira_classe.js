function fn(cb){
    console.log('Executar ação de callback')
    console.log(typeof cb)
    cb()
}
fn(function(){
    console.log('função passada por parametro 01')
})
function callback(){
    console.log('função passada por parametro 02')
}
const obj = {
    callback
}
obj.callback()

function fn2(n1){

    return function(n2){
        return n1 * n2
    }
}
const funcao2 = fn2(10)
const mult = funcao2(2)
console.log(mult)

function fn3(){
    fn3.count++
     return function(){
         console.log('função retornada por parametro 03')
     }
}
fn3.count = 0

const funcao3 = fn3()
const funcao3a = fn3()
const funcao3b = fn3()

const funcao3 = fn3()
funcao3()
console.log(fn3.count)