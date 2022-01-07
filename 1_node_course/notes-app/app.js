const yargs = require('yargs')
const notes = require('./notes')

// pour lancer l'appication, tapez la commande suivante dans un terminale
// >  node app.js add --title="travailler mon code" --body="apprendre framework"

// create add command
yargs.command({
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
    handler: function (argv){
        notes.addNote(argv.title, argv.body)
    }
})


// pour l'afficher à l'ecran
yargs.parse()

