import { Component } from '@angular/core';

//crear botom hamburguesa, esta interface esta dentro de inicio.page.ts
interface Componente{
  icon: string; 
  name: string; 
  redirecTo:string;
}



@Component({
  selector: 'app-root',
  templateUrl: 'app.component.html',
  styleUrls: ['app.component.scss'],
})
export class AppComponent {
  constructor() {}

  componentes : Componente[] = [
    {
      icon: 'newspaper-outline',
      name: 'Iniciar Sesión',
      redirecTo: '/login'
    },
    {
      icon: "person-add-outline",
      name: 'Registrarse',
      redirecTo: '/formulario'
    },
    {
      icon: 'star-outline',
      name: 'Top musical',
      redirecTo: '/estilos'
    },
    
   
  ];
}

