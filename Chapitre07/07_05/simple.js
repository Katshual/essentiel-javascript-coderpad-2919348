let main = document.querySelector("#pageContent main");

console.log(`L'élément main possède ${main?.children.length} enfants`);

//modification d'un attribut
let mainP = document.querySelector("#pageContent main p");
mainP?.setAttribute("align", "right");

console.log(mainP);

//autre méthode
let mainH = document.querySelector("#pageContent main h1");
mainH.align = "right";
console.log(mainH);
