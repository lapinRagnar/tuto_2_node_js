// const fs = require('fs')
import chalk from 'chalk'
import fs from 'fs'


const loadNotes = () => {
    try{
        const dataBuffer = fs.readFileSync('notes.json')
        const dataJSON = dataBuffer.toString() 
        return JSON.parse(dataJSON)
    }catch (e){
        return []
    }
}

const saveNotes = (notes) => {
    const dataJSON = JSON.stringify(notes)
    fs.writeFileSync('notes.json', dataJSON)
}

const getNotes = () => {
    return "Your notes ..."
}

const addNote = (title, body) => {
    const notes = loadNotes()

    // const duplicateNotes = notes.filter(function(note){
    //     return note.title === title
    // })

    // refactoring avec les fonctions flechée du code ci-dessus
    // const duplicateNotes = notes.filter((note) => note.title === title)
    const duplicateNote = notes.find((note) => note.title === title)

    if ( !duplicateNote ){
        notes.push({
            title: title,
            body: body
        })
        saveNotes(notes)
        console.log(notes + " ==> ajout nouvelle note reussi!");
    }else{
        console.log("Le titre existe déjà, essaie un autre stp!");
        console.log("Echec ==> ajout note");
    }


}

const removeNote = (title) => {
    console.log(title);
    const notes = loadNotes()
    const notesToKeep = notes.filter((note) => note.title !== title ) // retourne true si le titre est trouvé

    if (notes.length > notesToKeep.length){
        console.log(chalk.green.inverse('la note a été bien supprimée!'));
        saveNotes(notesToKeep)
    }else{
        console.log(chalk.red.inverse('note introuvable!'));
    }
    
}


const listNotes = () => {
    const notes = loadNotes()
    console.log(chalk.inverse('Liste de notes:'));
    notes.forEach(note => {
        console.log("titre : " + note.title);
    });
}

const readNote = (title) => {
    const notes = loadNotes()
    const  note = notes.find((note) => note.title == title)

    if (note) {
        console.log(chalk.inverse(note.title));
        console.log(note.body);
    }else{
        console.log(chalk.red.inverse('not introuvable'));
    }
}





export default {
    getNotes,
    addNote, 
    removeNote,
    listNotes,
    readNote
}

// ne marche plus quand j'ai installé chalk
// module.exports = {
//     getNotes: getNotes,
//     addNote: addNote, 
//     removeNote: removeNote
// }