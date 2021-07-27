/*
    imc = peso / altura²
    Deve retornar um único número
    Deve gerar um erro se receber um parâmetro não numérico
    Deve retornar erro caso não receba nem um parâmetro
*/
   
function calcularImc(peso, altura, callback){
    if(peso === undefined || altura === undefined){
        throw Error('Apenas Números')
    }
    let imc = peso / (altura*altura)
    if(typeof callback === 'function'){
        return callback(imc)
    }
    return imc
    }
     
function classificaImc(imc){
    if(imc<=16.9){
        return 'muito abaixo do peso'
             
    }else if(imc<=18.4){
            return 'abaixo do peso'
             
    }else if(imc<=24.9){
        return 'normal'
             
    }else if(imc<=29.9){
        return 'acima do peso' 
             
    }else if(imc<=34.9){
        return 'obesidade 1'
             
    }else if(imc<=40){
        return 'obesidade 2'
             
    }else{
        return 'obesidade 3'
             
    }
}
     
let imc = calcularImc(100, 1.69)
let imc2 = calcularImc(100, 1.69, classificaImc)
console.log(imc)
console.log(imc2)
     