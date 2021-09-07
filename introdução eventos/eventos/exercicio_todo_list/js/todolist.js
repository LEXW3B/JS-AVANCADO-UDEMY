;(function(){
    'use strict'

    //ARMAZENAR O DOM EM VARIAVEIS

    const itemInput = document.getElementById('item-input')
    const todoAddForm = document.getElementById('todo-add')
    const ul = document.getElementById('todo-list')
    //const lis = document.getElementsByTagName('li')

    //LISTA DE DADOS OU ESTRUTURA DE DADOS
    let arrTasks = [
        {
            name: 'task 1',
            createAt: Date.now(),
            completed: false
        }
    ]

    function addEventLi(li){
        li.addEventListener('click', function(){
            console.log(this)
        })

    }

    function generateLiTask(obj){
        const li = document.createElement('li')
        li.className = 'todo-item'
        const p = document.createElement('p')
        p.className = 'task-name'
        p.textContent = obj.name
        li.appendChild(p)
        ul.appendChild(li)

        addEventLi(li)

        return li
    }

    function renderTasks(){
        ul.innerHTML = ''
        arrTasks.forEach(taskObj => {
            ul.appendChild(generateLiTask(taskObj))
        });
    }

    function addTask(task){
        arrTasks.push({
            name: task,
            createAt: Date.now(),
            completed: false
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
        renderTasks()
        itemInput.value = ''
        itemInput.focus()
    });
    renderTasks()

})()