'use strict'
const fs = require('fs')
const fsThen = Object.assign({}, fs)

fsThen.writeFile = function () {
  return new Promise((resolve, reject) => {
    fs.writeFile(...arguments, err => {
      if (err) reject(err)
      else resolve()
    })
  })
}

fsThen.readFile = function () {
  return new Promise((resolve, reject) => {
    fs.readFile(...arguments, (err, data) => {
      if (err) reject(err)
      else resolve(data)
    })
  })
}

fsThen.readdir = function () {
  return new Promise((resolve, reject) => {
    fs.readdir(...arguments, (err, data) => {
      if (err) reject(err)
      else resolve(data)
    })
  })
}

fsThen.rmdir = function () {
  return new Promise((resolve, reject) => {
    fs.rmdir(...arguments, (err) => {
      if (err) reject(err)
      else resolve()
    })
  })
}

fsThen.mkdir = function () {
  return new Promise((resolve, reject) => {
    fs.mkdir(...arguments, (err) => {
      if (err) reject(err)
      else resolve()
    })
  })
}

module.exports = fsThen
