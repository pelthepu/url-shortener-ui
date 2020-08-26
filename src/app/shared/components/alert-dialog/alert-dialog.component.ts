import { Component, OnInit, Inject, Output, EventEmitter } from '@angular/core';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';

@Component({
  selector: 'app-alert-dialog',
  templateUrl: './alert-dialog.component.html',
  styleUrls: ['./alert-dialog.component.scss']
})
export class AlertDialogComponent  {
  
  message: string = "Are you sure?"
  confirmButtonText = "Close"

  @Output() onConfirm=new EventEmitter(); 
  constructor(
    @Inject(MAT_DIALOG_DATA) private data: any,
    private dialogRef: MatDialogRef<AlertDialogComponent>) {
      if(data){
    this.message = data.message || this.message;
    if (data.buttonText) {
      this.confirmButtonText = data.buttonText.ok || this.confirmButtonText;
    }
      }
  }

  onConfirmClick(): void {
    this.dialogRef.close(true);
  }

}