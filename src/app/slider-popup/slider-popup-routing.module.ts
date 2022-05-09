import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { SliderPopupPage } from './slider-popup.page';

const routes: Routes = [
  {
    path: '',
    component: SliderPopupPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class SliderPopupPageRoutingModule {}
