;(function(){
    'use strict'

    //ARMAZENAR O DOM EM VARIAVEIS

    const itemInput = document.getElementById('item-input')
    const todoAddForm = document.getElementById('todo-add')
    const ul = document.getElementById('todo-list')
    const lis = document.getElementsByTagName('li')

    function addTask(task){
        const li = document.createElement('li')
        li.className = 'todo-item'
        const p = document.createElement('p')
        p.className = 'task-name'
        p.textContent = task
        li.appendChild(p)
        ul.appendChild(li)

        li.addEventListener('click', function(){
            console.log(this)
            console.log(this.textContent)
            console.log(this.innerText)
            console.log(this.innerHTML)
            console.log(this.outerHTML)
        })
    }

    todoAddForm.addEventListener('submit', function(e){
        e.preventDefault()
        console.log(itemInput.value)
        // ul.innerHTML += `
        //     <li class='todo-item'>
        //         <p class='task-name'>${itemInput.value}</p>
        //     </li>
        // `
        //limpar o input e manter o focus
        addTask(itemInput.value)
        itemInput.value = ''
        itemInput.focus()
    });
    [...lis].forEach(element => {
        element.addEventListener('click', function(e){
            console.log(this)
        })
    });

})()