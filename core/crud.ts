import fs from 'fs' //ES6
// const fs = require('fs') //CommonJS
const DB_FILE_PATH = './core/db'
console.log('[CRUD]')

// create a model
interface Todo {
  date: string
  content: string
  done: boolean
}

function create(content: string) {
  // create a JS object notation (json.org)
  const todo: Todo = {
    date: new Date().toISOString(),
    content: content,
    done: false,
  }

  const todos: Array<Todo> = [...read(), todo]

  // save content on system
  fs.writeFileSync(DB_FILE_PATH, JSON.stringify({ todos, dogs: [] }, null, 2))
  return content
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

// [SIMULATION]
create('first TODO')
create('second TODO')
console.log(read())
