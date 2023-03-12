
const heroes  = [{
    "id": "5d86371f1efebc31def272e2",
    "about": "Ipsum duis incididunt ullamco tempor. Amet incididunt Lorem consequat labore culpa. Pariatur amet veniam reprehenderit sunt laborum excepteur. Labore eu ut ut Lorem labore aliqua quis ex elit nulla in incididunt commodo aliquip. Velit excepteur eiusmod Lorem esse officia. Irure aliquip Lorem fugiat voluptate dolor duis consectetur aliquip pariatur tempor reprehenderit deserunt.",
    "picture": "https://www.sideshow.com/storage/product-images/903421/iron-man_marvel_gallery_5c4cced10da7f.jpg",
"squarePic": "https://dam.smashmexico.com.mx/wp-content/uploads/2018/06/27181227/ironman_portada2.jpg",
    "name": "Iron Man"
}];

const callbacksComponent = ( element ) => {

    console.log('callbacksComponent');
  
    const id = "5d86371f1efebc31def272e2";
    findHero( id, (hola) => {
      element.innerHTML = hola.name;
      console.log(hola.id);
  
    } )
  
  
  }
  
  /**
   * 
   * @param {String} id 
   * @param {(hero: Object)=> void } callback 
   */
  
  
  const findHero = ( id, callback ) => {
  
    const hero = heroes.find( hero => hero.id === id);
  
    callback( hero )
    console.log(hero);
  
  };
  
  callbacksComponent('prueba');