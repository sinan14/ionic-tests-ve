import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { VistPageRoutingModule } from './vist-routing.module';

import { VistPage } from './vist.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    VistPageRoutingModule
  ],
  declarations: [VistPage]
})
export class VistPageModule {}
