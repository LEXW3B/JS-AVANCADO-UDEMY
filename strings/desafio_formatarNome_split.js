
function formatarNome(nomeCompleto){
    
    let nomeAsArray = nomeCompleto.split(' ')
    if(nomeAsArray.length === 1){
        return nomeCompleto
    }
    
    let primeiroNome = nomeAsArray.shift()
    return nomeAsArray.join(' ') + ', ' + primeiroNome

}

console.log(formatarNome('daniel'))//e para retornar daniel
console.log(formatarNome('daniel morales'))//e para retornar morales, daniel
console.log(formatarNome('daniel tapias morales'))//e para retornar tapias morales, daniel








