import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { SliderPopupPageRoutingModule } from './slider-popup-routing.module';

import { SliderPopupPage } from './slider-popup.page';
import { SwiperModule } from 'swiper/angular';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    SliderPopupPageRoutingModule,
    SwiperModule,
  ],
  declarations: [SliderPopupPage],
})
export class SliderPopupPageModule {}
