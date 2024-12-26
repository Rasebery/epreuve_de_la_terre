const number = process.argv.slice(2);

if (isNaN(number)) {
    console.log("Tu ne me la mettrais pas à l'envers ?")
} else if (number % 2 == 0) {
    console.log(number + " est pair")
} else {
    console.log(number + " est impair")
}