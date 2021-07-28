(function(){
    const nameUser = 'Alexandre'
    
    if(nameUser){
        const topBarElement = document.createElement('div')//cria uma tag div dentro do index
        topBarElement.className = 'top-bar'//acrescenta uma class na tag que criei com o JS
        topBarElement.innerHTML = `<p> Olá, <b> ${nameUser} </b></p>`//inseri o nome do usuário

        //para por essas informações no html segue abaixo
        // elementoPai.insertBefore(novoElemmento, elemento referência)
        const elementoPai = document.querySelector('.hero')//acesso a class hero do html
        elementoPai.insertBefore(topBarElement, elementoPai.firstElementChild)//insiro top-bar
        //console.log(elementoPai.firstElementChild)
    }
})()