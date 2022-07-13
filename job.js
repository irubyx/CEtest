const cantFirstClass = process.argv[2]
const cantEconomy = process.argv[3]
const cantChildren = process.argv[4]
const cantHours = process.argv[5]

const calculateFood = (personas, horas) => {
    if (horas <= 6) {
        return personas
    } else if (horas > 6 && horas <= 12) {
        return personas * 2
    } else if (horas > 12 && horas <= 24) {
        return personas * 3
    }
}

const calculateWater = (personas, horas) => {
    if (horas <= 6) {
        return personas * 2
    } else if (horas > 6 && horas <= 12) {
        return personas * 4
    } else if (horas > 12 && horas <= 24) {
        return personas * 6
    }
}

console.log("XXX")
console.log("Menus for first class: " + calculateFood(cantFirstClass, cantHours) + ". Bottles of water (2.5L): " + calculateWater(cantFirstClass, cantHours) + ".")
console.log("Menus for economy class: " + calculateFood(cantFirstClass, cantHours) + ". Bottles of water (2.5L): " + calculateWater(cantFirstClass, cantHours) + ".")
console.log("Menus for children: " + cantChildren + ".")
console.log("Flight hours: " + cantHours + ".")
console.log("XXX")