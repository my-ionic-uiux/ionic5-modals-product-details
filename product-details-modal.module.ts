import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { ProductDetailsModalPageRoutingModule } from './product-details-modal-routing.module';

import { ProductDetailsModalPage } from './product-details-modal.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ProductDetailsModalPageRoutingModule
  ],
  declarations: [ProductDetailsModalPage]
})
export class ProductDetailsModalPageModule {}
