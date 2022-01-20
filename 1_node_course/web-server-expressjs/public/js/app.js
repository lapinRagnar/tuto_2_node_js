console.log("salut de app.js javascript! ");

// utiliser un fetch coté client
// fetch('https://puzzle.mead.io/puzzle').then((Response) => {
//     Response.json().then((data)=>{
//         console.log(data);
//     })
// })


// fetch('http://api.weatherstack.com/current?access_key=4eed30af8af9bc87cab60b4682dd3448&query=New%20York').then((res) => {
//     res.json().then((donnee) => {
//         console.log(donnee);
//     })
// })


const weatherForm = document.querySelector('form')
const monInput = document.querySelector('input')
const messageOne = document.querySelector('#message-1')
const messageTwo = document.querySelector('#message-2')



weatherForm.addEventListener('submit', function(e){

    e.preventDefault();

    location = monInput.value
    console.log("ca marche!");
    console.log("tu as saisi : " + location);

    messageOne.textContent = 'Loading...'
    messageTwo.textContent = ''

    fetch('http://api.weatherstack.com/current?access_key=4eed30af8af9bc87cab60b4682dd3448&query=New%20York').then((res) => {
        res.json().then((donnee) => {
            console.log(donnee);
            console.log("je suis la!");
        })
    })



})
