// Normal function
const square = function (x) {
    return x * x
}
// Arrow function
const arrowSquare = (x) => {
    return x * x
}
// Another arrow function
const arrowSquareTwo = (x) => x * x

console.log(arrowSquareTwo(2))


// Arrow functions can't permit to access to the property this

const event = {
    name: 'Birthday Party',
    guestList: ['Steve', 'Jen', 'Mike'],
    printGuestList () {
        console.log('Guest list for ' + this.name)
        
        this.guestList.forEach((guest) => {
            console.log(guest + ' is attending ' + this.name)
        })
    }
}
event.printGuestList()