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
        },
        {
            name: 'task 2',
            createAt: Date.now(),
            completed: false
        }
    ]

    // function addEventLi(li){
    //     li.addEventListener('click', function(){
    //         console.log(this)
    //     })

    // }

    function generateLiTask(obj){
        const li = document.createElement('li')
        const p = document.createElement('p')
        const checkButton = document.createElement('button')//criando um botão pelo js
        const editButton = document.createElement('i')
        const deleteButton = document.createElement('i')

        li.className = 'todo-item'

        checkButton.className = 'button-check'
        checkButton.innerHTML = '<i class="fas fa-check displayNone"></i>'
        checkButton.setAttribute('data-action', 'checkButton')

        li.appendChild(checkButton)

        p.className = 'task-name'
        p.textContent = obj.name
        li.appendChild(p)

        editButton.className = 'fas fa-edit'
        editButton.setAttribute('data-action', 'editButton')
        li.appendChild(editButton)

        const containerEdit = document.createElement('div')
        containerEdit.className = 'editContainer'
        const inputEdit = document.createElement('input')
        inputEdit.setAttribute('type', 'text')
        inputEdit.className = 'editInput'

        containerEdit.appendChild(inputEdit)
        const containerEditButton = document.createElement('button')
        containerEditButton.className = 'editButton'
        containerEditButton.textContent = 'Edit'
        containerEditButton.setAttribute('data-action', 'containerEditButton')
        containerEdit.appendChild(containerEditButton)
        const containerCancelButton = document.createElement('button')
        containerCancelButton.className = 'cancelButton'
        containerCancelButton.textContent = 'cancel'
        containerCancelButton.setAttribute('data-action', 'containerCancelButton')
        containerEdit.appendChild(containerCancelButton)

        li.appendChild(containerEdit)

        deleteButton.className = 'fas fa-trash-alt'
        deleteButton.setAttribute('data-action', 'deleteButton')
        li.appendChild(deleteButton)
        

        // addEventLi(li)

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

    function clickedUl(e){
        console.log(e.target)
        console.log(e.target.getAttribute('data-action'))
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

    ul.addEventListener('click', clickedUl)


    renderTasks()

})()