const path = require('path')
//La fonction require('path') permet d’importer le module Path, qui est utilisé pour manipuler et gérer les chemins de fichiers.
const filename = path.basename(__filename)
//path.basename retourne le nom du fichier à partir d’un chemin donné.
//__filename nous donne le chemin du fichier
console.log(filename)