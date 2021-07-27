/*calback*/

function teste(cb){
    console.log('funcao teste')
    cb()
}

function fn(){
    console.log('funcao anonima de callback')
}

teste(fn)