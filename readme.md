lien du tuto

https://www.youtube.com/watch?v=vVAsjQ0H9hU&list=PLSmgMHKHJD01n0eapr-qhWFsMQNax_-CW


##########################################################################################
#       module
##########################################################################################

pour importer

const nomVariable = require('fs')

##########################################################################################
#     importer npm  module
##########################################################################################
npm init -y

##########################################################################################
#     colorer le terminal avec le module chalk (package)
##########################################################################################

https://www.npmjs.com/package/chalk

> npm i chalk

##########################################################################################
#     travailler avec Global modules packages and nodemon
##########################################################################################
nodemon permet de lancer une commande comme > node app.js mais voir les modif en live

> npm i nodemon -g
et pour le lancer
> nodemon app.js

##########################################################################################
#     passer des arguments dans la ligne de commande
##########################################################################################

// voir la liste des arguments passer dans la ligne de commande 
// quand on lance > node app.js
// console.log(process.argv)


const command = process.argv[2]

console.log(command);

// > node app.js mon_argument
// afficher à l'ecran mon_argument








