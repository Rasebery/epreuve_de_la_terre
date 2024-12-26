const number = process.argv.slice(2)
//récupère les arguments donné on ignorant les deux premiers

if (isNaN(number)) {
//isNaN() permet de vérifier si la valeur donnée est un nombre
    console.log("Tu ne me la mettrais pas à l'envers ?")
} else if (number % 2 == 0) {
//vérifie si le reste de la division de number par 2 est égal à 0
    console.log(number + " est pair")
} else {
    console.log(number + " est impair")
}