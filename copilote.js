const hora = (hora) => {
  console.log(`La hora es: ${hora}`);
}

function calculateDaysBetweenDates(begin, end) {    
  let date1 = new Date(begin);
  let date2 = new Date(end);
  let timeDiff = Math.abs(date2.getTime() - date1.getTime());
  let diffDays = Math.ceil(timeDiff / (1000 * 3600 * 24)); 
  return diffDays;
}

const suma = (a, b) => {
    return a / b;
    }
const dias = (calculateDaysBetweenDates('2002-01-16', '2023-03-01'));
console.log(suma(dias, 360));


//escribe una funcion que multiplica dos numeros y te devuelve el resultado

const multiplicar = (a, b) => {
    return a * b;
    }

//funcion que me dibuja un triangulo de asteriscos  de 5 lineas de alto y 9 de ancho        

const triangulo = (a) => {
    for (let i = 1; i <= a; i++) {
        let linea = "";
        for (let j = 1; j <= a; j++) {
            if (i >= j) {
                linea += "*";
            } else {
                linea += " ";
            }
        }
        console.log(linea);
    }
}

triangulo(5);

//refactorizar el codigo para que sea mas legible   


c