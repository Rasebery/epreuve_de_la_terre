const number1 = parseFloat(process.argv[2]);
const number2 = parseFloat(process.argv[3]);
const operation = Math.floor(number1 / number2);
const remainder = number1 % number2;

if (isNaN(number1) || isNaN(number2)) {
    console.log("Tu ne me la mettrais pas à l'envers ?");
} else if (number2 == 0) {
    console.log("erreur");
} else {
    console.log(`Résultat: ${operation}\nReste: ${remainder}`);
}