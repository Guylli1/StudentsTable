import data from './data.json' assert { type: 'json' }

document.querySelector('h1').textContent = 'Rock School'

const table = document.getElementById('table')
const students = data
const thead = createHtmlElement('thead'),
  tbody = createHtmlElement('tbody'),
  rowHead = createHtmlElement('tr')

function createHtmlElement(element) {
  return document.createElement(element)
}

// make header
for (const key of Object.keys(data[0])) {
  const columnHead = createHtmlElement('th')
  columnHead.textContent = key

  rowHead.appendChild(columnHead)
}

// make body
for (const student of students) {
  const rowBody = createHtmlElement('tr')

  student.Result = student.Note > 7 ? ':)' : ':('

  for (const value of Object.values(student)) {
    const columnBody = createHtmlElement('td')
    columnBody.textContent = value
    student.Note < 7 ? (columnBody.style.backgroundColor = '#b33939') : null

    rowBody.appendChild(columnBody)
  }

  tbody.appendChild(rowBody)
}

thead.appendChild(rowHead)
table.appendChild(thead)
table.appendChild(tbody)

//const line = (columnBody.style.backgroundColor = 'red')
