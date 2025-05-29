import fs from 'fs' //ES6
// const fs = require('fs') //CommonJS
const DB_FILE_PATH = './core/db'
console.log('[CRUD]')

function create(content: string) {
  // create a JS object notation (json.org)
  const todo = {
    content: content,
  }

  console.log(todo)

  // save content on system
  fs.writeFileSync(DB_FILE_PATH, content)
  return content
}

function read() {
  const db = fs.readFileSync(DB_FILE_PATH, 'utf-8')
  return db
}

// [SIMULATION]
create('first TODO')
console.log(read())
