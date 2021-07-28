(function(){
    const nameUser = ''
    const element = document.querySelector('.top-bar p')
    if(nameUser){
        //document.querySelector('.top-bar p ').textContent = ' Welcome(a), ' + nameUser;
        console.log(element.textContent)
        //element.textContent = element.textContent + nameUser
        element.innerHTML += '<b>' + nameUser + '</b>'
    }else{
        //element.parentElement.style.display = 'none'       tira uma faixa do site
        //element.remove()                                   não funciona n o IE-11
        const elementToRemove = element.parentElement
        elementToRemove.parentElement.removeChild(elementToRemove)
    }
    console.log(element)
})()