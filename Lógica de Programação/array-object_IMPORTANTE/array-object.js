const nomes = [  'Alexandre', 'kelly', 'pai', 'mae', '' ]
const pessoa = { nome: 'Alexandre', idade: 38, email: ''}
const pessoa1 = {}

const pessoas = [{
    nome: 'Alexandre',
    idade: 38
}, {
    nome: 'kelly',
    idade: 26
}, {
    nome: 'pai',
    idade: 55
}, {
    nome: 'mae',
    idade: 52
}]
for(let i = 0; i < pessoas.length; i++){
    console.log(` ${pessoas[i].nome} tem ${pessoas[i].idade} anos` )
}
//console.log(pessoas[0].nome)