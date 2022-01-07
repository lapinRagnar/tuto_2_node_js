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
    handler: function (){
        console.log("Bonjour tout le monde");
    }
})

// créer une option (argument) - ajouter
yargs.command({
    command: 'ajouter',
    describe: "tu peux ajouter ce que tu veux!",
    handler: function (){
        console.log("Bonjour tout le monde");
    }
})

// pour le lancer > node nom_app --help
// pour le lancer > node nom_app ajouter
// créer une option (argument) - ajouter
yargs.command({
    command: 'supprimer',
    describe: "supprime les choses inutiles ....",
    handler: function (){
        console.log("Salut, tu as bien supprimé des choses");
    }
})

// lire
// créer une option (argument) - ajouter
yargs.command({
    command: 'lire',
    describe: "liste tout ce qu'on a fait!",
    handler: function (){
        console.log("Voici les listes de mes notes!");
    }
})

// pour l'afficher à l'ecran
console.log(yargs.argv);
