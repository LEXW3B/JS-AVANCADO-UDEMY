//let idade = 17;
//let paisPresentes = false;
//let comprouBilhete = false;
//const podeViajar = (idade >= 18 || paisPresentes) && comprouBilhete;
//
//if (comprouBilhete){
//    console.log('sim. comprou o bilhete');
//}else{
//    if(idade >= 18){
//        console.log('e maior de idade, poode viajar');
//    }else{
//        console.log('e menor de idade, nao poode viajar');
//    }
//}


//console.log(`pode viajar: ${podeViajar}`);
//
//let n1 = 6
//let n2 = 8
//let media = (n1 + n2) / 2
//console.log(`media: ${media}`);
//
//if(n1 === 0 || n2 === 0){
//    console.log('REPROVADO===SE FERROU');
//}else if(media < 7){
//    console.log('Reprovado. Mas a como recuperar');
//}else{
//    console.log('Aprovado');
//}
//console.log('saiu do bloco if');
//
//oioioioioioioiioi

let idade = 27;
let paisPresentes = false;
let comprouBilhete = true;
const podeViajar = (idade >= 18 || paisPresentes) && comprouBilhete;

console.log(`pode viajar: ${podeViajar}`);

//let msgMaiorIdade = '';
//if(idade >= 18){
//    msgMaiorIdade = 'E maior de idade';
//}else{
//    msgMaiorIdade = 'E menor de 18 anos'
//}
        //ou\\
let msgMaiorIdade = (idade >= 18) ? 'E maior de idade' : 'É menor de 18 anos'
if (!comprouBilhete){
    console.log('Não. comprou o bilhete');
}else{
    console.log(msgMaiorIdade)
}