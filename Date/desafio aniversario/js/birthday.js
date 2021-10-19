function quantoFaltaPara(m, d){

    const dataAtual = new Date()
    dataAtual .setHours(0)
    dataAtual .setMinutes(0)
    dataAtual .setSeconds(0)
    dataAtual .setMilliseconds(0)

    const anoAtual = dataAtual.getFullYear()

    const dataNiver = new Date (anoAtual, m - 1, d)

    const dataAtualTimeStamp = +dataAtual//ou so usa o atalho: getTime 
    const dataNiverTimeStamp = +dataNiver//ou :  getTime

    if(dataAtualTimeStamp < dataAtualTimeStamp){
        dataNiver.setFullYear(++anoAtual)
        dataNiverTimeStamp = +dataNiver
    }

    const UM_DIA = 24 * 60 * 60 * 1000 //conta para um dia em milesegundos
    const diferenca = dataNiverTimeStamp - dataAtualTimeStamp
    return parseInt(diferenca / UM_DIA)

}
