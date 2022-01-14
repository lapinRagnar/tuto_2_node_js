// setTimeout(()=>{
//     console.log("two seconds are up");
// }, 2000)

// const names = ['nivo', 'maintso', 'mena']
// const shortName = names.filter((name) => {
//     return name.length <= 4
// })


// const geocode = (address, callback) => {
//     setTimeout(() => {
//         const data = {
//             latitude: 0,
//             longitude: 0
//         }
//         callback(data)
//     }, 2000)
// }

// geocode('lyon', (data) => {
//     console.log(data);
// })


const ajouter = (nombre1, nombre2, callback) => {
    setTimeout(() => {
        callback( nombre1 + nombre2)
    })
}

ajouter(1, 4, (sum) => {
    console.log(sum);
})

