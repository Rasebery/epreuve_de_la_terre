const myArguments = process.argv.slice(2)
//process.argv.slice() permet de choisir ce que l’on souhaite conserver dans le tableau.
for (const i of myArguments) {
//on recupère les arguments du tableau myArguments pour les passé dans i avec l'instruction For...of
    console.log(i)
}