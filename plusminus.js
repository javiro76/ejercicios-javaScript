/*
Given an array of integers, calculate the ratios of 
its elements that are positive, negative, and zero. 
Print the decimal value of each
 fraction on a new line with  places after the decimal.

Note: This challenge introduces precision problems. 
The test cases are scaled to six decimal places, 
though answers with absolute error of up to  are acceptable.

Example

There are  elements, two positive, two negative and one zero. 
Their ratios are ,  and . Results are printed as:
*/


const arr = [1,1,0,-1,-1]; 

const plusMinus = (arr) => {

    const numerosPositivos = arr.filter((positivo)=> positivo > 0 )
    const decimalPositivos = numerosPositivos.length / arr.length;
    console.log(decimalPositivos.toFixed(6));
    
    const numerosNegativos = arr.filter((negativo) => negativo < 0 );
    const decimalNegativos = numerosNegativos.length / arr.length;
    console.log(decimalNegativos.toFixed(6));

    const cantidadCeros = arr.filter((cero) => cero === 0);
    const decimalCeros = cantidadCeros.length / arr.length;
    console.log(decimalCeros.toFixed(6));

    /*
    -----!--Refactorizado--!------

    const plusMinus = (arr) => {
        const arrLength = arr.length;
        const positiveNumbers = arr.filter(num => num > 0);
        const negativeNumbers = arr.filter(num => num < 0);
        const zeros = arr.filter(num => num === 0);

        const decimalPositive = positiveNumbers.length / arrLength;
        const decimalNegative = negativeNumbers.length / arrLength;
        const decimalZero = zeros.length / arrLength;

        console.log(decimalPositive.toFixed(6));
        console.log(decimalNegative.toFixed(6));
        console.log(decimalZero.toFixed(6));
    };
     
    */


};

plusMinus(arr);

