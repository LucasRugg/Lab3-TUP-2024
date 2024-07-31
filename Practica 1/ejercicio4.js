/* Estás a cargo de las velas de cumpleaños para el cumpleañero y decidiste que la
torta va a tener una vela por cada año de su edad total. Solo van a poder soplar las
velas más altas de la torta.
Tu objetivo es contar cuántas son las más altas de la torta
Ejemplo candles = [4, 4, 1, 3]
Las velas de mayor altura son de 4 de altura y son 2 en total. Por ende, la función
debe retornar 2 como valor.
 */

const candles = [4, 2, 3, 1, 4];

const maxHeight = Math.max(...candles); //busco cual es la mayor altura
const count = candles.filter((height) => height === maxHeight).length; //creo un nuevo array formado por las velas que tengan la mayor altura y me quedo con su longitud
console.log(count); // Output: 2
