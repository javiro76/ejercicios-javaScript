
/* Given a square matrix, calculate the absolute difference between the sums of its diagonals.

For example, the square matrix  is shown below:*/

const arr = [[1,2,3],
             [4,5,6],
             [9,8,9]]; 


/*
Lo que se busca 

primera diagonal izquierda a derecha
Número 1: [0][0]
Número 2: [1][1]
Número 3: [2][2]

Segunda diagonal derecha a izquierda
Número 1: [0][2]
Número 2: [1][1]
Número 3: [2][0]



*/             


 const sumaDiagonales = (arr) => {
    
    let sumaLeft = 0;
    let sumaRight =0;

    for (let i = 0; i < arr.length; i++) {
        
        for (let j = i; j <= i; j++) {
           
            const element1 = arr[i][j];
                           
            sumaLeft += element1
        } 
              
    }
       
    for (let i = 0; i < arr.length; i++) {
        

        for (let j = 2 ; j >= 2; j--) {
           
            const element2 = arr[i][j-i];
                          
            sumaRight += element2
        } 
                       
    }
     
    const resultado = sumaLeft - sumaRight
    
    return Math.abs(resultado)

/*
Código refactorizado 

const sumaDiagonales = (arr) => {
  let sumaLeft = 0;
  let sumaRight = 0;

  for (let i = 0; i < arr.length; i++) {
    sumaLeft += arr[i][i];
    sumaRight += arr[i][arr.length - i - 1];
  }

  return Math.abs(sumaLeft - sumaRight);
}

*/



 }            

    

console.log(sumaDiagonales(arr));


