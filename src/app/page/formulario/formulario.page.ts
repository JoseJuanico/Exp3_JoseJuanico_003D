import { Component, OnInit, ViewChild } from '@angular/core';
import { ServiceregistroService, User } from 'src/app/Services/serviceregistro.service';
import { Platform, ToastController, IonList } from '@ionic/angular'; //platform controla plataformas mobile, toastcontroller controla mensaje con tiempo determinado, ionlist permite elegir entre dos opciones y permite cargar datos de la bd enla page

@Component({
  selector: 'app-formulario',
  templateUrl: './formulario.page.html',
  styleUrls: ['./formulario.page.scss'],
})
export class FormularioPage implements OnInit {

    usuario = {
    nombre: '',
    email:'',
    password:'',
    comboEstilo: '',
    fechaNacimiento: '',
  } 

  user:User[] = []; //arreglo user de tipo User
  newUser: User = <User>{}; //objeto newUser que sera de tipo User que devolvera un arreglo de tipo User
  @ViewChild('listaUsuarios')listaUsuario : IonList; //cargar objetos dentro del ionlist

  constructor(private almacenamiento: ServiceregistroService,
    private plataforma:Platform, private toastControl: ToastController) { 
      this.plataforma.ready().then(()=>{
        this.cargarDatos();
      })
    }

  ngOnInit() {
  }
 //metodo que devuleve un mensaje "submit" y la informacion de la clase usuario
  onSubmit(){
    console.log('submit');
    console.log(this.usuario);

  }
  cargarDatos(){
    this.almacenamiento.obtenerUsuario().then(user=>{
      this.user=user;
    });
  }

  agregarDatos(){
    this.newUser.id = Date.now();
    this.almacenamiento.agregarUsuario(this.newUser).then(user=>{
      this.newUser = <User>{};
      this.mostrarToast('Agregado');
      this.cargarDatos();
    });
  }
 



  /*
  actualizarUsuario(user: User){
    user.nombreCompleto = `UPDATED: ${user.nombreCompleto}`;
    this.almacenamiento.agregarUsuario(user).then(item=>{
      this.mostrarToast('Actualizado')
      this.listaUsuario.closeSlidingItems();
      this.cargarDatos();
    });

  }

  borrarUsuario(user:User){
    this.almacenamiento.eliminarUsuario(user.id).then(item=>{
      this.mostrarToast('Eliminado');
      this.listaUsuario.closeSlidingItems();
      this.cargarDatos();

    })
  }*/
  async mostrarToast(mensaje){
    const toast = await this.toastControl.create({
      message: mensaje,
      duration: 1800,
    });
    toast.present();

  }
 
}
