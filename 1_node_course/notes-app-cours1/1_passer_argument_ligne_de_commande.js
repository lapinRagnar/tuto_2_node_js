// voir la liste des arguments passer dans la ligne de commande 
// quand on lance > node app.js
// console.log(process.argv)


const command = process.argv[2]

console.log(command);

// > node app.js mon_argument
// afficher à l'ecran mon_argument

if (command == 'ajouter'){
    console.log("on ajouter quelque chose ...");
}else{
    console.log("pas d'argument.... oups!");
}





