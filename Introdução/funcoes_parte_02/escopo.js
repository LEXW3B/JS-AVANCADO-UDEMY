
const str = 'global string'//escopo global

// function teste(){
//     const str = 'local string'//escopo local
//     console.log(str)
//     console.log('-=-=-===-=-=-=-')
// }


function teste(str) {
    console.log(this)
    console.log(str)
    console.log('-=-=-===-=-=-=-')
}
//resumido

const teste2 = () => {
    console.log('arrow function')
    console.log(this)
}
teste2()

//teste de parametro

const obj = {
    foo: "bar",
    teste: "teste",
    teste2
}
obj.teste()
obj.teste2()


