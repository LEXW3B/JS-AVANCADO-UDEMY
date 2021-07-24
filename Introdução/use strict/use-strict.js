//o use strict tem que ficar sempre na primeira linha
//y = 10
//console.log(x)
/*
function foo(){
    'use strict'
    let x = 20
}
foo()
//console.log(x)
console.log(y)
function dobrar(n1, n1){//errada porque os parametros estao repetidos
    'use strict'
    console.log(n1, n1)
    return n1 * n1
}
console.log(dobrar(5))
*/
function Teste(){
    'use strict'
    console.log(this)
    this.a = 'a'
}
Teste()