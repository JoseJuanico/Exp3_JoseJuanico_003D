import { Injectable } from '@angular/core';
import { AlertController, NavController } from '@ionic/angular';
@Injectable({
  providedIn: 'root'
})
export class LoginService {

  constructor(public alertController:AlertController,public navControl: NavController) { }

  public validarLogin(password:string, email:string, dato:any){
    console.log(password, email,dato);

    const filtro = dato.find(x=>x.correo === email);
    const filtro2 = dato.find(x=>x.contrasena === password);
    console.log(filtro);
    
    
    if(filtro){
      if(filtro2 && filtro2.contrasena === filtro.contrasena){
        localStorage.setItem('ingresado', 'true'); //bandera
        this.navControl.navigateRoot('/inicio-user');
        this.presentAlert1(filtro.nombreCompleto)

      }else{
        this.presentAlert();
      }
      //this.router.navigate(['/inicio-user']); 
    }else{
      this.presentAlert();
    }
  };


  async presentAlert() {
    const alert = await this.alertController.create({
      cssClass: 'my-custom-class',
      header: 'Error',
      message: 'Correo o contraseña incorrecta!',
      buttons: ['Aceptar']
    });

    await alert.present();

    const { role } = await alert.onDidDismiss();
    console.log('onDidDismiss resolved with role', role);
  }
  async presentAlert1( nombre:string) {
    const alert = await this.alertController.create({
      cssClass: 'my-custom-class',
      header: 'Inicio de Sesión exitoso',
      message: 'Bienvenid@ '+nombre,
      buttons: ['Aceptar']
    });

    await alert.present();

    const { role } = await alert.onDidDismiss();
    console.log('onDidDismiss resolved with role', role);
  }

}
