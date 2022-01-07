// const square = function(x){
//     return x * x
// }

// const square = (x)=>{
//     return x * x
// }

// const square = (x) => x * x

// console.log(square(3));

// ====================================

// mais attention ca ne marche pas cet exemple avec la fonction flechée
// const event = {
//     name: "mon super nom",
//     afficherListeInvite: function(){
//         console.log("la liste des invités " + this.name);
//     }
// }
// event.afficherListeInvite()

// mains on peut le faire avec ca


// const event = {
//     name: "mon super nom",
//     afficherListeInvite(){
//         console.log("la liste des invités " + this.name);
//     }
// }
// event.afficherListeInvite()


// un autre ex

const fete = {
    name: "Noel",
    invites: ['lapin', 'ragnar', 'beloub'],
    afficherListeInvite(){
        console.log("la liste des invités " + this.name);
        this.invites.forEach((invite)=>{
            console.log(invite + "sera present à la fete de " + this.name);
        })
    }
}
fete.afficherListeInvite()
