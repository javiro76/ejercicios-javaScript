
/*
Realizar una función donde se compare dos arreglos en cada 
posición, se le asigna un punto cada vez que haya un numero 
mayor al arreglo respectivo 

*/

let a = [5,3,3],
    b = [9,7,1];


const compare = ( a, b ) => {

    let puntosA = 0,
        puntosB = 0;

   for (let i = 0; i < a.length; i++) {
    
   if (a[i] > b[i]){

        puntosA += 1;
       

    }if (a[i] < b[i]){
        puntosB += 1;
      
    }

      
   }
   let resultado = [puntosA, puntosB];
   return resultado;

}



console.log(compare(a,b))



// var sumaA = 0
// var sumaB = 0

// for (var i = 0; i < a.length; i++) {

//     var  A = a[i]
//     var  B = b[i]
//     var  C = 1
//     var c = [0,0]

//     //console.log(A)
//     //console.log(B)
 


//     if (A == B ){
//     //c[0,1] = 0
//     sumaA = sumaA + 0
//     sumaB = sumaB + 0

//     }
//     else if (A > B ){
//     //c[0] = 1
    
//     sumaA = sumaA + C

//     }
//     else {
//     //c[1] = 1
//     sumaB = sumaB + C

//     }

// }
//     c = [sumaA,sumaB]
//     return c




const compare1 = (arr1, arr2) => {
  let puntosArr1 = 0;
  let puntosArr2 = 0;

  for (let i = 0; i < arr1.length; i++) {
    if (arr1[i] > arr2[i]) {
      puntosArr1++;
    } else if (arr1[i] < arr2[i]) {
      puntosArr2++;
    }
  }

  return [puntosArr1, puntosArr2];
};

console.log(compare1(a, b));