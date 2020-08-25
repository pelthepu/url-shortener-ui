import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SharedComponentsModule } from './components/shared-components.module';
import { SharedMaterialModule } from './shared-material.module';

@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    SharedMaterialModule,
    SharedComponentsModule,
  ]
})
export class SharedModule { }
