/* El profesor de Lab Computación III tiene una clase de estudiantes. Frustrado con la
falta de disciplina, el profesor decide cancelar la clase si menos que cierta cantidad
de estudiantes están presentes cuando la clase empieza.
Dado un arreglo de enteros que representa la llegada de estudiantes (<=0 significa
que se llegó temprano o a tiempo!), y la cantidad mínima de estudiantes para que el
profesor de la clase, determinar si la clase se cancela o no.
Devolver la cadena "YES" si la clase SE CANCELA o "NO" si la clase NO SE
CANCELA.
 */
const arrivalTimes = [-1, -3, 4, 2];
const minStudents = 3;

const isCancelled = (minNumber, ...arr) => {
  const onTimeStudents = arr.filter((a) => a <= 0).length;//Armo un array con los estudiantes que llegaron a tiempo y me quedo con su longitud
  return onTimeStudents < minNumber ? "YES" : "NO";//Comparo si es menor que el minimo de estudaintes y devuelve YES si es verdadero o NO si es falso
};

console.log(isCancelled(minStudents, ...arrivalTimes));
