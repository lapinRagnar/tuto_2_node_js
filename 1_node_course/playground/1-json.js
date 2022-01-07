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


