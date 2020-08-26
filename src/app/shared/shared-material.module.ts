import { NgModule } from '@angular/core';
import { MatCardModule } from '@angular/material/card';
import { MatDialogModule } from '@angular/material/dialog';
import { MatIconModule } from '@angular/material/icon';
import { MatTableModule } from '@angular/material/table';
import { MatButtonModule } from '@angular/material/button';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatTooltipModule } from '@angular/material/tooltip';
import { MatSnackBarModule } from '@angular/material/snack-bar';

@NgModule({
  exports: [
    MatButtonModule,
    MatInputModule,
    MatFormFieldModule,
    MatCardModule,
    MatIconModule,
    MatDialogModule,
    MatTableModule,
    MatTooltipModule,
    MatSnackBarModule,
  ],

})
export class SharedMaterialModule {}
