/*
 * Reto #2
 * LA SUCESIÓN DE FIBONACCI
 * Fecha publicación enunciado: 10/01/22
 * Fecha publicación resolución: 17/01/22
 * Dificultad: DIFÍCIL
 *
 * Enunciado: Escribe un programa que imprima los 50 primeros números de la sucesión de Fibonacci empezando en 0.
 * La serie Fibonacci se compone por una sucesión de números en la que el siguiente siempre es la suma de los dos anteriores.
 * 0, 1, 1, 2, 3, 5, 8, 13...
 */

function fibonacci(count, fibNumber1, fibNumber2, fibList) {
    if (count === 1) {
        fibList += fibNumber2;
      console.log("Done!");
      console.log(fibList);
      return;
    }
      fibList += fibNumber2 + ", ";
      fibonacci(count-1, fibNumber2, fibNumber1 + fibNumber2, fibList);
  }
  
  fibonacci(50, 0, 1, "0, ");