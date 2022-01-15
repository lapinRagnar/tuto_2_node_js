- commande pour initialiser package.json et installer express

> npm init -y
> npm i express

- créer un dossier src
- creer src/app.js

#####
#   Serving up Static Assets 
#####

- créer un dossier public
- créer un fichier public/index.html
- créer un fichier public/about.html
- créer un fichier public/help.html

- dans src/app.js
    const path = require('path');
    const publicDirectoryPath = path.join(__dirname, '../public')


