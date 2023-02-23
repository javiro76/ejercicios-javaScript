/*
Crear una función que sume los números 
enteros de un arreglo y devuelva el resultado 


*/


let ar = [1,2,3];


const sumaArray = ( array ) => {

    let suma = 0;

    array.forEach(element => {
        
        suma = suma + element;
        
    });
    return suma;
}; 

console.log(sumaArray(ar));

const sumaArray2 = ( array ) => {

    let suma = 0;
    for (let index = 0; index < array.length; index++) {
        const element = array[index];
        suma = suma + element; 
   
    }
    return suma;
}

console.log(`El resultado de la suma es: ${sumaArray2(ar)}`);



