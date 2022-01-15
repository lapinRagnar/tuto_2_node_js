const express = require('express')

const app = express()
const port = 8080

// le routing
app.get('', (req, res) => {
    res.send('salut tout le monde')
})

app.get('/help', (req, res) => {
    res.send('page d\' aide ')
})

app.get('/about', (req, res) => {
    res.send("Page a propos")
})

app.get('/weather-app', (req, res) => {
    res.send("Page météo")
})

// lancer le server
app.listen(port, () => {
    console.log(` le serveur est lancé dans localhost:${port}  `);
})