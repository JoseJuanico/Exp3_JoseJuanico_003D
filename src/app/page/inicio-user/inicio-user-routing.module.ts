import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { InicioUserPage } from './inicio-user.page';

const routes: Routes = [
  {
    path: '',
    component: InicioUserPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class InicioUserPageRoutingModule {}
