const fs = require('fs');

fs.writeFileSync('notes.txt', 'cette page est crée par node.js!')


fs.appendFileSync('notes.txt', "Je vis dans la planete mars.")

