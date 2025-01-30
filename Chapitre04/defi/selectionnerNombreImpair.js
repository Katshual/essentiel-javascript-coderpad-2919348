// JavaScript code​​​​​​‌‌​​‌​​‌​‌‌​​‌​​‌​‌‌‌​​​​ below
// Modifiez ces valeurs booléennes pour décider si vous voyez
// la réponse attendue et/ou les indices.
const showExpectedResult = false;
const showHints = false;

function oddNumbers() {
  let nombresImpairs = [];
  // Votre code commence ici.
  // Votre tâche consiste à sélectionner les nombres impairs entre 1 et 10
  // et à les stocker dans la variable nombresImpairs.
  for (let i = 1; i <= 10; i++) {
    if (i % 2 !== 0) {
      nombresImpairs.push(i);
    }
  }

  // Votre code se termine ici.
  return nombresImpairs;
}

console.log(oddNumbers());
