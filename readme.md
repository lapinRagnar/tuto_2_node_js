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


