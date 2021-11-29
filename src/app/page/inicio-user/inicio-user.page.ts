import { Component, OnInit } from '@angular/core';
import { MenuController, NavController } from '@ionic/angular';

@Component({
  selector: 'app-inicio-user',
  templateUrl: './inicio-user.page.html',
  styleUrls: ['./inicio-user.page.scss'],
})
export class InicioUserPage implements OnInit {

  constructor(private menu:MenuController,public navControl:NavController) { }

  ngOnInit() {
  }

  salir(){
    localStorage.setItem('ingresado', '');
    this.navControl.navigateRoot('login')  ;
  }


}
