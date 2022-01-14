// import request from "request";

// const url =''

// request({url: url}, (error, response) => {

// })

const axios = require('axios');
const params = {
  access_key: '4eed30af8af9bc87cab60b4682dd3448',
  query: 'France'
}

axios.get('https://api.weatherstack.com/current', {params})
  .then(response => {
    const apiResponse = response.data;
    console.log(apiResponse);
    // console.log(`Current temperature in ${apiResponse.location.name} is ${apiResponse.current.temperature}℃`);
  }).catch(error => {
    console.log(error);
  });