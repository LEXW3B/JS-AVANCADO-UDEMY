const data = new Date()//sem passar nada por parametro vai armazenar a data atual
console.log(data)
console.log(data.getDay())//dia da semana(domingo=0;sengunda=1;terça=2...)
console.log(data.getDate())//dia do mes
console.log(data.getMonth())//o mes(janeiro=0;fevereiro1...)
console.log(data.getTime())//numero de milisegundo que passaram desde 1º de janeiro de 1970
console.log(data.getFullYear())//o ano atual
console.log(data.getHours())//a hora 
console.log(data.getUTCHours())//hora de portugal 3 horas a mais que o brasil
console.log('-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-')
console.log(data.toString())//transforma toda a data em string
console.log(typeof data.toString())//confirmação da data em string 
console.log(data.toDateString())//a data
console.log(data.toISOString())//a data em uma nomenclatura padrão
console.log(data.toLocaleDateString())//a data no padrão do país que a maquina foi configurada
console.log(data.toLocaleString())//a data e hora no padrão do país que a maquina foi configurada
console.log(data.toUTCString())//data com formato universal
console.log(data.toLocaleString('pt-BR', {month: 'long', weekday: 'long', day: 'numeric', year: 'numeric'}))//montando um cabeçalho de data como quiser

