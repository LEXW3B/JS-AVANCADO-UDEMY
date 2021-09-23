/*se tiver um * e porque não funciona em todos os browsers olhar no site - CAN I USE
replace(),                    replaceAll(),**=-SEM SUPORTE-=**      
indexOf(),                    lastIndexOf(),                      includes(),*
slice(),                      substring(),                        split(),
toLowerCase(),                toUpperCase(),          
valueOf(),                    
trim(),*                      trimEnd(),*                         trimStart(),*
padStart(),*                  padEnd(),*
startsWith(),*                endsWith(),*
charAt(),                     charCodeAt(),                       e length*  */


// replace(),substitui um string por outra string
let str1 = 'Minha String Bacanuda'
console.log(str1.replace('i', 'o'))
console.log(str1)

//indexOf(), vai retornar a posição de um determinada string por parametro dentro de outra string
console.log(str1.indexOf('string'))

//lastIndexOf(), vai retornar a posição da ultima ocorrencia da string que passei por parametro 
console.log(str1.lastIndexOf('i'))

//slice() e substring()fazem a mesma coisa, corta por dois parametros inicio e fim uma string
console.log(str1.slice(2, 5))//esse aceita valore negativos por que ele vai começar no fim
console.log(str1.substring(2, 5))//esse não aceita valores negativos

//toUpperCase(), transforma as letras em maiusculas
console.log(str1.toUpperCase())
console.log(str1)
console.log('/*/*/*/*/*/*/*/*/*/*/')

// toLowerCase(), transforma as letras em minusculas
console.log(str1.toLowerCase())
console.log(str1)
console.log('-=-==-=-=-=-=-=-=-=-=-')

// valueOf(), converte para um tipo primitivo
let strAsObj = new String('minha string como objeto')
console.log(strAsObj)
console.log(strAsObj.valueOf())
console.log('-=-=-=-=-=-=-=-=-=--=-=--=-=')

//trim(), vai remover os espaços em branco do inicio e do final da sting
str1 = '     '+ str1 +'     '
console.log(str1)
console.log(str1.trim())
console.log(str1.trimEnd())
console.log(str1.trimStart())
console.log(str1)
console.log('-=-==-==-=-=-=-=-=-=-===-=-=-')



