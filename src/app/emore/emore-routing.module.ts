import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { EmorePage } from './emore.page';

const routes: Routes = [
  {
    path: '',
    component: EmorePage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class EmorePageRoutingModule {}
