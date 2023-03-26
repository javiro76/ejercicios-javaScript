/*Staircase detail

This is a staircase of size :

   #
  ##
 ###
####
Its base and height are both equal to . It is drawn using # symbols and spaces. 
The last line is not preceded by any spaces.

Write a program that prints a staircase of size n.*/


const staircase = (num) => {

    let arr = Array(num).fill(' '); 

    
    for (let i = arr.length ; i > 0; i--) {
        arr[i] = '#';
        
        console.log(arr.join(''));
    }
 
}



// refactorizado el codigo -------------///
const staircase1 = (num) => {
    for (let i = num; i > 0; i--) {
        console.log(' '.repeat(i - 1) + '#'.repeat(num - i + 1));
    }
}

staircase(6);

staircase1(4)