const geocode = require('./utils/geocode')
const forecast = require('./utils/forecast')

const address = process.argv[2]

if (!address) {
    console.log('Please provide an address')
} else {
    geocode(address, (error, data) => {
        if (error) {
            return console.log(error)
        }

        forecast(data.latitude, data.longitude, (error, forecastData) => {
            if (error) {
                return console.log(error)
            }

            console.log(data.location)
            console.log(forecastData)
        })
    })
}


// import request from "request";

// const url =''

// request({url: url}, (error, response) => {

// })

// const axios = require('axios');
// const params = {
//   access_key: '4eed30af8af9bc87cab60b4682dd3448',
//   query: 'France'
// }

// axios.get('https://api.weatherstack.com/current', {params})
//   .then(response => {
//     const apiResponse = response.data;
//     console.log(apiResponse);
//     // console.log(`Current temperature in ${apiResponse.location.name} is ${apiResponse.current.temperature}℃`);
//   }).catch(error => {
//     console.log(error);
//   });

// const geocode = (address, callback) => {
//   const url = 'https://geocoding-api.open-meteo.com/v1/search?name='+ address  // encodeURIComponent(address)

//   request({url: url, json: true}, () => {
    
//   })
// }

// geocode('lyon', (error, data) => {

// })