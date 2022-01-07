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


##########################################################################################
#     arguments parsing avec le package yargs
##########################################################################################

https://www.npmjs.com/package/yargs

pour regler pb yarg (https://github.com/yargs/yargs/issues/1854)

npm i yargs

const yargs = require('yargs')

//  yard permet de gerer les options comme avec process mais en plus meilleurs

// console.log(process.argv);
// console.log(yargs.argv);

// lancer le terminal avec > node nom_app.js argument_1 --essai="salut les amis"
// retourne un joli tableau


// créer une option (argument) - ajouter
yargs.command({
    command: 'ajouter',
    describe: "tu peux ajouter ce que tu veux!",
    builder: {
        titre: {
            describe: "voici mon super titre",
            demandOption: true,
            type: 'string'
        },
        commentaire: {
            describe: "ceci est super commentaire",
            demandOption: true,
            type: 'string'
        }
    },
    handler: function (argv){
        console.log("Bonjour tout le monde - le titre est: ", argv.titre);
        console.log("commentaire: ", argv.commentaire);
    }
})

// pour le lancer > node nom_app --help
// pour le lancer > node nom_app supprimer
// créer une option --titre et  argument supprimer
yargs.command({
    command: 'supprimer',
    describe: "supprime les choses inutiles ....",
    handler: function (){
        console.log("Salut, tu as bien supprimé des choses");
    }
})

// lire
// créer une option (argument) - lire
yargs.command({
    command: 'lire',
    describe: "liste tout ce qu'on a fait!",
    handler: function (){
        console.log("Voici les listes de mes notes!");
    }
})

// pour l'afficher à l'ecran
yargs.parse()

##########################################################################################
#     command lines args - storing data with json
##########################################################################################

const book = {
    title: "la decouverte des matières noires",
    author: 'lapin ragnar'
}

// convertir object javascript en json
const bookJSON = JSON.stringify(book)
console.log(bookJSON);
console.log(bookJSON.title); // ne marche pas car et return undefined

// convertir json en objet js
const parseDATA = JSON.parse(bookJSON)
console.log(parseDATA);
console.log(parseDATA.title); // marche car c'est un objet js


------------------------
challenge :
/*
    travailler avec json et filesystem:

    1. load and parse the json data
    2. change the name and age property using info
    3. stringify the changed object and override the original data
    4. test

*/

const fs = require('fs')
const dataBuffer = fs.readFileSync('1_4-data.json')
const dataJSON = dataBuffer.toString()
const dataJS = JSON.parse(dataJSON)
dataJS.name = "Roooochat b"
dataJS.planet = "Jupyter"
dataJS.age = 15045220000
console.log(dataJS);
const dataJSON2 = JSON.stringify(dataJS)
fs.writeFileSync('1_4-data.json', dataJSON2)



