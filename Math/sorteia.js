/*função para obter um número ramdômico ou seja sorteado
esse jeito funciona em browsers mais antigos e não nos novos
function getRandomNumber(inicio, fim, integer){
    inicio = inicio || 1
    fim = fim || 0

    console.log(inicio, fim)

    return undefined

}
console.log(getRandomNumber())*/

//funciona em varios browsers  
function getRandomNumber(inicio = 0, fim = 10, integer = true){

    let r = Math.random() * (fim - inicio +1) + inicio
    return integer ? parseInt(r) : r

}
console.log(getRandomNumber(2,3))