//AND(&&)-QUADO QUERO VERIFICAR SE AS EXPRESSOES SAO VERDADEIRA USA O && QUE RETORNA TRUE
//OR(||)-QUADO QUERO VERIFICAR SE UMA DAS EXPRESSOES E VERDADEIRA USA O || QUE ME RETORNA TRUE
//NOT(!)-QUADO QUERO VERIFICAR SE E FALSE USA ! 

/*EX:.   PARA UMA PESSOA VIAJAR PARA O EXTERIOR:
- PRECISA SER MAIOR DE 18 ANOS
OU
- ACOMPANHADO COM OS PAIS
E
- TER COMPRADO O BILHETE
*/
let idade = 21;
let paisPresentes = false;
let comprouBilhete = false;
const podeViajar = (idade >= 18 || paisPresentes) && comprouBilhete;

console.log(`pode viajar: ${podeViajar}`);


