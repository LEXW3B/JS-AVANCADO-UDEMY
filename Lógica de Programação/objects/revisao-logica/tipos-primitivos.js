// string (letras ou palavras), number (int, float), boolean (true, false);
// undefined (sem valor), null, symbol (es6 ou 2015);

let minhaVar = 'minha string';

let minhavar2 = 'minha "string" com aspas duplas';

//let msg = 'eu possuo ' + idade + ' anos!';   facil de cometer erros com sinal de +

let idade = 38;
let msg = `eu possuo ${idade} anos!`;//tem que ser com acrase o cirfrao e chaves 
console.log(msg);
console.log('hello '+' world');
console.log(typeof msg, typeof idade, typeof minhaVar, ' -- ', 20);
const n1 = 10
const n2 = 1.1

console.log(`o tipo de n1 é ${typeof n1} e seu valor e ${n1}`);
console.log(`o tipo de n2 é ${typeof n2} e seu valor e ${n2}`);

const isValue = true;
console.log(`isValue: ${isValue}`);

let varTeste;
console.log(varTeste);
console.log(typeof varTeste);


