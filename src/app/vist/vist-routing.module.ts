import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { VistPage } from './vist.page';

const routes: Routes = [
  {
    path: '',
    component: VistPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class VistPageRoutingModule {}
