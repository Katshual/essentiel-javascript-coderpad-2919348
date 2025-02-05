function trouverNombreImpair(number) {
  let nombreImpairs = [];
  for (let i = 1; i <= number; i += 2) {
    nombreImpairs.push(i);
  }
  return nombreImpairs;
}
//trouverNombreImpair([1, 2, 3, 4, 5, 6, 7, 8, 9]);
/*function trouverNombresImpairs(nombre) {
    var nombresImpairs = [];
     for (var i = 1; i <= 10; i += 2){
         nombresImpairs.push(i);
} return nombresImpairs;
}*/
console.log(trouverNombreImpair(25));
