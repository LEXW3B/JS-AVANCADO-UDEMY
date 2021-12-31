function teste(str){
    console.log('function express test', str)
    return "fn expression" + str
}

const t1 = teste()
console.log(t1)
console.log("-=-=-=-=-=-=-=-=-=-")
//ou

const testeArrow = (str) => {
    console.log('arrow function', str)
    return "Af express"
}

const t3 = testeArrow('parametro para arrow function')
console.log(t3)
console.log("-=-=-=-=-=-=-=-=-=-")
//ou reduzindo mais 

const testArrow2 = () => {
    console.log("teste arrow2 chamado")
    return{
        foo: 'bar'
    }
}
const t2 = testArrow2()
console.log(t2)
console.log(t2.foo)
console.log(t2['foo'])