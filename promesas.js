
console.log('iniciando programa de promesas');

const encontrarPokemon = (nombre) => new Promise((resolve, reject) => {
    setTimeout(()=>{
        const pokemones = ['pikachu', 'squirtle', 'charmander'];
        const busqueda = pokemones.find(pokemon => pokemon === nombre);
        if(busqueda){
            resolve(`El pokemon ${nombre} fue encontrado`);
        }
        reject(`El pokemon ${nombre} no fue encontrado`);
    },2000);
});


encontrarPokemon('squirte')
.then(resultado => console.log(resultado))
.catch(error => console.log(error));

console.log('terminado programa de promesas');
