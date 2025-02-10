let citationDuJour = "Tout va à point à qui sait attendre.";
function injecterCitation(document) {
  //on crée l'élément <p>
  let p = document.createElement("p");
  //on ajoute du contenu à l'élément
  let textNode = document.createTextNode(citationDuJour);
  p.appendChild(textNode);
  //on insère l'élément au DOM
  let section = document.getElementById("citationDuJour");
  section.appendChild(p);
}
injecterCitation(document);
