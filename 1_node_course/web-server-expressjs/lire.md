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


#####
#   Serving up CSS, JS, Images, and More
#####

- créer un fichier public/css/style.css
- créer un fichier public/css/style.css

- mettre un link:css dans index.html et puis ecrire son css tranquilou! 
- mettre le script dans index.html et puis ecrire son css tranquilou! 


#####
#   Dynamic Pages with Templating 
#####

Handlebars.js
--------------
Handlebars.js is an extension to the Mustache templating language created by Chris Wanstrath.
https://handlebarsjs.com/guide/

npm hbs : 
------
est plus facile à integer avec express js 
https://www.npmjs.com/package/hbs

> npm install hbs

- créer un dossier et fichier views/index.hbs
- créer un dossier et fichier views/about.hbs
- créer un dossier et fichier views/help.hbs

nb: on peut supprimer les pages statique qu'on a créer dans public



#####
# Customizing the Views Directory - utilisation des partials
#####

- renomer views en templates

-  dans src/app.js:
    const viewsPath = path.join(__dirname, '../templates')
    app.set('views', viewsPath )


#####
# Advanced Templating - utilisation des partials
#####

créer les pages statiques :
- partials/header.hbs
- partials/footer.hbs

dans la page ou l'on veut inclure les partiales, on fait:
{{>header}}
{{>footer}}


#####
# 404 Pages
#####



#####
# Browser HTTP Requests with Fetch
#####



#####
# deployement - heroku -github
#####
