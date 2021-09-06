(function(){
    'use strict';
    //btn.addEventListener('click', function(e){  })

    const txtTitulo = document.getElementById('txtTitulo')
    const btn = document.getElementById('btn')
    const formCadastro = document.querySelector('.formCadastro')

    formCadastro.addEventListener('submit', function(){
        console.log(txtTitulo.value)
    
        if(!txtTitulo){
            alert('Preencha todos os campos')
            e.preventDefault()//previne o comportamento padrão
            txtTitulo.focus()
        }

    })

    //tratamento do contador 
    const txtDescricao = document.getElementById('txtDescricao')
    const contadorContainer = document.getElementById('contador')
    const resta = document.getElementsByTagName('span')[0]
    const maxima = txtDescricao.maxLength

    //contadorContainer.removeAttribute('style') ou
    contadorContainer.style.display = 'block'
    
    txtDescricao.addEventListener('input', function(){
        let numeroLetrasDigitadas = this.value.length
        let caractersRestantes = parseInt(maxima) - parseInt(numeroLetrasDigitadas)
        resta.textContent = caractersRestantes
    })



})()