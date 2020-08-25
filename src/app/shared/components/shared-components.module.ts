import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AdminLayoutComponent } from './layouts/admin-layout/admin-layout.component';
import { RouterModule } from '@angular/router';
import { AlertDialogComponent } from './alert-dialog/alert-dialog.component';

@NgModule({
  declarations: [AdminLayoutComponent, AlertDialogComponent],
  entryComponents: [AlertDialogComponent],
  imports: [
    CommonModule,
    RouterModule,
  ]
})
export class SharedComponentsModule { }
