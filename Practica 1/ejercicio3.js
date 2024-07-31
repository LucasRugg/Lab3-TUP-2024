/* Dado un arreglo de objetos de países que poseen dos propiedades: name y
population, ordenarlos de mayor a menor en cuanto a su población utilizando la
función de arreglo sort().
Ejemplo de un objeto del arreglo: { name: Argentina, population: 458100000} */

const countries = [
  { name: "Argentina", population: 45810000 },
  { name: "Brazil", population: 211000000 },
  { name: "Canada", population: 37742154 },
  { name: "Denmark", population: 5814461 },
  { name: "Egypt", population: 100388073 },
];

const sortedCountries = countries.sort((a, b) => b.population - a.population);

console.log(sortedCountries);
