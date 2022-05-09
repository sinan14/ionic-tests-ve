import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { NewHomePageRoutingModule } from './new-home-routing.module';

import { NewHomePage } from './new-home.page';
import { FileUploadModule } from 'ng2-file-upload';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    IonicModule,
    NewHomePageRoutingModule,
    FileUploadModule,
  ],
  declarations: [NewHomePage],
})
export class NewHomePageModule {}
