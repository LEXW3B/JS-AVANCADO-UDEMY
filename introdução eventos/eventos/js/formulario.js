(function(){
    'use strict';
    //btn.addEventListener('click', function(e){  })

    const txtTitulo = document.getElementById('txtTitulo')
    const btn = document.getElementById('btn')
    const formCadastro = document.querySelector('.formCadastro')

    formCadastro.addEventListener('submit', function(e){
        console.log(txtTitulo.value)  
        if(!txtTitulo.value){
            showErrorMessage('Preencha todos os campos', function(){
                txtTitulo.focus()
            })
            e.preventDefault()//previne o comportamento padrão
            
        }

    })

    //tratamento do contador 
    const txtDescricao = document.getElementById('txtDescricao')
    const contadorContainer = document.getElementById('contador')
    const resta = document.getElementsByTagName('span')[0]
    const maxima = txtDescricao.maxLength
    resta.textContent = maxima

    //contadorContainer.removeAttribute('style') ou
    contadorContainer.style.display = 'block'
    
    txtDescricao.addEventListener('input', function(){
        let numeroLetrasDigitadas = this.value.length
        let caractersRestantes = parseInt(maxima) - parseInt(numeroLetrasDigitadas)
        resta.textContent = caractersRestantes
    })

    btn.disabled = true

    const chkAceito = document.getElementById('chkAceito')
    chkAceito.addEventListener('change', function(){
        btn.disabled = !this.checked
    })

    const feedbackMessage = document.getElementById('feedbackMessage')
    const feedbackMessageCloseBtn = feedbackMessage.getElementsByTagName('button')[0]

    function showErrorMessage(msg, cb){
        //alert(msg)
        //feedbackMessage.setAttribute('class', 'show')
        feedbackMessage.classList.add('show')
        feedbackMessage.getElementsByTagName('p')[0].textContent = msg

        function hideErrorMessage(){
            console.log('clicando close')
            feedbackMessage.classList.remove('show')

            feedbackMessageCloseBtn.removeEventListener('click', hideErrorMessage)

            if(typeof cb === 'function'){
                cb()
            }
        }

        feedbackMessageCloseBtn.addEventListener('click', hideErrorMessage)

    }




})()