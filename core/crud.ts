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

function update(id: string, partialTodo: Partial<Todo>) {
  const todos = read()
  todos.forEach((currentTodo) => {
    const isToUpdate = currentTodo.id === id
    if (isToUpdate) {
      Object.assign(currentTodo, partialTodo)
    }
  })
  console.log('UPDATED TODOS', todos)
}

function CLEAR_DB() {
  fs.writeFileSync(DB_FILE_PATH, '')
}

// [SIMULATION]
CLEAR_DB()
create('first TODO')
create('first TODO')
const thirdTodo = create('second TODO')
update(thirdTodo.id, {
  content: 'second TODO with new content',
})
console.log(read())
