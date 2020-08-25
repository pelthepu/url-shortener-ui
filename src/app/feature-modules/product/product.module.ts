import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ProductListComponent } from './components/product-list/product-list.component';
import { RouterModule } from '@angular/router';
import { productRoutes } from './product.routes';
import { ProductDetailComponent } from './components/product-detail/product-detail.component';
import { SharedModule } from 'src/app/shared/shared.module';
import { SharedMaterialModule } from 'src/app/shared/shared-material.module';
import { ProductFormComponent } from './components/product-form/product-form.component';
import { ReactiveFormsModule } from '@angular/forms';
import { FlexLayoutModule, StyleUtils } from '@angular/flex-layout';

@NgModule({
  declarations: [ProductListComponent, ProductDetailComponent, ProductFormComponent],
  imports: [
    CommonModule,
    SharedModule,
    SharedMaterialModule,
    ReactiveFormsModule,
    FlexLayoutModule,
    RouterModule.forChild(productRoutes)
  ],
  providers: [
    StyleUtils
  ]
})
export class ProductModule { }
