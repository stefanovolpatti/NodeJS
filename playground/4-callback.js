setTimeout(() => {
    console.log('2 second are up')
}, 2000)

const names = ['Steve', 'Joe', 'Jess']
const shortNames = names.filter((name) => {
    return names.length <= 4
})

// const geocode = (address, callback) => {
//     setTimeout(() => {
//         const data = {
//             latitude: 0,
//             longitude: 0
//         }
//        callback(data)
//     }, 2000)
// }

// geocode('Spilimbergo', (data) => {
//     console.log(data)
// })

const add = (a, b, callback) => {
    setTimeout(() => {
        callback(a + b)
    }, 2000)
}

add(1, 4, (sum) => {
    console.log(sum)
})


const doWorkCallback = (callback) => {
    setTimeout(() => {
        // callback('This is my error!', undefined)
        callback(undefined, [1, 4, 7])
    }, 2000)
}

doWorkCallback((error, result) => {
    if (error) {
        console.log(error)
    }
    console.log(result)
})