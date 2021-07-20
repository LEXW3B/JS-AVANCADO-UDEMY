let diaSemana = 2
if(diaSemana===0){
    console.log('hoje e domingo');
}else if(diaSemana===1){
    console.log('hoje e segunda');
}else if(diaSemana===2){
    console.log('hoje e terça');
}else if(diaSemana===3){
    console.log('hoje e quarta');
}else if(diaSemana===4){
    console.log('hoje e quinta');
}else if(diaSemana===5){
    console.log('hoje e sexta');
}else if(diaSemana===6){
    console.log('hoje e sabado');
}else{
    console.log('Hoje é --')
}

//  ESTRUTURA SWITCH   \\

let dia = ''
switch (diaSemana){
    case 0:
        dia = 'domingo'
        break;
    case 1:
        dia = 'segunda'
        break;
    case 2:
        dia = 'terça'
        break;
    case 3:
        dia = 'quarta'
        break;
    case 4:
        dia = 'quinta'
        break;
    case 5:
        dia = 'sexta'
        break;
    case 6:
        dia = 'sabado'
    default:
        dia = ' -- '
}
console.log(`hoje é ${dia}`)
