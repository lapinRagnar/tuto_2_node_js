// const fs = require('fs')
import chalk from 'chalk'
import fs from 'fs'

const getNotes = function (){
    return "Your notes ..."
}

const addNote = function(title, body){
    const notes = loadNotes()

    const duplicateNotes = notes.filter(function(note){
        return note.title === title
    })

    if (duplicateNotes == 0){
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

const removeNote = function(title){
    console.log(title);
    const notes = loadNotes()
    const notesToKeep = notes.filter(function(note){
        return note.title !== title                 // retourne true si le titre est trouvé
    })

    if (notes.length > notesToKeep.length){
        console.log(chalk.green.inverse('la note a été bien supprimée!'));
        saveNotes(notesToKeep)
    }else{
        console.log(chalk.red.inverse('note introuvable!'));
    }
    
}

const saveNotes = function(notes){
    const dataJSON = JSON.stringify(notes)
    fs.writeFileSync('notes.json', dataJSON)
}

const loadNotes = function(){
    try{
        const dataBuffer = fs.readFileSync('notes.json')
        const dataJSON = dataBuffer.toString() 
        return JSON.parse(dataJSON)
    }catch (e){
        return []
    }
}

export default {
    getNotes,
    addNote, 
    removeNote
}

// ne marche plus quand j'ai installé chalk
// module.exports = {
//     getNotes: getNotes,
//     addNote: addNote, 
//     removeNote: removeNote
// }