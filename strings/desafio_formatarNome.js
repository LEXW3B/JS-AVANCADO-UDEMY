
function formatarNome(nomeCompleto){
    nomeCompleto = nomeCompleto.trim()//remove os espaços do começo e do fim
    let primeiroEspaco = nomeCompleto.indexOf(' ')
    if(primeiroEspaco < 0){
        return nomeCompleto
    } 
    
    let primeiroNome = nomeCompleto.slice(0, primeiroEspaco)
    let sobreNome = nomeCompleto.slice(primeiroEspaco + 1)
    return sobreNome + ', ' + primeiroNome
}

console.log(formatarNome('daniel'))//e para retornar daniel
console.log(formatarNome('daniel morales'))//e para retornar morales, daniel
console.log(formatarNome('daniel tapias morales'))//e para retornar tapias morales, daniel








