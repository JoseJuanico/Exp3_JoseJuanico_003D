import { Injectable } from '@angular/core';
import { Storage } from '@ionic/storage';


export interface User{
  id: number;
  nombreCompleto: string;
  correo: string;
  nacimiento: Date;
  musicaPreferida: string;
  contrasena: string;
}

const ITEMS_KEY = 'info-users';
@Injectable({
  providedIn: 'root'
})
export class ServiceregistroService {

  private _storage: Storage; //permite tomar el almacenamiento de datos y registarlo en el
  constructor(private storage:Storage) { 
    this.init(); //permite crear el storage
  }


  async init(){
    const storage = await this.storage.create(); //contaste storage, y lo crea.
    this._storage=storage;
  }

  agregarUsuario(user:User):Promise<any>{ //recibe objeto(user) del tipo User, definido en lainterfaz, y el metodo develve una promesa, un objeto(resultado) any objeto de tipo de dato dentro de la interfaz
    return this.storage.get(ITEMS_KEY).then((users:User[])=>{ //devuleve itemskey(colecion de datos), then recibida por users que sera un arreglo de tipo interfaz User
      if(users) {
        users.push(user);
        return this.storage.set(ITEMS_KEY, users);
      }else{
        return this.storage.set(ITEMS_KEY,[user]);
      }
    })
  }

  obtenerUsuario():Promise<User[]>{ //devuleve promesa conjunto de objetos, devuleve un arreglo de interfaz User
    return this.storage.get(ITEMS_KEY);
  }






















/*
  actualizarUsuario(user:User): Promise<any>{
    return this.storage.get(ITEMS_KEY).then((users:User[])=>{
      if(!users || users.length == 0){
        return null;
      }
      let newUser: User[] = [];
      for(let i of users){
        if(i.id === user.id){
          newUser.push(user);
        }else{
          newUser.push(i);
        }
      }
      return this.storage.set(ITEMS_KEY, newUser);
    });
  }


  eliminarUsuario(id:number):Promise<User>{
    return this.storage.get(ITEMS_KEY).then((users:User[])=>{
      if (!users || users.length === 0){
        return null;
      }
      let toKeep: User[]=[];
      for(let i of users){
        if(i.id !== id){
          toKeep.push(i);
        }
      }
      return this.storage.set(ITEMS_KEY, toKeep);
    });

  }*/
}
