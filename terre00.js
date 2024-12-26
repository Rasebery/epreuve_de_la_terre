let alphabet = "";
//initie une variable vide que l'ont remplit par la suite
for (let i = 97; i <= 122; i++) {
//initialisation de i entre 97 et 122 (alphabet ASCII)
  alphabet += String.fromCharCode(i);
//String.fromCharCode(i) renvoie le resultat numéraire de i en chaine caractères
}
alphabet += "\n"
// permet un saut de ligne
console.log(alphabet);