let myArgvs = process.argv.slice(2)
//process.argv.slice() permet de choisir ce que l’on souhaite conserver dans le tableau.
for (let i = 0; i < myArgvs.length; i++) {
//myArgvs.length contient le nombre d’arguments passés dans le tableau myArgvs.
    console.log(myArgvs[i])
//myArgvs[i] contient les arguments du tableau myArvgs avec les expressions initialisé avec i
}