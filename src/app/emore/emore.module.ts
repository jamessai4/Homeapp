import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { EmorePageRoutingModule } from './emore-routing.module';

import { EmorePage } from './emore.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    EmorePageRoutingModule
  ],
  declarations: [EmorePage]
})
export class EmorePageModule {}
