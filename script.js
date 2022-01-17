import data from './data.json' assert { type: 'json' }

function createTag(element) {
  return document.createElement(element)
}

let title = document.querySelector('h1')
title.textContent = 'Rock School'

let table = document.getElementById('table')

let thead = createTag('thead')
let tbody = createTag('tbody')
let headLine = createTag('tr')

const student = data
const rows = []

student.students.forEach(function (stud) {
  for (let prop in stud) {
    if (rows.indexOf(prop) == -1) {
      rows.push(prop)
    }
  }
})

if (student.students.length > 0) {
  let heading = createTag('tr')
  rows.forEach(function (prop, indice) {
    let colun = createTag('th')
    colun.textContent = prop
    heading.appendChild(colun)
  })
  thead.appendChild(heading)

  student.students.forEach(function (stud) {
    let line = createTag('tr')
    rows.forEach(function (prop) {
      let colun = createTag('td')
      colun.textContent = stud[prop]
      line.appendChild(colun)
    })
    tbody.appendChild(line)
  })
}

thead.appendChild(headLine)
table.appendChild(thead)
table.appendChild(tbody)
