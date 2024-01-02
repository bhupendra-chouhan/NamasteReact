const person = {
    firstName: "Bhupi",
    Age: 21,
    // vehicle: { // when this is 'present' v/s 'not present' 
    //     car : "Lambo"
    // }
}

// alternate of optional chaining (using ?:):
const vehicleCar1 = person.vehicle ? person.vehicle.car : undefined

// Optional chaining (using ?.):
const vehicleCar2 = person.vehicle?.car

/* It says if person.vehicle is present than return person.vehicle.car else it will return 'undefined' (which is default behaviour of JS) */

console.log(person.vehicleCar) // undefined
console.log(vehicleCar1) 
console.log(vehicleCar2)