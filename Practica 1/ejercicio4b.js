// Estas a cargo de las velas de la torta por el aniversario de un club y decidiste
// que la torta va a tener una vela por cada numero de los años de fundacion y actual.
// Solo van a poder soplar las velas más altas de la torta correspondientes a los
// numeros mas altos
// ejemplo let candles = [1, 9, 4, 9, 2, 0, 2, 4];
// Las velas de mayor altura son de 9 de altura y son 2 en total. Por ende, la función
// debe retornar 2 como valor.
//1- guardar la altura mayor
//2- hacer una funcion que devuelva la candtidad de velas altas, recibiendo
// tanto el arreglo a chequear como la altura mayor

const candles = [1, 9, 4, 9, 2, 0, 2, 4];

const maxHeight = Math.max(...candles);

const countHigher = (maxNumber, ...array) => {
  const count = array.filter((a) => a === maxNumber).length;
  return count;
};
console.log(countHigher(maxHeight, ...candles));
