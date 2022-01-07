
// const yargs = require('yargs')
// const notes = require('./notes')
import yargs from 'yargs'
import { hideBin } from 'yargs/helpers'
import notes from './notes.js'

const yarg = yargs(hideBin(process.argv))

// Yargs stored version number
// yarg.version('1.0.0')

// pour lancer l'appication, tapez la commande suivante dans un terminale
// >  node app.js add --title="travailler mon code" --body="apprendre framework"

// create add command
yarg.command({
    command: 'add',
    describe: "add a new note",
    builder: {
        title: {
            describe: "note title",
            demandOption: true,
            type: 'string'
        },
        body: {
            describe: "note body",
            demandOption: true,
            type: 'string'
        }
    },
    handler(argv){
        notes.addNote(argv.title, argv.body)
    }
})

// fonctionalité de suppression de note
yarg.command({
    command: 'remove',
    describe: 'remove a note ',
    builder: {
        title: {
            describe: "note title",
            demandOption: true, 
            type: 'string'
        }
    },
    handler(argv){
        console.log("suppression d'une note!");
        notes.removeNote(argv.title)
    }
})

// create List command
yarg.command({
    command: 'list',
    describe: 'list your note',
    handler() {notes.listNotes()}
})

// create read command
yarg.command({
    command: 'read',
    describe: 'read a note',
    handler(){console.log('Lire mes notes');}
})


// pour l'afficher à l'ecran
yarg.parse()


