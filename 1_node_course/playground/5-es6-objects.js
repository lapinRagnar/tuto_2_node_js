// object shorthand
// syntaxe taloha
//-----------------------------------------------------

// const name = "Anarana anakiray"
// const userAge = 27

// const user = {
//     name: name,
//     age: userAge,
//     location: "Lyon"
// }

// console.log(user);

// syntaxe es6 equivant de code la haut
const name = "Anarana anakiray"
const userAge = 27

const user = {
    name,                   // on enleve le :name
    age: userAge,
    location: "Lyon"
}

console.log(user);


// object destructiring
// enregistrer dans une variable séparé
//-----------------------------------------------------

const product = {
    label: "la biera gasy",
    price: 2000,
    stock: 400,
    salePrice: undefined
}

// avant on faisait ca
// const label = product.label
// const price = product.price

// console.log(label + ' coute ' +price + " €");

// maintenant avec la syntaxe es6 de destructiring
//-----------------------------------------------------

const {label, price} = product          // c'est ca la destructiring les mecs

console.log(label + ' coute ' +price + " €");


// si l'on veut changer le nom de la variable de ce qu'on a definit dans notre objet product, on fait comme ca
// et donner une valeur par de faut d'une varible qui n'est pas dans notre objet product

const {label: labelDelaBiere, rating= 5} = product
console.log(labelDelaBiere);
console.log("valeur par defaut de rating " + rating);


// utiliser une destructiring dans une fonction fléchée

const transaction = (type, {label, stock}) => {
    console.log(label, type, stock);
}

transaction('commande produit', product)
