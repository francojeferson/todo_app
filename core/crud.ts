import fs from 'fs' //ES6
import { v4 as uuid } from 'uuid'
// const fs = require('fs') //CommonJS
const DB_FILE_PATH = './core/db'
console.log('[CRUD]')

// create a model
interface Todo {
  id: string
  date: string
  content: string
  done: boolean
}

function create(content: string): Todo {
  // create a JS object notation (json.org)
  const todo: Todo = {
    id: uuid(),
    date: new Date().toISOString(),
    content: content,
    done: false,
  }

  const todos: Array<Todo> = [...read(), todo]

  // save content on system
  fs.writeFileSync(DB_FILE_PATH, JSON.stringify({ todos }, null, 2))
  return todo
}

function read(): Array<Todo> {
  const dbString = fs.readFileSync(DB_FILE_PATH, 'utf-8')
  const db = JSON.parse(dbString || '{}')
  // Fail Fast Validation
  if (!db.todos) {
    return []
  }
  return db.todos
}

function update(id: string, partialTodo: Partial<Todo>): Todo {
  let updatedTodo
  const todos = read()
  todos.forEach((currentTodo) => {
    const isToUpdate = currentTodo.id === id
    if (isToUpdate) {
      updatedTodo = Object.assign(currentTodo, partialTodo)
    }
  })

  fs.writeFileSync(DB_FILE_PATH, JSON.stringify({ todos }, null, 2))

  if (!updatedTodo) {
    throw new Error('Please, provide another ID!')
  }

  return updatedTodo
}

function updateContentById(id: string, content: string): Todo {
  return update(id, { content })
}

function deleteById(id: string) {
  const todos = read()

  const todosWithoutOne = todos.filter((todo) => {
    if (id === todo.id) {
      return false
    }
    return true
  })

  fs.writeFileSync(DB_FILE_PATH, JSON.stringify({ todos: todosWithoutOne }, null, 2))
}

function CLEAR_DB() {
  fs.writeFileSync(DB_FILE_PATH, '')
}

// [SIMULATION]
CLEAR_DB()
create('first TODO')
const secondTodo = create('second TODO')
deleteById(secondTodo.id)
const extraTodo = create('extra TODO')
// deleteById(extraTodo.id)
const thirdTodo = create('third TODO')
// update(thirdTodo.id, {
//   content: 'Updated!',
//   done: true,
// })
updateContentById(thirdTodo.id, 'Updated!')
const todos = read()
console.log(todos)
console.log(todos.length)
