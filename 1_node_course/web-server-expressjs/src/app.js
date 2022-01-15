const express = require('express')

const app = express()
const port = 8080

// le routing
// render un html
app.get('', (req, res) => {
    res.send(` 
        <h1> Bienvenue sur mon super site </h1>
    `)
})

// render un json
app.get('/help', (req, res) => {
    res.send({
        titre: "mon super titre",
        nom: "mon super nom",
        prenom: "mon super prénom"
    })
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