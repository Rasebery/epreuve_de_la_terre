const arguments = process.argv.slice(2);
// 
// récupère les arguments donnés en ignorant les deux premiers
let reverseWords = "";

for (const word of arguments) {

    reverseWords += inverser(word) + " ";
    // 
    // ajoute le mot inversé à la variable reverseWords
}

console.log(reverseWords);