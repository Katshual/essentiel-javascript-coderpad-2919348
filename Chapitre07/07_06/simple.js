//créer l'élément a
let elementA = document.createElement("a");

//changer l'attribut href de l'élément a
elementA.href = "produits.html";

//créer un textNode
let linkLabel = document.createTextNode("Produits");

//ajouter le texte à l'élément a
elementA.appendChild(linkLabel);

//création d'un élément li
let liElement = document.createElement("li");

//Ajout de l'élément A en tant qu'enfant de li
liElement.appendChild(elementA);

//rechercher l'élément ul et y ajouter l'élément li créé plus tôt
document.querySelector("#mainNav ul")?.appendChild(liElement);
