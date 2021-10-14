
(function(){
    const dateEventDOM = document.querySelector('.hero-content h1 span').innerText
    //variavel dateEventDOM recebe documento abrir documento ('hero-content h1 span')e nao vir com espaços a mais
    console.log(dateEventDOM)

    const dateEvent = getDate(dateEventDOM)//data de um evento futuro
    console.log(dateEvent)
    
    //para saber o dia de hoje
    const toDay = new Date()

    let left = dateEvent.getTime() - toDay.getTime()//diminuir o tempo futuro pelo presente

    const ONE_MINUTE = 600 * 1000
    const ONE_HOUR = 60 * ONE_MINUTE
    const ONE_DAY = 24 * ONE_HOUR //conta para saber quantos minutos tem em um dia

    const daysLeft =  parseInt(left / ONE_DAY)//conta para saber quantos dias faltam para chegar na data com o parseint vai deixar um numero inteiro sem decimais
    left = left - daysLeft * ONE_DAY

    const hoursLeft = parseInt(left / ONE_HOUR)//quantas horas
    left = left - hoursLeft * ONE_HOUR

    const minutesLeft = parseInt(left / ONE_MINUTE)//quantos minutos
    left = left - minutesLeft * ONE_MINUTE

    const secondsLeft = parseInt(left / 1000)//quantos segundos
    addLeftTime(daysLeft, hoursLeft, minutesLeft, secondsLeft)

    function addLeftTime(d, h, m, s){
        const p = document.createElement('p')
        p.textContent = `Contagem regressiva: ${d} dias, ${h} horas, ${m} minutos, ${s} segundos`
        document.querySelector('.hero-content').appendChild(p)
    }





    
    
    //aqui vai ser usado o metodo destruction variavel por array assume outro valor que é quebrado pelo metodo split
    function getDate(str){//função getDate por parametro passa uma string e retorna nova data
        const [date, hour] = str.split(' ')//isso faz a separação da string data de hora
        const [day, month, year] = date.split('/')
        const [h, m] = hour.split('H')
        return new Date(year, month -1, day, h, m)
    }


})()