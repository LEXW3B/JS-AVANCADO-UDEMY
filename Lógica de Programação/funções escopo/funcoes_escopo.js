let n = 'global'

function mostraN(){
    let n = 'local'
    console.log('valor de n: ' + n);
}
mostraN()
console.log('valor de n: ' + n);

function fnEXT(){
    let n = 'n local na função fnEXT'

    function fnINT(){
        let n = 'n local na função fnINT'
        console.log(n)
    }
    fnINT()
    console.log(n)
}
fnEXT()