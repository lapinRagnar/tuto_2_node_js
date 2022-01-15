// faire une requete http et https avec le module fornie avec node.js - pas besoin d'installer

import {http} from 'http'

url = 'http://api.weatherstack.com/current?access_key=4eed30af8af9bc87cab60b4682dd3448&query=lyon,france'

// const request = http.request(url, (response) => {
//     let data = ''
//     response.on('data', (chunk) => {
//         data += chunk
//     })

//     response.on('end', () => {
//         console.log(data);
//     })
// })

const options = {
    url1: 'http://api.weatherstack.com/current?access_key=4eed30af8af9bc87cab60b4682dd3448&query=lyon,france'
}

const req = http.request(options)
req.end()


req.on((info) => {
    console.log(info);
})
