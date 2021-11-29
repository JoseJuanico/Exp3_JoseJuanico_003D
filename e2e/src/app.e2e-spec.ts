import { AppPage } from './app.po';

describe('new App', () => { //describe: se denomina unidad de codigo, va a un elemento o mas que quiera testear, y la maquina atraves de la biblioteca protractor si la prueba se ejecuto de manera correcta y encontro lo que busque
                                //el new App es un titulo, es una etiqueta que puede ser cualquiera, lo que indica al usuario cuando se hace el testeo., () indica que es una funcion anonima. no tiene nombre
  let page: AppPage;   // page del tipo appPage porque necesitamos los metodos del archivo po.ts

  //configuracion de la prueba
  beforeEach(() => {  //beforeEach parametro que permite unir la instanciacion como desde donde comenzare mi prueba, "antes de la prueba necesito instanciar un objeto" eso significa
    page = new AppPage(); //instanciacion
  });

  //prueba 1
  it('should be blank', () => { //it: indica a la maquina que realizare una prueba a una unidad de codigo especifica del proyecto, should be.... es una etiqueta osea es un titulo que cuando se ejecute la prueba, mostrara la etiqueta del describe y luego la de dentro del it
    page.navigateTo(); //se invoca a navigateTo(), devolvera la ejecucion de la prueba desde ele inicio
    expect(page.getParagraphText()).toContain('Start with Ionic UI Components'); //expect: valida que lo que estoy probando en esta linea entre parentesis exista en el proyecto
              //se llama al metodo getPara.... devuelve el texto programado ya. toContain: metodo que permite comparar string('startwih.... ). el contenido obtenido lo comparara con start with......
  });

  //prueba 2
});




//archivo de pruebas, indica al compilador de node que estamos realizando pruebas.