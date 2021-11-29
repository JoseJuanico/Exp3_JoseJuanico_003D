import { NgModule } from '@angular/core';
import { ActivatedRoute, PreloadAllModules, RouterModule, Routes } from '@angular/router';
import { IngresadoGuard } from './ingresado.guard';
import { NoIngresadoGuard } from './no-ingresado.guard';

const routes: Routes = [
  {
    path: '',
    redirectTo: 'login',
    pathMatch: 'full'
  },
  {
    path: 'inicio',
    loadChildren: () => import('./page/inicio/inicio.module').then( m => m.InicioPageModule),
    canActivate:[NoIngresadoGuard]

  },
  {
    path: 'estilos',
    loadChildren: () => import('./page/estilos/estilos.module').then( m => m.EstilosPageModule),
    
  },
  {
    path: 'formulario',
    loadChildren: () => import('./page/formulario/formulario.module').then( m => m.FormularioPageModule),
    canActivate:[NoIngresadoGuard]
  },
  {
    path: 'login',
    loadChildren: () => import('./page/login/login.module').then( m => m.LoginPageModule),
  },
  {
    path: 'inicio-user',
    loadChildren: () => import('./page/inicio-user/inicio-user.module').then( m => m.InicioUserPageModule),
    canActivate:[IngresadoGuard]
  } 
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
