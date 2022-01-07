const fs = require('fs')
// const book = {
//     title: "la decouverte des matières noires",
//     author: 'lapin ragnar'
// }

// // convertir object javascript en json
// const bookJSON = JSON.stringify(book)
// fs.writeFileSync('1_2-json.json', bookJSON)

const dataBuffer = fs.readFileSync('1_2-json.json')
const dataJSON = dataBuffer.toString()
const data = JSON.parse(dataJSON)
console.log(data.title);



