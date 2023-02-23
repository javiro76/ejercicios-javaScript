/*
Escribir el código de una función 
a la que se pasa como parámetro un número entero 
y devuelve como resultado una cadena de texto 
que indica si el número es par o impar. 
Mostrar por pantalla el resultado devuelto por la función.
*/

let num = 10;


const determinarNumero = ( num ) => {
    
    let modulo = num%2 
    
    modulo === 0? 
    console.log(`El número: ${ num } es par`): 
    console.log(`El número: ${ num } es impar`);
};

determinarNumero(num)

const determinarNumero1 = (num) => {
    const esPar = num % 2 === 0;
    console.log(esPar);
    const mensaje = esPar ? "es par" : "es impar";
    console.log(`El número ${num} ${mensaje}`);
  };
  
  determinarNumero1(num);