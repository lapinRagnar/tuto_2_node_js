console.log("Je suis dans le fichier utils.js");

const name = "Comment exporter une variable dans l'autre fichier avec require"

const add = function (a, b){
    return a + b
}

module.exports = name
module.exports = add
