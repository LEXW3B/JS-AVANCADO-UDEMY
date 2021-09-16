function changeName(name){  //poderia ser tambem com uma aerofunction ?
    this.name = name
    this.updatedAt = new Date()
}

// const changeName = name => {//com aerofunction não iria servir, porque vira windows
//     console.log(name)
//     console.log(this)
// }

const task1 = {
    name: 'task1',
    createAt: new Date(),
    updatedAt: null,
    completed: false,
    changeName: changeName
}

const task2 = {
    name: 'task2',
    createAt: new Date(),
    updatedAt: null,
    completed: false,
    changeName
}
task1.name = 'task 1 updated'
task1.updatedAt = new Date()

task1.changeName('nome atualizado')
task2.changeName('novo nome')

//console.log(task1)
console.log(task2)

