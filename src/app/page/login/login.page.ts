import { Component, OnInit } from '@angular/core';
import { Storage } from '@ionic/storage';
import { LoginService } from 'src/app/Services/login.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.page.html',
  styleUrls: ['./login.page.scss'],
  
})

export class LoginPage implements OnInit {

  ITEMS_KEY = 'info-users';

  contraInicio: string;
  emailInicio: string;
  data:any;
  private _storage: Storage;

  constructor(private storage:Storage, private login:LoginService) { 
    this.init();
  
  }
  ngOnInit() {
  }
  async init(){
    const storage = await this.storage.create(); //contaste storage, y lo crea.
    this._storage=storage;
  }
 
  Login(){
    this.storage.get(this.ITEMS_KEY).then((response)=>{
    this.login.validarLogin(this.contraInicio, this.emailInicio, response);
    });

    
  }
 
}
