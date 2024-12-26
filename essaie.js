const number1 = parseInt(process.argv[2]);
const number2 = parseInt(process.argv[3]);
// parseFloat() permet de convertir une chaîne de caractères en nombre à virgule flottante
//on aurais pus utiliser parseInt() pour convertir en entier
const operation = Math.floor(number1 / number2);
//Math.floor() permet d'arrondir un nombre à l'entier inférieur pour ensuite faire appel du restant de la division
// on ne l'aurait pas utiliser avec parseInt()
const remainder = operation - (number1 % number2);

if (isNaN(number1) || isNaN(number2)) {
    console.log("Tu ne me la mettrais pas à l'envers ?");
} else if (number2 === 0) {
    console.log("erreur");
} else {
    console.log(`Résultat: ${operation}\nReste: ${remainder}`);
}