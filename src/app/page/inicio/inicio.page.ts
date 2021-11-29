import { Component, OnInit } from '@angular/core';
import { MenuController } from '@ionic/angular';

interface Componente{ //metodo para crear botones con iconos
  icon: string;
  name: string;
  redirecTo: string;
}
@Component({
  selector: 'app-inicio',
  templateUrl: './inicio.page.html',
  styleUrls: ['./inicio.page.scss'],
})
export class InicioPage implements OnInit { //OnInit crea el objeto al momento de levantar el servidor, levanta todo lo creado

 
  constructor(public menuController: MenuController) { } //aca se crea el objeto menuController de tipo MenuController

  ngOnInit() {
  }
  mostrarMenu(){ //se crea metodo que se llama en inicio html con el boton y se despliega el boton
    this.menuController.open('first');
  }

 
}
