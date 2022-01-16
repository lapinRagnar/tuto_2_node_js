const path = require('path');
const express = require('express');
const hbs = require('hbs');

const app = express()
const port = 8080

// definir les chemins
const publicDirectoryPath = path.join(__dirname, '../public')
const viewsPath = path.join(__dirname, '../templates/views')
const partialsPath = path.join(__dirname, '../templates/partials')

// set up un template dynamique avec hbs - handlbars engine
app.set('view engine', 'hbs')
app.set('views', viewsPath )
hbs.registerPartials(partialsPath)

// permet d'afficher la page public/index.html - donc plus besoin de mettre la route app.get('', (req, res) => { res.send(`.... `) })
// on peut supprimer les routes et uliser des pages statiques
// et pour acceder a la page on fait, localhost ou localhost/about.html ou localhost/help.html
app.use(express.static(publicDirectoryPath))

// pour utiliser hbs on a besoin de créer des routes - template dynamique
app.get('', (req, res) => {
    res.render('index', {
        title: "la page d'accueil - templating hbs",
        content: "on passe des variables les mecs dans la fonction render de hbs"
    })
})

app.get('/about', (req, res) => {
    res.render('about')
})

app.get('/help', (req, res) => {
    res.render('help')
})


app.get('/weather-app', (req, res) => {
    res.send("Page météo")
})

// lancer le server
app.listen(port, () => {
    console.log(` le serveur est lancé dans localhost:${port}  `);
})