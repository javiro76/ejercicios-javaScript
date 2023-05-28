async function hacerTarea() {
    console.log('Comenzando tarea...');
    await esperar(1000); // Esperar 2000 milisegundos (2 segundos)
    console.log('Tarea completada!');
  }
  
  function esperar(ms) {
    return new Promise(resolve => setTimeout(resolve, ms));
  }
  
  console.log('Inicio del programa');
  hacerTarea();
  console.log('Fin del programa');