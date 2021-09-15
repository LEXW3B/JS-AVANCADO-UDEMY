// function changeName(name){  //poderia ser tambem com uma aerofunction
//     console.log(name)
//     console.log(this)
// }

const changeName = name => {
    console.log(name)
    console.log(this)
}

const task1 = {
    name: 'task1',
    createAt: new Date(),
    updatedAt: null,
    completed: false,
    changeName: changeName
}

// const task2 = {
//     name: 'task2',
//     createAt: new Date(),
//     updatedAt: null,
//     completed: false
// }
task1.name = 'task 1 updated'
task1.updatedAt = new Date()

task1.changeName()

console.log(task1)
// console.log(task2)

