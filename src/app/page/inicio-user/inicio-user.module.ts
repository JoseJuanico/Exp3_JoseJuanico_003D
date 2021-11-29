import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { InicioUserPageRoutingModule } from './inicio-user-routing.module';

import { InicioUserPage } from './inicio-user.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    InicioUserPageRoutingModule
  ],
  declarations: [InicioUserPage]
})
export class InicioUserPageModule {}
