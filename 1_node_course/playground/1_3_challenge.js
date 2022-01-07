/*
    travailler avec json et filesystem:

    1. load and parse the json data
    2. change the name and age property using info
    3. stringify the changed object and override the original data
    4. test

*/

const fs = require('fs')
const dataBuffer = fs.readFileSync('1_4-data.json')
const dataJSON = dataBuffer.toString()
const dataJS = JSON.parse(dataJSON)
dataJS.name = "Roooochat b"
dataJS.planet = "Jupyter"
dataJS.age = 15045220000
console.log(dataJS);
const dataJSON2 = JSON.stringify(dataJS)
fs.writeFileSync('1_4-data.json', dataJSON2)






