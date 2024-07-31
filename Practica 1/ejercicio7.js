/* Escribir una función que convierta un objeto de JS en un arreglo de JS:
Ejemplos:
toArray({ a: 1, b: 2 }) ➞ [["a", 1], ["b", 2]]
toArray({ shrimp: 15, tots: 12 }) ➞ [["shrimp", 15], ["tots",
12]]
toArray({}) ➞ [] */

const toArray = (obj) => {
  return Object.entries(obj);
};

console.log(toArray({ a: 1, b: 2 }));
