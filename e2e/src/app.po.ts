import { browser, by, element } from 'protractor'; 

export class AppPage {
  navigateTo() { //navigateTo   devuelve la confi indicandole al browser desde donde quiero comenzar a ha cer la prueba,
    return browser.get('/'); //por defecto al ser de extremo a extremo implementamos el / que indica que la prueba sera ejecutada desde el primer page configurado en el approuting
  }

  getParagraphText() { //accede a un elemento que tenga en un html, por medio de su css, y traera el text de ese elemento 
    return element(by.deepCss('app-root ion-content')).getText(); //element: devuleve un determinado elemento de mi html,  by.deepCss  accedera al elemento por medio del css llamado deepCss, y de ese elemento rtaera getText(): el texto o contenido dentro de ese elemento
  }                               //app-root  proyecto determinado         ion-content acceder al ion-content
}



//archivo por defecto que nos sirve de ejemplo

//browser: permite  automatizar las pruebas, como se realiza prueba de extremo a extrwemo le debemos indicar al archivo de pruebas que cuando comienze a chequear el proceso de automatizacion comiente desde el principio.
//by: permite en angular para ionic especificar en funcion del elemento que yo quiero testear de mi proyecto, la forma que hare el testeo, por ejemeplo por un css, id, class, etc
//element: referencia a una etiqueta de mi html que necesito testear por el contenido que esta tenga.

