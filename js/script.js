const urlTodos = 'https://jsonplaceholder.typicode.com/users/1/todos'
const wrapper = document.querySelector('.wrapper')

function createListElement(el) {
    let element = document.createElement('li')
    element.classList.add('list__el')

    let text = document.createElement('span')
    text.textContent = el.title
    text.classList.add('list__text')

    let elId = document.createElement('span')
    elId.textContent = el.id
    elId.classList.add('list__id')

    let isDone = document.createElement('span')
    isDone.innerHTML = `${el.completed ? '<span class="list__completed">Выполнено</span>': '<span class="list__completed_no">Не выполнено</span>'}`
    isDone.classList.add('list__done')

    element.appendChild(elId)
    element.appendChild(text)
    element.appendChild(isDone)

    return element

}

function createList(listOfTodos) {
    let rawList = document.createElement('ul')
    rawList.classList.add('list')

    listOfTodos.forEach(el => {
        rawList.appendChild(createListElement(el))
    })

    return rawList
}

async function getTodoList(url) {
    let rawTodoList = await fetch(url)
    return rawTodoList.json()
}

async function main() {
    let todoList = await getTodoList(urlTodos)

    let list = createList(todoList)

    wrapper.appendChild(list)
}

main()
