const letter = process.argv.slice(2)
//récupere les arguments donné on ignorant les deux premiers
let charAscii = letter[0].charCodeAt(0)
//Converti le premier argument en ASCII
let alphabet = ""
//initie une variable vide que l'ont remplit par la suite

for (;charAscii <= 122; charAscii++) {
    //boucle for qui commence à charAscii et s'arrête à 122
    if (charAscii < 97) {
    //vérifie si charAscii est inférieur à 97
        process.exit()
    //si c'est le cas, le programme s'arrête
    }
    alphabet += String.fromCharCode(charAscii)
    //ajoute le caractère correspondant à charAscii dans la variable alphabet
}
console.log(alphabet)