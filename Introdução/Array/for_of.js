/*for of --- serve para percorrer objetos */
const arr = [1,2,3]
const obj = {
    nome: 'maria',
    idade: '28',
    email: 'maria@server.com'
}

for(let prop in obj){/*prop e a propriedade dentro do objeto no caso (nome,idade,email) */
    console.log(prop)
    console.log(obj[prop])
}

for(n of arr){
    console.log(n)
}

