import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ProductDetailsModalPage } from './product-details-modal.page';

const routes: Routes = [
  {
    path: '',
    component: ProductDetailsModalPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ProductDetailsModalPageRoutingModule {}
