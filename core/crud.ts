import fs from 'fs' //ES6
// const fs = require('fs') //CommonJS
const DB_FILE_PATH = './core/db'
console.log('[CRUD]')

function create(content: string) {
  // create a model
  interface Todo {
    date: string
    content: string
    done: boolean
  }

  // create a JS object notation (json.org)
  const todo: Todo = {
    date: new Date().toISOString(),
    content: content,
    done: false,
  }

  const todos = [todo]

  // save content on system
  fs.writeFileSync(DB_FILE_PATH, JSON.stringify({ todos, dogs: [] }, null, 2))
  return content
}

function read() {
  const db = fs.readFileSync(DB_FILE_PATH, 'utf-8')
  return db
}

// [SIMULATION]
create('first TODO')
create('second TODO')
console.log(read())
